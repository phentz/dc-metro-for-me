# DC Transit Pulse

Containerized kiosk-style transit display for Washington, DC. The app rotates every 15 seconds between:

1. Closest Metro stations and next train estimates
2. Nearby bus stops, routes, and next bus estimates
3. WMATA alerts plus road friction links for DCA, Union Station, and Dulles
4. Selected bus routes A58, D80, D82, C85, and D74 on a dedicated map

The bus page draws route paths from WMATA route details over an OpenStreetMap street map centered on 2400 M Street NW, so the map reflects the actual bus corridors serving nearby stops rather than a Metro-style rail diagram.
Next-train projections refresh from WMATA every minute. Current train positions are requested every 10 seconds and show train number, line, destination, and track-circuit ID for lines serving the configured nearby stations. Add a WMATA API key in Data settings or set `WMATA_API_KEY` in `docker-compose.yml` to enable live feeds.
The nearby bus map plots live bus GPS positions, nearby stops, and approximate train positions derived from the ordered WMATA track-circuit and station data. The map includes zoom controls and a Reset view button. Transit alerts appear in the header on the Metro page.
D80 projections for Pennsylvania Ave NW + 24th St NW use WMATA stop IDs `1001265` and `1001270` and refresh every minute.

## Run With Docker Compose

```sh
docker compose up --build
```

Open:

```text
http://localhost:8080
```

## Optional Environment

Set these in `docker-compose.yml` before starting the container:

```yaml
environment:
  WMATA_API_KEY: "your-wmata-key"
  TOMTOM_API_KEY: "your-tomtom-key"
  DEFAULT_LAT: "38.90525"
  DEFAULT_LON: "-77.05165"
  DEFAULT_LABEL: "2400 M Street NW"
  TRAIN_LINE: "SV"
  TRAIN_DESTINATION_CODES: "N06,N07"
  TRAIN_DIRECTION_LABEL: "Silver Line toward Dulles/Ashburn"
  STATION_CODES: "C03,A03"
```

By default, Metro shows only Foggy Bottom-GWU and Dupont Circle, with the next 3 projected arrivals grouped into broad direction buckets. WMATA data requires a key from `developer.wmata.com`. TomTom is optional; without it, the travel page still opens live Google Maps drive/transit routes.
