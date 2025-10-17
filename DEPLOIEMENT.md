# 🚀 Guide de déploiement GAZHUNTERS

## 🌐 Options de déploiement

### 1. GitHub Pages (Gratuit - Frontend seulement)
- ✅ **Gratuit**
- ✅ **Automatique** avec GitHub Actions
- ❌ **Pas de backend** (pas d'emails)
- 🔗 **URL** : `https://TON-USERNAME.github.io/gazhunters`

### 2. Netlify (Gratuit - Frontend + Backend proxy)
- ✅ **Gratuit**
- ✅ **Backend proxy** possible
- ✅ **HTTPS automatique**
- 🔗 **URL** : `https://gazhunters.netlify.app`

### 3. Vercel (Gratuit - Fullstack)
- ✅ **Gratuit**
- ✅ **Backend API** inclus
- ✅ **HTTPS automatique**
- 🔗 **URL** : `https://gazhunters.vercel.app`

### 4. Heroku (Payant après essai gratuit)
- ✅ **Backend complet**
- ✅ **Base de données**
- ❌ **Payant** après l'essai gratuit
- 🔗 **URL** : `https://gazhunters.herokuapp.com`

## 🎯 Déploiement recommandé : Vercel

### Étape 1 : Préparer le projet
```bash
# Assure-toi que tout est commité
git add .
git commit -m "🚀 Ready for deployment"
git push origin main
```

### Étape 2 : Déployer sur Vercel
1. **Va sur [vercel.com](https://vercel.com)**
2. **Connecte-toi avec GitHub**
3. **Clique "New Project"**
4. **Sélectionne ton repository** `gazhunters`
5. **Configure le projet** :
   - **Framework Preset** : Other
   - **Root Directory** : `./`
   - **Build Command** : `npm install`
   - **Output Directory** : `./`
6. **Ajoute les variables d'environnement** :
   ```
   EMAIL_USER=ton-email@gmail.com
   EMAIL_PASS=ton-mot-de-passe-app
   NOTIFICATION_EMAIL=ton-email-notif@gmail.com
   ```
7. **Clique "Deploy"**

### Étape 3 : Configurer l'API
Vercel va automatiquement détecter ton `server.js` et créer une API.

## 🔧 Déploiement sur GitHub Pages

### Configuration automatique
Le fichier `.github/workflows/deploy.yml` est déjà configuré !

1. **Va dans ton repository GitHub**
2. **Settings → Pages**
3. **Source** : GitHub Actions
4. **Le déploiement se fera automatiquement**

### ⚠️ Limitation GitHub Pages
- Pas de backend (pas d'emails)
- L'application fonctionnera mais sans notifications

## 🌐 Déploiement sur Netlify

### Option A : Drag & Drop
1. **Va sur [netlify.com](https://netlify.com)**
2. **Drag & drop** ton dossier `GAZZHUNTERZ`
3. **Configure les variables d'environnement**
4. **C'est tout !**

### Option B : Git Integration
1. **Connecte ton repository GitHub**
2. **Build settings** :
   - **Build command** : `npm install`
   - **Publish directory** : `./`
3. **Environment variables** :
   ```
   EMAIL_USER=ton-email@gmail.com
   EMAIL_PASS=ton-mot-de-passe-app
   NOTIFICATION_EMAIL=ton-email-notif@gmail.com
   ```

## 🔥 Déploiement sur Heroku

### Préparation
```bash
# Créer un Procfile
echo "web: node server.js" > Procfile

# Créer un app.json
echo '{
  "name": "gazhunters",
  "description": "Application PWA pour signaler les bonbonnes de gaz hilarant",
  "repository": "https://github.com/TON-USERNAME/gazhunters",
  "keywords": ["pwa", "gaz-hilarant", "signalement"],
  "image": "heroku/nodejs"
}' > app.json
```

### Déploiement
```bash
# Installer Heroku CLI
# Puis :
heroku create gazhunters-app
heroku config:set EMAIL_USER=ton-email@gmail.com
heroku config:set EMAIL_PASS=ton-mot-de-passe-app
heroku config:set NOTIFICATION_EMAIL=ton-email-notif@gmail.com
git push heroku main
```

## 📱 Configuration PWA en production

### Mise à jour du manifest.json
```json
{
  "name": "GAZHUNTERS",
  "short_name": "GazHunters",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1c1c1c",
  "theme_color": "#e74c3c",
  "description": "Repérons. Signalons. Nettoyons.",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🔒 Sécurité en production

### Variables d'environnement
- ✅ **Jamais** commiter le fichier `.env`
- ✅ **Utiliser** les variables d'environnement de la plateforme
- ✅ **Rotater** les mots de passe régulièrement

### HTTPS
- ✅ **Toujours** utiliser HTTPS en production
- ✅ **Configurer** les headers de sécurité
- ✅ **Valider** les certificats SSL

## 📊 Monitoring

### Logs
- **Vercel** : Dashboard → Functions → Logs
- **Netlify** : Site → Functions → Logs
- **Heroku** : `heroku logs --tail`

### Métriques
- **Vercel** : Analytics intégrées
- **Netlify** : Analytics dans le dashboard
- **Heroku** : Add-ons de monitoring

## 🎯 Checklist de déploiement

- [ ] Code commité et poussé sur GitHub
- [ ] Variables d'environnement configurées
- [ ] Tests locaux réussis
- [ ] Manifest.json mis à jour
- [ ] Service Worker fonctionnel
- [ ] HTTPS activé
- [ ] Monitoring configuré
- [ ] Documentation mise à jour

## 🆘 Dépannage

### ❌ "Build failed"
- Vérifie les logs de build
- Assure-toi que `package.json` est correct
- Vérifie les dépendances

### ❌ "API not found"
- Vérifie que `server.js` est présent
- Configure les variables d'environnement
- Vérifie les logs de l'API

### ❌ "Email not working"
- Vérifie les variables d'environnement
- Teste avec un autre service email
- Vérifie les logs de l'API

## 🎉 Résultat final

Une fois déployé, tu auras :
- ✅ **URL publique** pour ton application
- ✅ **HTTPS automatique**
- ✅ **Notifications email** fonctionnelles
- ✅ **PWA installable** sur mobile
- ✅ **Monitoring** et logs
- ✅ **Sauvegarde automatique** sur GitHub

Ton application sera accessible 24h/24 et pourra être utilisée par tous les citoyens ! 🚨

