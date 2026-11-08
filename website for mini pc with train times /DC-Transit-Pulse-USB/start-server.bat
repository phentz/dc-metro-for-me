@echo off
cd /d "%~dp0"
where py >nul 2>&1 && py -m http.server 8080 --bind 127.0.0.1 && goto :done
where python >nul 2>&1 && python -m http.server 8080 --bind 127.0.0.1 && goto :done
echo Python 3 is required. Install it from https://www.python.org/downloads/
pause
:done
