@echo off
setlocal
title School Management System - Multi Server Starter

echo ====================================================
echo   SCHOOL MANAGEMENT SYSTEM - STARTUP SCRIPT
echo ====================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed! Please install it from nodejs.org
    pause
    exit /b
)

echo Starting Portals...
echo.

:: Start Client Portal on Port 3000
echo [ACTION] Starting Student/Parent Portal on http://localhost:3000
start "Client Portal (Port 3000)" cmd /k "echo Starting Client Portal... && cd client-app\frontend && npm run dev"

:: Start Admin Portal on Port 3001
echo [ACTION] Starting Admin/Staff Portal on http://localhost:3001
start "Admin Portal (Port 3001)" cmd /k "echo Starting Admin Portal... && cd admin-app\frontend && npm run dev"

echo.
echo ====================================================
echo   SUCCESS: Startup commands sent!
echo ====================================================
echo.
echo 1. Wait for the two new windows to finish loading.
echo 2. Once they say "✓ Ready", open your browser.
echo 3. Landing Page: http://localhost/school-management-system/
echo.
echo NOTE: Keep the two new windows OPEN while using the site.
echo If they show RED ERRORS, please take a screenshot!
echo.
pause
