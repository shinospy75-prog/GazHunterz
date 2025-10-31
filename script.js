function getUserId() {
  try {
    let id = localStorage.getItem('gazhunters_user_id');
    if (!id) {
      id = 'user-' + crypto.randomUUID();
      localStorage.setItem('gazhunters_user_id', id);
    }
    return id;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'ID utilisateur:', error);
    return 'user-' + Date.now();
  }
}

const userId = getUserId();
const map = L.map('map').setView([48.85, 2.35], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

function sanitize(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

function loadSignalements() {
  try {
    const data = JSON.parse(localStorage.getItem('gazhunters_signalements') || '[]');
    data.filter(s => s.userId === userId).forEach(s => {
      const marker = L.marker([s.lat, s.lng]).addTo(map);
      let popupContent = `<strong>${sanitize(s.location)}</strong><br>${sanitize(s.description)}`;
      if (s.photo) {
        popupContent += `<br><img src="${s.photo}" style="max-width: 200px; margin-top: 10px;">`;
      }
      marker.bindPopup(popupContent);
    });
  } catch (error) {
    console.error('Erreur lors du chargement des signalements:', error);
  }
}

loadSignalements();

let lastSubmission = 0;
let currentPosition = null;

// Fonction pour obtenir la géolocalisation réelle
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Géolocalisation non supportée'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        resolve(currentPosition);
      },
      error => {
        console.error('Erreur de géolocalisation:', error);
        // Fallback sur Paris si la géolocalisation échoue
        currentPosition = { lat: 48.85, lng: 2.35 };
        resolve(currentPosition);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
}

// Fonction pour convertir une image en base64
function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Redimensionne et compresse l'image côté client pour limiter la taille
async function resizeImage(file, maxWidth = 1280, maxHeight = 1280, quality = 0.7) {
  const dataUrl = await convertImageToBase64(file);
  const img = new Image();
  return new Promise((resolve) => {
    img.onload = () => {
      let { width, height } = img;
      const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
      const targetWidth = Math.round(width * ratio);
      const targetHeight = Math.round(height * ratio);

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      // Utiliser JPEG pour un meilleur taux de compression
      const compressed = canvas.toDataURL('image/jpeg', quality);
      resolve(compressed);
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

// Petite zone de statut sous le formulaire (créée dynamiquement)
function ensureStatusElement() {
  // Déjà présent dans index.html, on l'utilise si possible
  let el = document.getElementById('form-status');
  if (!el) {
    el = document.createElement('div');
    el.id = 'form-status';
    const form = document.getElementById('form-signalement');
    form.parentNode.insertBefore(el, form.nextSibling);
  }
  if (!el.querySelector('.text')) {
    const text = document.createElement('span');
    text.className = 'text';
    el.appendChild(text);
  }
  if (!el.querySelector('.spinner')) {
    const sp = document.createElement('span');
    sp.className = 'spinner';
    sp.hidden = true;
    el.insertBefore(sp, el.firstChild);
  }
  return el;
}

function setStatus(message, type) {
  // type: 'info' | 'success' | 'error'
  const el = ensureStatusElement();
  el.classList.remove('info', 'success', 'error');
  if (type) el.classList.add(type);
  const text = el.querySelector('.text');
  const spinner = el.querySelector('.spinner');
  text.textContent = message || '';
  spinner.hidden = type === 'success' || type === 'error' || !message;
}

function withTimeout(promise, ms) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error('TIMEOUT')), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

document.getElementById('form-signalement').addEventListener('submit', async function(e) {
  e.preventDefault();

  const now = Date.now();
  if (now - lastSubmission < 10000) {
    alert("Veuillez attendre quelques secondes avant de soumettre un nouveau signalement.");
    return;
  }

  const location = sanitize(document.getElementById('location').value.trim());
  const description = sanitize(document.getElementById('description').value.trim());
  const photoInput = document.getElementById('photo');
  const submitBtn = this.querySelector('button[type="submit"]');

  if (!location || !description) {
    alert('Veuillez remplir tous les champs requis.');
    return;
  }

  try {
    submitBtn.disabled = true;
    setStatus('Obtention de votre position…', 'info');
    // Obtenir la géolocalisation réelle
    const position = await getCurrentLocation();
    
    // Traiter la photo si présente
    let photoBase64 = null;
    if (photoInput.files && photoInput.files[0]) {
      setStatus('Traitement de la photo…', 'info');
      const file = photoInput.files[0];
      // Vérification simple du type et taille (< 10 Mo)
      if (!file.type.startsWith('image/')) {
        alert('Le fichier sélectionné doit être une image.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('Image trop volumineuse (max 10 Mo).');
        return;
      }
      // Compression/redimensionnement
      photoBase64 = await resizeImage(file, 1280, 1280, 0.72);
    }

    const signalement = {
      userId,
      location,
      description,
      lat: position.lat,
      lng: position.lng,
      timestamp: now,
      photo: photoBase64
    };

    // Sauvegarder localement
    const data = JSON.parse(localStorage.getItem('gazhunters_signalements') || '[]');
    data.push(signalement);
    localStorage.setItem('gazhunters_signalements', JSON.stringify(data));

    // Ajouter le marqueur sur la carte
    const marker = L.marker([position.lat, position.lng]).addTo(map);
    let popupContent = `<strong>${location}</strong><br>${description}`;
    if (photoBase64) {
      popupContent += `<br><img src="${photoBase64}" style="max-width: 200px; margin-top: 10px;">`;
    }
    marker.bindPopup(popupContent);

    // Envoyer une notification par email
    setStatus('Envoi de la notification…', 'info');
    await sendEmailNotification(signalement);

    setStatus('Merci ! Signalement enregistré et notification envoyée ✅', 'success');
    lastSubmission = now;
    this.reset();
    
  } catch (error) {
    console.error('Erreur lors de la soumission:', error);
    setStatus('Une erreur est survenue. Veuillez réessayer.', 'error');
  } finally {
    submitBtn.disabled = false;
  }
});

// Fonction pour envoyer une notification par email
async function sendEmailNotification(signalement) {
  try {
    const base = (window.GHZ_CONFIG && window.GHZ_CONFIG.API_BASE_URL) ? window.GHZ_CONFIG.API_BASE_URL.replace(/\/$/, '') : '';
    const endpoint = base ? `${base}/api/send-notification` : '/api/send-notification';
    const response = await withTimeout(fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: signalement.location,
        description: signalement.description,
        coordinates: `${signalement.lat}, ${signalement.lng}`,
        timestamp: new Date(signalement.timestamp).toLocaleString('fr-FR'),
        hasPhoto: !!signalement.photo
      })
    }), 8000); // Timeout de 8s pour éviter de bloquer l'UI sur Pages

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi de la notification');
    }

    console.log('Notification envoyée avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification:', error);
    // En environnement GitHub Pages (statique), l'API peut être indisponible : on n'échoue pas le flux utilisateur
    setStatus("Signalement enregistré localement. L'envoi d'email sera tenté plus tard.", 'info');
  }
}