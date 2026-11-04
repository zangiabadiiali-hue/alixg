@echo off
chcp 65001 >nul
title Weather App - Build
color 0E

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║                                              ║
echo  ║        ☁️  Weather App - Build  ☁️            ║
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

:: Install dependencies if needed
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
)

echo  [INFO] Building project...
echo.
call npm run build

if %errorlevel% neq 0 (
    color 0C
    echo.
    echo  [ERROR] Build failed!
    echo.
    pause
    exit /b 1
)

echo.
color 0A
echo  ══════════════════════════════════════════════
echo.
echo  [OK] Build completed successfully!
echo.
echo  Output folder: dist\
echo.
echo  ══════════════════════════════════════════════
echo.

:: Ask user to open output
set /p openOutput="  Open output folder? (Y/N): "
if /i "%openOutput%"=="Y" (
    explorer dist
)

echo.
echo  Press any key to exit...
pause >nul
