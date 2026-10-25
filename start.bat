@echo off
REM ============================================================================
REM One-click Launcher for Vedant Jakarwar's Portfolio
REM ============================================================================

echo ============================================================================
echo [1/3] Checking Environment Prerequisites...
echo ============================================================================

where java >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Java is not detected in your PATH. Please install Java 21/22.
) else (
    echo [OK] Java detected.
)

where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [NOTICE] Node.js is not yet in PATH.
    echo To run the Angular frontend:
    echo   1. Install Node.js LTS (e.g., using winget: 'winget install OpenJS.NodeJS.LTS')
    echo   2. Navigate to frontend/ and run 'npm install' then 'npm start'
) else (
    echo [OK] Node.js detected.
)

echo.
echo ============================================================================
echo [2/3] Database Schema Location:
echo ============================================================================
echo   Schema:   %~dp0database\schema.sql
echo   Seed:     %~dp0database\seed.sql
echo   (Paste into your Supabase SQL editor or local psql instance)
echo.

echo ============================================================================
echo [3/3] Backend (Spring Boot 3)
echo ============================================================================
echo   Location: %~dp0backend
echo   Run:      cd backend ^&^& mvn spring-boot:run
echo.
pause
