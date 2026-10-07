@echo off
title CampusPulse — Multi-Device Dev Server (0.0.0.0)
cd /d "%~dp0"
echo ========================================================
echo Starting CampusPulse on 0.0.0.0:8080 (PC + Mobile Wi-Fi)
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
