window.TRANSIT_CONFIG = {
  defaultLocation: {
    lat: 38.90525,
    lon: -77.05165,
    label: "2400 M Street NW"
  },
  stationCodes: ["C03", "A03"],
  trainLine: "SV",
  trainDestinationCodes: ["N06", "N07"],
  trainDirectionLabel: "Silver Line toward Dulles/Ashburn",
  featuredBusRoutes: [
    { route: "A58", label: "West to Ballston / West to Seven Corners" },
    { route: "D80", label: "North to Friendship Hts / South to Union Station" },
    { route: "D82", label: "North to Friendship Hts / South to Potomac Park" },
    { route: "C85", label: "South to Foggy Bottom" },
    { route: "D74", label: "" }
  ],
  d80StopIds: ["1001265", "1001270"],
  d80StopLabel: "Pennsylvania Ave NW + 24th St NW",
  rotateMs: 15000,
  wmataRefreshMs: 45000,
  ...(window.TRANSIT_CONFIG || {})
};
