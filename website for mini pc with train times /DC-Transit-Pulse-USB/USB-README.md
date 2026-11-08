# DC Transit Pulse USB package

This folder is self-contained and does not include API keys or local caches.

## macOS or Linux

1. Open `start-mac.command` (macOS) or run `./start-server.sh` in a terminal.
2. Open http://localhost:8080 in a browser.
3. Stop the server with Control-C in the terminal.

If macOS blocks the command file, right-click it, choose Open, then confirm.

## Windows

1. Double-click `start-server.bat`.
2. Open http://localhost:8080 in a browser.
3. Close the command window to stop the server.

Python 3 is required for the simple local server. Docker files are also included if Docker is installed.

## API keys

Open **Data settings** in the dashboard to enter keys. They are saved only in that browser's local storage. For live road estimates, add a Google Maps Routes API key or TomTom key. For live trains, buses, and alerts, add a WMATA API key.
