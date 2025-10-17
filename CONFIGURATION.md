# 🔧 Guide de configuration GAZHUNTERS

## 🚀 Démarrage rapide

### Option 1 : Script automatique (Windows)
```bash
# Double-clique sur start.bat ou exécute :
start.bat
```

### Option 2 : Installation manuelle
```bash
# 1. Installer les dépendances
npm install

# 2. Configurer l'email
cp env.example .env
# Édite le fichier .env avec tes paramètres

# 3. Démarrer le serveur
npm start
```

## 📧 Configuration email (OBLIGATOIRE)

### Pour Gmail :

1. **Active l'authentification à 2 facteurs** sur ton compte Google
2. **Génère un mot de passe d'application** :
   - Va sur [myaccount.google.com](https://myaccount.google.com)
   - Sécurité → Mots de passe des applications
   - Sélectionne "Autre" et nomme l'app "GAZHUNTERS"
   - Copie le mot de passe généré

3. **Configure le fichier `.env`** :
```env
EMAIL_USER=ton-email@gmail.com
EMAIL_PASS=le-mot-de-passe-application-genere
NOTIFICATION_EMAIL=ton-email-de-notification@gmail.com
```

### Pour Outlook/Hotmail :
```env
EMAIL_USER=ton-email@outlook.com
EMAIL_PASS=ton-mot-de-passe
NOTIFICATION_EMAIL=ton-email-de-notification@outlook.com
```

## 🧪 Test de la configuration

1. **Démarre le serveur** : `npm start`
2. **Ouvre l'application** : http://localhost:3000
3. **Teste un signalement** :
   - Remplis le formulaire
   - Ajoute une photo (optionnel)
   - Soumets le signalement
4. **Vérifie ta boîte email** : Tu devrais recevoir une notification

## 🔍 Dépannage

### ❌ "Erreur lors de l'envoi de l'email"
- Vérifie que le fichier `.env` existe et est bien configuré
- Pour Gmail : utilise un mot de passe d'application, pas ton mot de passe normal
- Vérifie que l'authentification à 2 facteurs est activée

### ❌ "Géolocalisation non supportée"
- L'application fonctionne quand même avec une position par défaut (Paris)
- Sur mobile : autorise la géolocalisation dans les paramètres du navigateur

### ❌ "Port déjà utilisé"
- Change le port dans le fichier `.env` : `PORT=3001`
- Ou arrête l'autre application qui utilise le port 3000

### ❌ "Module non trouvé"
- Exécute : `npm install`
- Vérifie que Node.js est installé : `node --version`

## 📱 Installation PWA

1. **Sur Chrome/Edge** : Clique sur l'icône "Installer" dans la barre d'adresse
2. **Sur mobile** : Menu → "Ajouter à l'écran d'accueil"
3. **L'application** sera installée comme une vraie app

## 🌐 Déploiement en production

### Sur Heroku :
```bash
# 1. Créer l'app
heroku create gazhunters-app

# 2. Configurer les variables d'environnement
heroku config:set EMAIL_USER=ton-email@gmail.com
heroku config:set EMAIL_PASS=ton-mot-de-passe-app
heroku config:set NOTIFICATION_EMAIL=ton-email-notif@gmail.com

# 3. Déployer
git push heroku main
```

### Sur Vercel/Netlify :
- Configure les variables d'environnement dans le dashboard
- Le serveur backend devra être déployé séparément

## 📊 Monitoring

- **Logs du serveur** : Visibles dans la console où tu as lancé `npm start`
- **Notifications envoyées** : Logs dans la console du serveur
- **Erreurs** : Affichées dans la console du navigateur (F12)

## 🔒 Sécurité

- ⚠️ **Ne commite jamais** le fichier `.env` dans Git
- 🔐 **Utilise des mots de passe d'application** pour Gmail
- 🛡️ **Limite l'accès** au serveur en production
- 📧 **Valide les données** côté serveur (déjà fait dans le code)

## 🆘 Support

Si tu as des problèmes :
1. Vérifie ce guide de dépannage
2. Regarde les logs dans la console
3. Teste avec un autre service email si Gmail ne fonctionne pas

