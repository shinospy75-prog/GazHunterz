# 📥 Guide d'installation GAZHUNTERS

## 🔧 Prérequis

### 1. Installer Node.js

**Option A : Téléchargement direct**
1. Va sur [nodejs.org](https://nodejs.org/)
2. Télécharge la version LTS (recommandée)
3. Lance l'installateur et suis les instructions
4. Redémarre ton terminal/PowerShell

**Option B : Via Chocolatey (Windows)**
```powershell
# Installe Chocolatey d'abord si tu ne l'as pas
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Puis installe Node.js
choco install nodejs
```

**Option C : Via Winget (Windows 10/11)**
```powershell
winget install OpenJS.NodeJS
```

### 2. Vérifier l'installation
Ouvre un nouveau terminal/PowerShell et tape :
```bash
node --version
npm --version
```

Tu devrais voir des numéros de version s'afficher.

## 🚀 Installation de GAZHUNTERS

### 1. Télécharger le projet
Si tu n'as pas encore le projet :
```bash
# Clone le projet (si c'est un repo Git)
git clone [URL_DU_REPO]
cd GAZZHUNTERZ

# Ou télécharge et extrait l'archive ZIP
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration email
```bash
# Copie le fichier d'exemple
copy env.example .env

# Édite le fichier .env avec un éditeur de texte
notepad .env
```

Configure tes paramètres email dans `.env` :
```env
EMAIL_USER=ton-email@gmail.com
EMAIL_PASS=ton-mot-de-passe-application
NOTIFICATION_EMAIL=ton-email-de-notification@gmail.com
PORT=3000
```

### 4. Démarrer l'application
```bash
# Démarrage simple
npm start

# Ou utilise le script Windows
start.bat
```

## 📧 Configuration Gmail (Recommandé)

### 1. Préparer ton compte Gmail
1. Va sur [myaccount.google.com](https://myaccount.google.com)
2. Sécurité → Authentification à 2 facteurs → **ACTIVER**
3. Sécurité → Mots de passe des applications

### 2. Générer un mot de passe d'application
1. Dans "Mots de passe des applications"
2. Sélectionne "Autre (nom personnalisé)"
3. Nomme l'app "GAZHUNTERS"
4. **Copie le mot de passe généré** (16 caractères)

### 3. Configurer dans .env
```env
EMAIL_USER=ton-email@gmail.com
EMAIL_PASS=abcd-efgh-ijkl-mnop  # Le mot de passe d'application généré
NOTIFICATION_EMAIL=ton-email@gmail.com
```

## 🧪 Test de l'installation

### 1. Démarrer le serveur
```bash
npm start
```

Tu devrais voir :
```
🚀 Serveur GAZHUNTERS démarré sur le port 3000
📧 Notifications envoyées à: ton-email@gmail.com
🌐 Application disponible sur: http://localhost:3000
```

### 2. Tester l'application
1. Ouvre ton navigateur : http://localhost:3000
2. Remplis le formulaire de signalement
3. Ajoute une photo (optionnel)
4. Soumets le signalement
5. Vérifie ta boîte email pour la notification

## 🔍 Dépannage

### ❌ "node n'est pas reconnu"
- Node.js n'est pas installé ou pas dans le PATH
- Redémarre ton terminal après installation
- Vérifie avec `node --version`

### ❌ "npm n'est pas reconnu"
- npm est installé avec Node.js
- Si le problème persiste, réinstalle Node.js

### ❌ "Erreur lors de l'envoi de l'email"
- Vérifie le fichier `.env`
- Pour Gmail : utilise un mot de passe d'application
- Active l'authentification à 2 facteurs

### ❌ "Port 3000 déjà utilisé"
- Change le port dans `.env` : `PORT=3001`
- Ou arrête l'autre application

### ❌ "Module non trouvé"
- Exécute `npm install` dans le dossier du projet
- Vérifie que tu es dans le bon dossier

## 🎯 Prochaines étapes

Une fois l'installation terminée :
1. **Teste l'application** avec quelques signalements
2. **Configure ton email** pour recevoir les notifications
3. **Partage l'application** avec d'autres utilisateurs
4. **Déploie en production** si nécessaire

## 📞 Aide supplémentaire

Si tu rencontres des problèmes :
1. Vérifie ce guide étape par étape
2. Regarde les messages d'erreur dans la console
3. Teste avec un autre service email si Gmail ne fonctionne pas
4. Vérifie que tous les fichiers sont présents dans le dossier

## 🚀 Déploiement (Optionnel)

Pour mettre l'application en ligne :
- **Heroku** : `heroku create gazhunters-app && git push heroku main`
- **Vercel** : Connecte ton repo GitHub
- **Netlify** : Drag & drop du dossier

N'oublie pas de configurer les variables d'environnement sur la plateforme de déploiement !






