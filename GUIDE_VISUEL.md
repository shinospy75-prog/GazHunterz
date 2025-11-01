# 🎯 Guide visuel - Transfert GAZHUNTERS sur GitHub

## 📥 ÉTAPE 1 : Installer Git

### 🔗 Lien direct : https://git-scm.com/download/win

1. **Clique sur le lien** ci-dessus
2. **Télécharge** l'installateur Windows
3. **Lance l'installateur** 
4. **Garde les paramètres par défaut** (clique "Next" partout)
5. **Redémarre ton terminal** après installation

## 🌐 ÉTAPE 2 : Créer le repository sur GitHub

### 🔗 Lien direct : https://github.com/new

1. **Connecte-toi** à ton compte GitHub
2. **Clique sur "New repository"** (bouton vert)
3. **Configure le repository** :
   - **Repository name** : `gazhunters`
   - **Description** : `🚨 Application PWA pour signaler les bonbonnes de gaz hilarant`
   - **Public** ✅ (pour que tout le monde puisse voir)
   - **Ne coche PAS** "Add a README file" ❌
4. **Clique "Create repository"**

## 💻 ÉTAPE 3 : Exécuter les commandes

### Ouvre ton terminal dans le dossier GAZZHUNTERZ et exécute :

```bash
# Configuration Git (remplace par tes vraies informations)
git config --global user.name "Ton Nom"
git config --global user.email "ton-email@gmail.com"

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🚀 Initial commit - GAZHUNTERS PWA avec notifications email"

# Ajouter l'origine GitHub (remplace TON-USERNAME)
git remote add origin https://github.com/TON-USERNAME/gazhunters.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

## 🔐 ÉTAPE 4 : Authentification

### Quand Git te demande tes identifiants :

1. **Nom d'utilisateur** : Ton nom d'utilisateur GitHub
2. **Mot de passe** : Utilise un **token d'accès personnel**

### Pour créer un token :
1. Va sur https://github.com/settings/tokens
2. Clique "Generate new token (classic)"
3. Nomme-le "GAZHUNTERS"
4. Sélectionne "repo" dans les permissions
5. **Copie le token** (tu ne le reverras plus !)
6. Utilise ce token comme mot de passe

## ✅ VÉRIFICATION

### Après le push, va sur ton repository GitHub :
- 🔗 URL : `https://github.com/TON-USERNAME/gazhunters`
- ✅ Tu devrais voir tous tes fichiers
- ✅ Le README.md avec la documentation
- ✅ Tous les guides d'installation

## 🆘 DÉPANNAGE

### ❌ "git n'est pas reconnu"
- Git n'est pas installé ou pas redémarré
- Redémarre ton terminal après installation

### ❌ "Repository not found"
- Vérifie l'URL du repository
- Assure-toi que le repository existe sur GitHub

### ❌ "Authentication failed"
- Utilise un token d'accès personnel, pas ton mot de passe
- Vérifie que le token a les bonnes permissions

## 🎉 RÉSULTAT FINAL

Une fois terminé, tu auras :
- ✅ Un repository GitHub public
- ✅ Toute la documentation
- ✅ Le code source complet
- ✅ Prêt pour le déploiement

Ton projet sera accessible à l'adresse :
`https://github.com/TON-USERNAME/gazhunters`







