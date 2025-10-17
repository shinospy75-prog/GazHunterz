const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Servir les fichiers statiques

// Configuration de l'email
// 1) Si SMTP_* défini, on utilise un transport SMTP générique (Brevo/Mailjet/etc.)
// 2) Sinon fallback sur service 'gmail' avec EMAIL_USER/EMAIL_PASS
let transporter;
if (process.env.SMTP_HOST) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
    auth: (process.env.SMTP_USER && process.env.SMTP_PASS) ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    } : undefined
  });
} else {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

// Route pour envoyer les notifications par email
app.post('/api/send-notification', async (req, res) => {
  try {
    const { location, description, coordinates, timestamp, hasPhoto } = req.body;

    // Vérifier que tous les champs requis sont présents
    if (!location || !description || !coordinates || !timestamp) {
      return res.status(400).json({ 
        error: 'Données manquantes' 
      });
    }

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL, // Email où tu veux recevoir les notifications
      subject: `🚨 Nouveau signalement GAZHUNTERS - ${location}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #e74c3c; color: white; padding: 20px; text-align: center;">
            <h1>🚨 GAZHUNTERS</h1>
            <p>Nouveau signalement reçu</p>
          </div>
          
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #2c3e50;">Détails du signalement</h2>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <strong>📍 Localisation :</strong> ${location}
            </div>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <strong>📝 Description :</strong><br>
              ${description}
            </div>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <strong>🗺️ Coordonnées :</strong> ${coordinates}
            </div>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <strong>📅 Date/Heure :</strong> ${timestamp}
            </div>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <strong>📷 Photo :</strong> ${hasPhoto ? '✅ Incluse' : '❌ Aucune photo'}
            </div>
          </div>
          
          <div style="background-color: #2c3e50; color: white; padding: 15px; text-align: center;">
            <p>Merci de contribuer à la lutte contre la pollution au gaz hilarant !</p>
            <p><small>GAZHUNTERS - Repérons. Signalons. Nettoyons.</small></p>
          </div>
        </div>
      `
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    
    console.log(`Notification envoyée pour: ${location}`);
    res.json({ 
      success: true, 
      message: 'Notification envoyée avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de la notification' 
    });
  }
});

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API GAZHUNTERS fonctionnelle', 
    timestamp: new Date().toISOString() 
  });
});

// Route pour obtenir tous les signalements (optionnel)
app.get('/api/signalements', (req, res) => {
  // Ici tu pourrais connecter à une base de données
  res.json({ 
    message: 'Endpoint pour récupérer les signalements',
    note: 'À implémenter avec une vraie base de données'
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur GAZHUNTERS démarré sur le port ${PORT}`);
  console.log(`📧 Notifications envoyées à: ${process.env.NOTIFICATION_EMAIL}`);
  console.log(`🌐 Application disponible sur: http://localhost:${PORT}`);
});

