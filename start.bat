@echo off
chcp 65001 >nul
title Weather App - Server
color 0B

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║        ☁️  Weather App - هواشناسی  ☁️         ║
echo  ║                                              ║
echo  ╚══════════════════════════════════════════════╝
echo.

:: Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo  [ERROR] Node.js is not installed!
    echo  Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

:: Check npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo  [ERROR] npm is not installed!
    echo.
    pause
    exit /b 1
)

echo  [INFO] Node.js version:
node -v
echo.
echo  [INFO] npm version:
call npm -v
echo.

:: Install dependencies if node_modules doesn't exist
if not exist "node_modules\" (
    echo  [INFO] Installing dependencies...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        color 0C
        echo.
        echo  [ERROR] Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
    echo  [OK] Dependencies installed successfully!
    echo.
) else (
    echo  [OK] Dependencies already installed.
    echo.
)

echo  [INFO] Starting development server...
echo.
echo  ══════════════════════════════════════════════
echo.
echo  Server will open at: http://localhost:5173
echo  Press Ctrl+C to stop the server.
echo.
echo  ══════════════════════════════════════════════
echo.

:: Open browser after a short delay
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5173"

:: Run the dev server
call npm run dev

pause
