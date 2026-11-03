@echo off
chcp 65001 >nul
title Weather App - Install
color 0D

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║        ☁️  Weather App - Install  ☁️          ║
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

echo  [INFO] Node.js version:
node -v
echo.
echo  [INFO] npm version:
call npm -v
echo.
echo  [INFO] Installing project dependencies...
echo.

:: Clean install
if exist "node_modules\" (
    echo  [INFO] Removing old node_modules...
    rmdir /s /q node_modules
    echo.
)

if exist "package-lock.json" (
    echo  [INFO] Removing old package-lock.json...
    del package-lock.json
    echo.
)

echo  [INFO] Running npm install...
echo.
call npm install

if %errorlevel% neq 0 (
    color 0C
    echo.
    echo  [ERROR] Installation failed!
    echo.
    pause
    exit /b 1
)

echo.
color 0A
echo  ══════════════════════════════════════════════
echo.
echo  [OK] All dependencies installed successfully!
echo.
echo  You can now run:
echo    - start.bat  to start the development server
echo    - build.bat  to build the project
echo.
echo  ══════════════════════════════════════════════
echo.

pause
