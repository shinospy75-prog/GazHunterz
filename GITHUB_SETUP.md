# 🚀 Guide de transfert sur GitHub - GAZHUNTERS

## 📥 Étape 1 : Installer Git

### Option A : Téléchargement direct (Recommandé)
1. Va sur [git-scm.com](https://git-scm.com/)
2. Télécharge Git pour Windows
3. Lance l'installateur avec les paramètres par défaut
4. Redémarre ton terminal/PowerShell

### Option B : Via Chocolatey
```powershell
choco install git
```

### Option C : Via Winget
```powershell
winget install Git.Git
```

## 🔧 Étape 2 : Configurer Git

Après installation, configure Git avec tes informations :
```bash
git config --global user.name "Ton Nom"
git config --global user.email "ton-email@gmail.com"
```

## 🌐 Étape 3 : Créer le repository sur GitHub

1. **Va sur GitHub.com** et connecte-toi
2. **Clique sur "New repository"** (bouton vert)
3. **Configure le repository** :
   - **Repository name** : `gazhunters` ou `GAZHUNTERS`
   - **Description** : `🚨 Application PWA pour signaler les bonbonnes de gaz hilarant en Île-de-France`
   - **Public** ou **Private** (ton choix)
   - **Ne coche PAS** "Add a README file" (on en a déjà un)
4. **Clique sur "Create repository"**

## 📤 Étape 4 : Transférer le code

Une fois le repository créé, GitHub te donnera des commandes. Utilise celles-ci :

```bash
# 1. Initialiser Git dans le dossier
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Faire le premier commit
git commit -m "🚀 Initial commit - GAZHUNTERS PWA avec notifications email"

# 4. Ajouter l'origine GitHub (remplace TON-USERNAME par ton nom d'utilisateur)
git remote add origin https://github.com/TON-USERNAME/gazhunters.git

# 5. Pousser sur GitHub
git branch -M main
git push -u origin main
```

## 🔐 Étape 5 : Authentification GitHub

### Option A : Token d'accès personnel (Recommandé)
1. Va dans GitHub → Settings → Developer settings → Personal access tokens
2. Clique "Generate new token (classic)"
3. Donne un nom : "GAZHUNTERS"
4. Sélectionne les scopes : `repo` (accès complet aux repositories)
5. **Copie le token généré** (tu ne le reverras plus !)
6. Utilise ce token comme mot de passe quand Git te le demande

### Option B : GitHub CLI (Plus simple)
```bash
# Installe GitHub CLI
winget install GitHub.cli

# Connecte-toi
gh auth login

# Puis utilise gh au lieu de git pour certaines commandes
```

## 🎯 Commandes complètes à exécuter

Voici les commandes exactes à copier-coller dans ton terminal :

```bash
# Configuration Git (une seule fois)
git config --global user.name "Ton Nom"
git config --global user.email "ton-email@gmail.com"

# Dans le dossier GAZZHUNTERZ
cd C:\Users\sofia\Desktop\GAZZHUNTERZ

# Initialiser le repository
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🚀 Initial commit - GAZHUNTERS PWA avec notifications email"

# Ajouter l'origine GitHub (remplace TON-USERNAME)
git remote add origin https://github.com/TON-USERNAME/gazhunters.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

## 🔍 Vérification

Après le push, va sur ton repository GitHub. Tu devrais voir :
- ✅ Tous les fichiers du projet
- ✅ Le README.md avec la documentation
- ✅ Les guides d'installation et configuration
- ✅ Le code source complet

## 📝 Prochaines étapes

Une fois sur GitHub :
1. **Ajoute une description** au repository
2. **Configure les topics** : `pwa`, `gaz-hilarant`, `signalement`, `leaflet`, `nodejs`
3. **Active GitHub Pages** si tu veux héberger l'app gratuitement
4. **Partage le lien** avec d'autres développeurs

## 🆘 Dépannage

### ❌ "git n'est pas reconnu"
- Git n'est pas installé ou pas dans le PATH
- Redémarre ton terminal après installation

### ❌ "Authentication failed"
- Vérifie ton nom d'utilisateur et token
- Utilise un token d'accès personnel, pas ton mot de passe

### ❌ "Repository not found"
- Vérifie l'URL du repository
- Assure-toi que le repository existe sur GitHub

### ❌ "Permission denied"
- Vérifie que tu as les droits sur le repository
- Utilise un token avec les bonnes permissions

## 🎉 Résultat final

Une fois terminé, tu auras :
- ✅ Un repository GitHub public avec tout le code
- ✅ Une documentation complète
- ✅ Des guides d'installation et configuration
- ✅ Un projet prêt à être partagé et collaboré

Le lien de ton repository sera : `https://github.com/TON-USERNAME/gazhunters`







