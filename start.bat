@echo off
echo ========================================
echo    🚨 GAZHUNTERS - Demarrage rapide
echo ========================================
echo.

REM Vérifier si Node.js est installé
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js n'est pas installé !
    echo 📥 Télécharge Node.js depuis : https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js détecté
echo.

REM Vérifier si les dépendances sont installées
if not exist "node_modules" (
    echo 📦 Installation des dépendances...
    npm install
    if errorlevel 1 (
        echo ❌ Erreur lors de l'installation des dépendances
        pause
        exit /b 1
    )
)

REM Vérifier si le fichier .env existe
if not exist ".env" (
    echo ⚠️  Fichier .env manquant !
    echo 📝 Copie de env.example vers .env...
    copy env.example .env
    echo.
    echo 🔧 IMPORTANT : Édite le fichier .env avec tes paramètres email !
    echo    - EMAIL_USER : ton email Gmail
    echo    - EMAIL_PASS : ton mot de passe d'application Gmail
    echo    - NOTIFICATION_EMAIL : email où recevoir les notifications
    echo.
    pause
)

echo 🚀 Démarrage du serveur GAZHUNTERS...
echo 🌐 L'application sera disponible sur : http://localhost:3000
echo 📧 Les notifications seront envoyées à l'adresse configurée
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo.

npm start






