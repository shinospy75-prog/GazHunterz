# 🚨 GAZHUNTERS

Application PWA pour signaler les bonbonnes de gaz hilarant en Île-de-France.

## ✨ Fonctionnalités

- 📍 **Géolocalisation réelle** : Utilise la position GPS de l'utilisateur
- 📷 **Upload de photos** : Ajout d'images aux signalements
- 📧 **Notifications par email** : Alertes automatiques pour chaque nouveau signalement
- 🗺️ **Carte interactive** : Visualisation des signalements sur Leaflet
- 📱 **PWA** : Installation possible sur mobile et desktop
- 💾 **Stockage local** : Sauvegarde des signalements en local

## 🚀 Installation et démarrage

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration email
Copie le fichier `env.example` vers `.env` et configure tes paramètres :

```bash
cp env.example .env
```

Édite le fichier `.env` :
```env
EMAIL_USER=ton-email@gmail.com
EMAIL_PASS=ton-mot-de-passe-application
NOTIFICATION_EMAIL=ton-email-de-notification@gmail.com
PORT=3000
```

**⚠️ Important pour Gmail :**
- Utilise un "mot de passe d'application" et non ton mot de passe normal
- Va dans Paramètres Google > Sécurité > Mots de passe des applications
- Génère un nouveau mot de passe pour cette application

### 3. Démarrage du serveur
```bash
# Mode développement (avec rechargement automatique)
npm run dev

# Mode production
npm start
```

L'application sera disponible sur : `http://localhost:3000`

## 📧 Configuration des notifications

Les notifications par email sont envoyées automatiquement à chaque nouveau signalement avec :
- Localisation précise
- Description du signalement
- Coordonnées GPS
- Date/heure
- Indication si une photo est incluse

## 🛠️ Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript (ES6+)
- **Cartographie** : Leaflet.js
- **Backend** : Node.js, Express
- **Email** : Nodemailer
- **PWA** : Service Worker, Web App Manifest

## 📱 Utilisation

1. **Signaler une bonbonne** :
   - Remplis le formulaire avec la localisation et description
   - Ajoute une photo si possible
   - Autorise la géolocalisation pour une position précise
   - Soumets le signalement

2. **Visualiser les signalements** :
   - Consulte la carte pour voir tous tes signalements
   - Clique sur les marqueurs pour voir les détails

3. **Notifications** :
   - Tu recevras un email à chaque nouveau signalement
   - L'email contient tous les détails du signalement

## 🔧 Développement

### Structure des fichiers
```
GAZZHUNTERZ/
├── index.html          # Page principale
├── script.js           # Logique JavaScript
├── style.css           # Styles CSS
├── sw.js              # Service Worker
├── manifest.json      # Configuration PWA
├── server.js          # Serveur backend
├── package.json       # Dépendances Node.js
└── env.example        # Exemple de configuration
```

### API Endpoints
- `POST /api/send-notification` : Envoie une notification par email
- `GET /api/test` : Test de l'API
- `GET /api/signalements` : Récupère les signalements (à implémenter)

## 🚀 Déploiement

Pour déployer en production :
1. Configure les variables d'environnement sur ton serveur
2. Installe les dépendances : `npm install --production`
3. Démarre le serveur : `npm start`

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

