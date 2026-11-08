#!/bin/sh
set -eu

escape_js() {
  printf "%s" "$1" | sed "s/\\\\/\\\\\\\\/g; s/'/\\\\'/g"
}

wmata_key=$(escape_js "${WMATA_API_KEY:-}")
tomtom_key=$(escape_js "${TOMTOM_API_KEY:-}")
default_label=$(escape_js "${DEFAULT_LABEL:-2400 M Street NW}")
default_lat="${DEFAULT_LAT:-38.90525}"
default_lon="${DEFAULT_LON:--77.05165}"
train_line=$(escape_js "${TRAIN_LINE:-SV}")
train_destination_codes=$(escape_js "${TRAIN_DESTINATION_CODES:-N06,N07}")
train_direction_label=$(escape_js "${TRAIN_DIRECTION_LABEL:-Silver Line toward Dulles/Ashburn}")
station_codes=$(escape_js "${STATION_CODES:-C03,A03}")

if [ -n "${default_lat}" ] && [ -n "${default_lon}" ]; then
  default_location="{ lat: Number('${default_lat}'), lon: Number('${default_lon}'), label: '${default_label}' }"
else
  default_location="null"
fi

cat > /usr/share/nginx/html/config.js <<EOF
window.TRANSIT_CONFIG = {
  wmataKey: '${wmata_key}',
  trafficKey: '${tomtom_key}',
  defaultLocation: ${default_location},
  trainLine: '${train_line}',
  trainDestinationCodes: '${train_destination_codes}'.split(',').map((code) => code.trim()).filter(Boolean),
  trainDirectionLabel: '${train_direction_label}',
  stationCodes: '${station_codes}'.split(',').map((code) => code.trim()).filter(Boolean),
  featuredBusRoutes: [
    { route: 'A58', label: 'West to Ballston / West to Seven Corners' },
    { route: 'D80', label: 'North to Friendship Hts / South to Union Station' },
    { route: 'D82', label: 'North to Friendship Hts / South to Potomac Park' },
    { route: 'C85', label: 'South to Foggy Bottom' },
    { route: 'D74', label: 'Route path' }
  ],
  d80StopIds: ['1001265', '1001270'],
  d80StopLabel: 'Pennsylvania Ave NW + 24th St NW',
  rotateMs: 15000,
  wmataRefreshMs: 45000
};
EOF

exec "$@"
