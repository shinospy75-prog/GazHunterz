@echo off
echo ========================================
echo    🚀 GAZHUNTERS - Upload vers GitHub
echo ========================================
echo.

REM Vérifier si Git est installé
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git n'est pas installé !
    echo 📥 Télécharge Git depuis : https://git-scm.com/
    echo 📖 Voir le guide : GITHUB_SETUP.md
    pause
    exit /b 1
)

echo ✅ Git détecté
echo.

REM Demander les informations utilisateur
echo 🔧 Configuration Git (si pas déjà fait)
set /p GIT_NAME="Ton nom complet : "
set /p GIT_EMAIL="Ton email GitHub : "

git config --global user.name "%GIT_NAME%"
git config --global user.email "%GIT_EMAIL%"

echo.
echo 📁 Initialisation du repository Git...
git init

echo.
echo 📦 Ajout de tous les fichiers...
git add .

echo.
echo 💾 Création du commit initial...
git commit -m "🚀 Initial commit - GAZHUNTERS PWA avec notifications email"

echo.
echo 🌐 Configuration du repository GitHub...
echo.
echo ⚠️  IMPORTANT : Tu dois d'abord créer le repository sur GitHub.com
echo    1. Va sur https://github.com/new
echo    2. Nomme le repository : gazhunters
echo    3. Ne coche PAS "Add a README file"
echo    4. Clique "Create repository"
echo.
set /p GITHUB_USERNAME="Ton nom d'utilisateur GitHub : "

echo.
echo 🔗 Ajout de l'origine GitHub...
git remote add origin https://github.com/%GITHUB_USERNAME%/gazhunters.git

echo.
echo 📤 Upload vers GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Erreur lors de l'upload !
    echo 🔐 Tu devras peut-être t'authentifier avec un token GitHub
    echo 📖 Voir le guide : GITHUB_SETUP.md
    echo.
    echo 🔑 Pour créer un token :
    echo    1. Va sur https://github.com/settings/tokens
    echo    2. Clique "Generate new token (classic)"
    echo    3. Sélectionne "repo" dans les permissions
    echo    4. Utilise ce token comme mot de passe
    pause
    exit /b 1
)

echo.
echo 🎉 Succès ! Ton projet est maintenant sur GitHub !
echo 🌐 URL : https://github.com/%GITHUB_USERNAME%/gazhunters
echo.
echo 📝 Prochaines étapes :
echo    - Ajoute une description au repository
echo    - Configure les topics : pwa, gaz-hilarant, signalement
echo    - Partage le lien avec d'autres développeurs
echo.
pause







