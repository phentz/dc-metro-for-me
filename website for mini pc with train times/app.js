const WMATA_BASE = "https://api.wmata.com";
const NOMINATIM = "https://nominatim.openstreetmap.org/search";

const stationData = [
  { code: "A01", codes: ["A01", "C01"], name: "Metro Center", lat: 38.898303, lon: -77.028099, lines: ["RD", "BL", "OR", "SV"] },
  { code: "A02", name: "Farragut North", lat: 38.903192, lon: -77.039766, lines: ["RD"] },
  { code: "A03", name: "Dupont Circle", lat: 38.909499, lon: -77.04362, lines: ["RD"] },
  { code: "A04", name: "Woodley Park-Zoo/Adams Morgan", lat: 38.924999, lon: -77.052648, lines: ["RD"] },
  { code: "A05", name: "Cleveland Park", lat: 38.934703, lon: -77.058226, lines: ["RD"] },
  { code: "A06", name: "Van Ness-UDC", lat: 38.94362, lon: -77.063511, lines: ["RD"] },
  { code: "A07", name: "Tenleytown-AU", lat: 38.947784, lon: -77.079615, lines: ["RD"] },
  { code: "A08", name: "Friendship Heights", lat: 38.960744, lon: -77.085969, lines: ["RD"] },
  { code: "B01", codes: ["B01", "F01"], name: "Gallery Pl-Chinatown", lat: 38.898316, lon: -77.021915, lines: ["RD", "YL", "GR"] },
  { code: "B02", name: "Judiciary Square", lat: 38.89609, lon: -77.016639, lines: ["RD"] },
  { code: "B03", name: "Union Station", lat: 38.897766, lon: -77.006745, lines: ["RD"] },
  { code: "B04", name: "NoMa-Gallaudet U", lat: 38.907016, lon: -77.00302, lines: ["RD"] },
  { code: "B05", name: "Rhode Island Ave-Brentwood", lat: 38.920741, lon: -76.995984, lines: ["RD"] },
  { code: "B06", name: "Brookland-CUA", lat: 38.933234, lon: -76.994544, lines: ["RD"] },
  { code: "C01", name: "McPherson Square", lat: 38.901316, lon: -77.033652, lines: ["BL", "OR", "SV"] },
  { code: "C02", name: "Farragut West", lat: 38.901311, lon: -77.03981, lines: ["BL", "OR", "SV"] },
  { code: "C03", name: "Foggy Bottom-GWU", lat: 38.900599, lon: -77.050273, lines: ["BL", "OR", "SV"] },
  { code: "C04", name: "Rosslyn", lat: 38.895979, lon: -77.070908, lines: ["BL", "OR", "SV"] },
  { code: "C05", name: "Arlington Cemetery", lat: 38.884574, lon: -77.063108, lines: ["BL"] },
  { code: "C06", name: "Pentagon", lat: 38.869462, lon: -77.053715, lines: ["BL", "YL"] },
  { code: "C07", name: "Pentagon City", lat: 38.862928, lon: -77.059408, lines: ["BL", "YL"] },
  { code: "C08", name: "Crystal City", lat: 38.857905, lon: -77.05029, lines: ["BL", "YL"] },
  { code: "C09", name: "Ronald Reagan Washington National Airport", lat: 38.852985, lon: -77.043805, lines: ["BL", "YL"] },
  { code: "D01", name: "Federal Triangle", lat: 38.893757, lon: -77.028218, lines: ["BL", "OR", "SV"] },
  { code: "D02", name: "Smithsonian", lat: 38.888022, lon: -77.028232, lines: ["BL", "OR", "SV"] },
  { code: "D03", codes: ["D03", "F03"], name: "L'Enfant Plaza", lat: 38.884775, lon: -77.021964, lines: ["BL", "OR", "SV", "YL", "GR"] },
  { code: "D04", name: "Federal Center SW", lat: 38.884958, lon: -77.01586, lines: ["BL", "OR", "SV"] },
  { code: "D05", name: "Capitol South", lat: 38.885062, lon: -77.005139, lines: ["BL", "OR", "SV"] },
  { code: "D06", name: "Eastern Market", lat: 38.884124, lon: -76.995334, lines: ["BL", "OR", "SV"] },
  { code: "D07", name: "Potomac Ave", lat: 38.880841, lon: -76.985721, lines: ["BL", "OR", "SV"] },
  { code: "D08", name: "Stadium-Armory", lat: 38.88594, lon: -76.977485, lines: ["BL", "OR", "SV"] },
  { code: "E01", name: "Mt Vernon Sq 7th St-Convention Center", lat: 38.905604, lon: -77.022256, lines: ["YL", "GR"] },
  { code: "E02", name: "Shaw-Howard U", lat: 38.913476, lon: -77.021914, lines: ["YL", "GR"] },
  { code: "E03", name: "U Street/African-Amer Civil War Memorial/Cardozo", lat: 38.916489, lon: -77.028938, lines: ["YL", "GR"] },
  { code: "E04", name: "Columbia Heights", lat: 38.928672, lon: -77.032775, lines: ["YL", "GR"] },
  { code: "E05", name: "Georgia Ave-Petworth", lat: 38.936077, lon: -77.024728, lines: ["YL", "GR"] },
  { code: "F02", name: "Archives-Navy Mem'l-Penn Quarter", lat: 38.893893, lon: -77.021902, lines: ["YL", "GR"] },
  { code: "F04", name: "Waterfront", lat: 38.876221, lon: -77.017491, lines: ["GR"] },
  { code: "F05", name: "Navy Yard-Ballpark", lat: 38.876588, lon: -77.005086, lines: ["GR"] },
  { code: "F06", name: "Anacostia", lat: 38.862963, lon: -76.99537, lines: ["GR"] },
  { code: "F07", name: "Congress Heights", lat: 38.845334, lon: -76.987821, lines: ["GR"] },
  { code: "G01", name: "Benning Road", lat: 38.890488, lon: -76.938291, lines: ["BL", "SV"] },
  { code: "G02", name: "Capitol Heights", lat: 38.889465, lon: -76.913895, lines: ["BL", "SV"] },
  { code: "N06", name: "Dulles International Airport", lat: 38.95677, lon: -77.44808, lines: ["SV"] },
  { code: "N07", name: "Ashburn", lat: 39.005195, lon: -77.49163, lines: ["SV"] }
];

const destinations = [
  { id: "dca", name: "DCA", label: "Reagan National Airport", lat: 38.8521, lon: -77.0377 },
  { id: "union", name: "Union Station", label: "Rail and intercity bus hub", lat: 38.8977, lon: -77.0067 },
  { id: "iad", name: "Dulles", label: "Dulles International Airport", lat: 38.9531, lon: -77.4565 }
];

const config = window.TRANSIT_CONFIG || {};

const state = {
  location: config.defaultLocation || null,
  key: localStorage.getItem("wmataKey") || config.wmataKey || "",
  trafficKey: localStorage.getItem("trafficKey") || config.trafficKey || "",
  googleMapsKey: localStorage.getItem("googleMapsKey") || config.googleMapsKey || "",
  currentPage: 0,
  selectedStationCodes: [...new Set((config.stationCodes || []).slice(0, 3))],
  rotationTimer: null,
  wmataRefreshTimer: null,
  isTrainRefreshInFlight: false,
  isLivePositionsRefreshInFlight: false,
  isBusPositionsRefreshInFlight: false,
  railStationNames: new Map(),
  railStations: new Map(),
  railStationNamesPromise: null,
  trainCircuitLocations: new Map(),
  trainCircuitLocationsPromise: null,
  liveTrainPositions: [],
  liveBusPositions: [],
  lastNearbyBusItems: [],
  lastNearbyBusRouteDetails: [],
  lastFeaturedBusRouteDetails: [],
  isD80RefreshInFlight: false,
  isRefreshInFlight: false,
  weatherTimer: null,
  isWeatherInFlight: false,
  trafficTimer: null,
  isTrafficRefreshInFlight: false,
  isLocked: false,
  busMap: null,
  busVehicleLayer: null,
  trainVehicleLayer: null,
  featuredBusMap: null
};

const displayStationCodes = new Set(config.stationCodes || []);
const featuredBusRoutes = config.featuredBusRoutes || [
  { route: "A58", label: "West to Ballston / West to Seven Corners" },
  { route: "D80", label: "North to Friendship Hts / South to Union Station" },
  { route: "D82", label: "North to Friendship Hts / South to Potomac Park" },
  { route: "C85", label: "South to Foggy Bottom" },
  { route: "D74", label: "Route path" }
];

const els = {
  form: document.querySelector("#locationForm"),
  input: document.querySelector("#locationInput"),
  geo: document.querySelector("#geoButton"),
  key: document.querySelector("#wmataKey"),
  trafficKey: document.querySelector("#trafficKey"),
  googleMapsKey: document.querySelector("#googleMapsKey"),
  radius: document.querySelector("#radiusSelect"),
  message: document.querySelector("#message"),
  updated: document.querySelector("#lastUpdated"),
  stations: document.querySelector("#stations"),
  buses: document.querySelector("#buses"),
  busCoverage: document.querySelector("#busCoverage"),
  headerAlerts: document.querySelector("#headerAlerts"),
  weatherCard: document.querySelector("#weatherCard"),
  weatherTemp: document.querySelector("#weatherTemp"),
  weatherSummary: document.querySelector("#weatherSummary"),
  weatherRain: document.querySelector("#weatherRain"),
  featuredBusCoverage: document.querySelector("#featuredBusCoverage"),
  d80Projections: document.querySelector("#d80Projections"),
  traffic: document.querySelector("#traffic"),
  stationCount: document.querySelector("#stationCount"),
  stationPicker: document.querySelector("#stationPicker"),
  setupPanel: document.querySelector("#setupPanel"),
  setupSummary: document.querySelector("#setupSummary"),
  liveTrains: document.querySelector("#liveTrains"),
  liveTrainCount: document.querySelector("#liveTrainCount"),
  busCount: document.querySelector("#busCount"),
  featuredBusCount: document.querySelector("#featuredBusCount"),
  pageLabel: document.querySelector("#pageLabel"),
  lockButton: document.querySelector("#lockButton"),
  pages: [...document.querySelectorAll(".display-page")],
  tabs: [...document.querySelectorAll(".page-tab")]
};

els.key.value = state.key;
els.trafficKey.value = state.trafficKey;
els.googleMapsKey.value = state.googleMapsKey;
updateSetupSummary();
maybeCollapseSetupPanel();

els.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = els.input.value.trim();
  if (!query) {
    setMessage("Type an address or use GPS first.");
    return;
  }
  await searchAddress(query);
});

els.geo.addEventListener("click", useGeolocation);
els.key.addEventListener("change", () => {
  state.key = els.key.value.trim();
  localStorage.setItem("wmataKey", state.key);
  updateSetupSummary();
  refresh();
  maybeCollapseSetupPanel();
});
els.trafficKey.addEventListener("change", () => {
  state.trafficKey = els.trafficKey.value.trim();
  localStorage.setItem("trafficKey", state.trafficKey);
  refreshTraffic();
});
els.googleMapsKey.addEventListener("change", () => {
  state.googleMapsKey = els.googleMapsKey.value.trim();
  localStorage.setItem("googleMapsKey", state.googleMapsKey);
  refreshTraffic();
});
els.radius.addEventListener("change", refresh);
window.addEventListener("leaflet-ready", () => {
  if (!window.L) return;
  if (document.querySelector("#busRouteMap")) {
    drawBusRouteMap(state.lastNearbyBusRouteDetails, state.lastNearbyBusItems);
  }
  if (document.querySelector("#featuredBusRouteMap")) {
    drawFeaturedBusRouteMap(state.lastFeaturedBusRouteDetails);
  }
});
els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showPage(Number(tab.dataset.pageTarget));
    if (!state.isLocked) {
      setRotationLock(true);
      setMessage("Page selected. Rotation is paused; choose Unlock when you want it to resume.");
    }
  });
});
els.stationPicker.addEventListener("click", (event) => {
  const button = event.target.closest("[data-station-code]");
  if (!button) return;
  const code = button.dataset.stationCode;
  if (state.selectedStationCodes.includes(code)) {
    state.selectedStationCodes = state.selectedStationCodes.filter((value) => value !== code);
  } else if (state.selectedStationCodes.length < 3) {
    state.selectedStationCodes = [...state.selectedStationCodes, code];
  } else {
    setMessage("Choose up to three stations. Remove one before adding another.");
    return;
  }
  renderStationPicker(state.location);
  refresh();
});
els.lockButton.addEventListener("click", toggleLock);

renderEmptyStates();
renderTraffic();
if (state.location) refresh();
if (state.location) loadWeather();
state.weatherTimer = setInterval(loadWeather, 10 * 60 * 1000);
state.trafficTimer = setInterval(refreshTraffic, 10 * 60 * 1000);
restartRotation();
startWmataRefreshLoop();

async function searchAddress(query) {
  setMessage("Finding that location...");
  try {
    const params = new URLSearchParams({
      q: `${query}, Washington DC`,
      format: "jsonv2",
      limit: "1",
      countrycodes: "us"
    });
    const response = await fetchWithTimeout(`${NOMINATIM}?${params.toString()}`, {
      headers: { "Accept": "application/json" }
    });
    if (!response.ok) throw new Error("Geocoding failed");
    const results = await response.json();
    if (!results.length) {
      setMessage("I could not find that address. Try a more specific DC location.");
      return;
    }
    state.location = {
      lat: Number(results[0].lat),
      lon: Number(results[0].lon),
      label: results[0].display_name
    };
    updateSetupSummary();
    loadWeather();
    await refresh();
    maybeCollapseSetupPanel();
  } catch (error) {
    setMessage("Address lookup is unavailable right now. GPS still works if your browser allows it.");
  }
}

function useGeolocation() {
  if (!navigator.geolocation) {
    setMessage("This browser does not support geolocation.");
    return;
  }
  setMessage("Asking the browser for your location...");
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      state.location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        label: "Current location"
      };
      updateSetupSummary();
      loadWeather();
      await refresh();
      maybeCollapseSetupPanel();
    },
    () => setMessage("Location permission was blocked or unavailable. Type an address instead."),
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

function updateSetupSummary() {
  if (!els.setupSummary) return;
  if (state.location && state.key) {
    els.setupSummary.textContent = `${state.location.label} · WMATA key saved`;
  } else if (state.location) {
    els.setupSummary.textContent = `${state.location.label} · WMATA key needed`;
  } else if (state.key) {
    els.setupSummary.textContent = "WMATA key saved · location needed";
  } else {
    els.setupSummary.textContent = "Add a location and WMATA key";
  }
}

function maybeCollapseSetupPanel() {
  if (els.setupPanel && state.location && state.key) els.setupPanel.open = false;
}

async function refresh() {
  if (state.isRefreshInFlight) return;
  state.isRefreshInFlight = true;
  try {
    await refreshData();
  } finally {
    state.isRefreshInFlight = false;
  }
}

async function refreshData() {
  if (!state.location) {
    renderEmptyStates();
    renderTraffic();
    return;
  }

  const nearest = displayStations(state.location);
  renderStationPicker(state.location);
  renderStations(nearest, new Map());
  renderTraffic();
  updateClock();

  if (!state.key) {
    state.liveTrainPositions = [];
    state.liveBusPositions = [];
    renderLiveTrains([], "WMATA key needed");
    renderBusEmpty("WMATA key needed", "Add a WMATA API key to load nearby stops, bus routes, and live arrival estimates.");
    renderFeaturedBusRoutes([]);
    renderD80Projections([]);
    renderAlertEmpty("WMATA key needed", "Rail and bus alert checks require a WMATA API key.");
    setMessage(`Showing Foggy Bottom and Dupont Circle. Add a WMATA key for live train positions and arrival estimates.`);
    return;
  }

  setMessage("Loading WMATA trains, buses, and alerts...");
  const stationCodes = [...new Set(nearest.flatMap((station) => station.codes || [station.code]))].join(",");
  const [trainResult, positionsResult, busPositionsResult, busResult, featuredBusResult, d80Result, alertResult] = await Promise.allSettled([
    wmata(`/StationPrediction.svc/json/GetPrediction/${stationCodes}`),
    loadLiveTrainPositions(nearest),
    loadLiveBusPositions(),
    loadNearbyBuses(),
    loadBusRouteDetailsByIds(featuredBusRoutes.map((route) => route.route)),
    loadD80StopProjections(),
    loadAlerts(nearest)
  ]);

  if (trainResult.status === "fulfilled") {
    renderStations(nearest, groupTrainPredictions(trainResult.value.Trains || []));
  }

  if (positionsResult.status === "fulfilled") state.liveTrainPositions = positionsResult.value;
  if (busPositionsResult.status === "fulfilled") state.liveBusPositions = busPositionsResult.value;
  renderLiveTrains(positionsResult.status === "fulfilled" ? positionsResult.value : [], positionsResult.status === "fulfilled" ? "Live · 45 sec" : "Feed unavailable");

  if (busResult.status === "fulfilled") {
    const routeDetails = await withTimeout(loadBusRouteDetails(busResult.value), 8000, "Bus route details timed out");
    renderBuses(busResult.value, routeDetails);
  } else {
    renderBusEmpty("Bus data unavailable", "WMATA did not return nearby bus stops or predictions for this location.");
  }

  renderFeaturedBusRoutes(featuredBusResult.status === "fulfilled" ? featuredBusResult.value : []);
  renderD80Projections(d80Result.status === "fulfilled" ? d80Result.value : []);

  if (alertResult.status === "fulfilled") {
    renderAlerts(alertResult.value, nearest);
  } else {
    renderAlertEmpty("Alerts unavailable", "WMATA alert data could not be reached.");
  }

  const wmataResults = [trainResult, positionsResult, busPositionsResult, busResult, featuredBusResult, d80Result, alertResult];
  if (wmataResults.some((result) => result.status === "rejected" && isWmataUnauthorized(result.reason))) {
    setMessage("WMATA rejected the saved API key (401). Check or replace it in Data settings to restore live trains, buses, and alerts.");
  } else if (wmataResults.every((result) => result.status === "rejected")) {
    setMessage("WMATA data could not be loaded. Check your connection and API key in Data settings.");
  } else {
    setMessage(`Updated transit around ${state.location.label}. Some WMATA feeds may be unavailable.`);
  }
  updateClock();
}

function startWmataRefreshLoop() {
  clearInterval(state.wmataRefreshTimer);
  state.wmataRefreshTimer = setInterval(() => {
    refreshTrainPredictions();
    refreshD80Projections();
    refreshLiveVehiclePositions();
  }, Number(config.wmataRefreshMs || 45000));
}

async function refreshLiveVehiclePositions() {
  if (!state.location || !state.key || state.isLivePositionsRefreshInFlight || state.isBusPositionsRefreshInFlight) return;
  state.isLivePositionsRefreshInFlight = true;
  state.isBusPositionsRefreshInFlight = true;
  try {
    const [trains, buses] = await Promise.all([
      loadLiveTrainPositions(displayStations(state.location)),
      loadLiveBusPositions()
    ]);
    state.liveTrainPositions = trains;
    state.liveBusPositions = buses;
    renderLiveTrains(trains, "Live · 45 sec");
    updateLiveVehicleMarkers();
  } catch (error) {
    const unauthorized = isWmataUnauthorized(error);
    els.liveTrainCount.textContent = unauthorized ? "API key rejected" : "Feed unavailable";
    if (unauthorized) setMessage("WMATA rejected the saved API key (401). Check or replace it in Data settings to restore live trains, buses, and alerts.");
  } finally {
    state.isLivePositionsRefreshInFlight = false;
    state.isBusPositionsRefreshInFlight = false;
  }
}

async function loadLiveBusPositions() {
  const center = state.location || config.defaultLocation || { lat: 38.90525, lon: -77.05165 };
  const radius = Number(els.radius.value) || 800;
  const params = new URLSearchParams({ Lat: center.lat, Lon: center.lon, Radius: radius });
  const result = await wmata(`/Bus.svc/json/jBusPositions?${params.toString()}`);
  return (result.BusPositions || []).filter((bus) => Number.isFinite(Number(bus.Lat)) && Number.isFinite(Number(bus.Lon)));
}

async function loadLiveTrainPositions(stations) {
  const lineCodes = new Set(stations.flatMap((station) => station.lines));
  const [result] = await Promise.all([
    wmata("/TrainPositions/TrainPositions?contentType=json"),
    loadRailStationNames()
  ]);
  return (result.TrainPositions || [])
    .filter((train) => train.LineCode && lineCodes.has(train.LineCode) && train.ServiceType !== "Unknown")
    .sort((a, b) => String(a.LineCode).localeCompare(String(b.LineCode)) || Number(a.TrainNumber) - Number(b.TrainNumber));
}

function loadRailStationNames() {
  if (!state.railStationNamesPromise) {
    state.railStationNamesPromise = wmata("/Rail.svc/json/jStations")
      .then((result) => {
        (result.Stations || []).forEach((station) => {
          if (!station.Code) return;
          if (station.Name) state.railStationNames.set(station.Code, station.Name);
          if (Number.isFinite(Number(station.Lat)) && Number.isFinite(Number(station.Lon))) {
            state.railStations.set(station.Code, { lat: Number(station.Lat), lon: Number(station.Lon), name: station.Name });
          }
        });
      })
      .catch(() => {});
  }
  return state.railStationNamesPromise;
}

async function refreshTrainPredictions() {
  if (!state.location || !state.key || state.isTrainRefreshInFlight) return;
  state.isTrainRefreshInFlight = true;

  try {
    const stations = displayStations(state.location);
    const stationCodes = [...new Set(stations.flatMap((station) => station.codes || [station.code]))].join(",");
    const result = await wmata(`/StationPrediction.svc/json/GetPrediction/${stationCodes}`);
    renderStations(stations, groupTrainPredictions(result.Trains || []));
    updateClock();
    setMessage(`Updated train projections around ${state.location.label}. WMATA refreshes every 45 seconds.`);
  } catch (error) {
    setMessage(isWmataUnauthorized(error)
      ? "WMATA rejected the saved API key (401). Check or replace it in Data settings to restore live train estimates."
      : "WMATA train projections could not refresh this cycle.");
  } finally {
    state.isTrainRefreshInFlight = false;
  }
}

async function refreshD80Projections() {
  if (!state.key || state.isD80RefreshInFlight) return;
  state.isD80RefreshInFlight = true;

  try {
    renderD80Projections(await loadD80StopProjections());
  } catch (error) {
    renderD80Projections([]);
  } finally {
    state.isD80RefreshInFlight = false;
  }
}

async function loadNearbyBuses() {
  const radius = els.radius.value;
  const stops = await wmata(`/Bus.svc/json/jStops?Lat=${state.location.lat}&Lon=${state.location.lon}&Radius=${radius}`);
  const nearestStops = (stops.Stops || [])
    .map((stop) => ({ ...stop, distance: milesBetween(state.location, { lat: stop.Lat, lon: stop.Lon }) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 6);

  const predictions = await Promise.allSettled(
    nearestStops.map((stop) => wmata(`/NextBusService.svc/json/jPredictions?StopID=${stop.StopID}`))
  );

  return nearestStops.map((stop, index) => ({
    stop,
    predictions: predictions[index].status === "fulfilled" ? predictions[index].value.Predictions || [] : []
  }));
}

async function loadBusRouteDetails(items) {
  const routeIds = [...new Set(items.flatMap(({ stop, predictions }) => [
    ...(stop.Routes || []),
    ...predictions.map((prediction) => prediction.RouteID)
  ]).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return loadBusRouteDetailsByIds(routeIds);
}

async function loadBusRouteDetailsByIds(routeIds) {
  const results = await Promise.allSettled(
    routeIds.map((routeId) => wmata(`/Bus.svc/json/jRouteDetails?RouteID=${encodeURIComponent(routeId)}`))
  );

  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((route) => route?.RouteID);
}

async function loadD80StopProjections() {
  const stopIds = config.d80StopIds || ["1001265", "1001270"];
  const results = await Promise.allSettled(
    stopIds.map((stopId) => wmata(`/NextBusService.svc/json/jPredictions?StopID=${encodeURIComponent(stopId)}`))
  );
  return results.flatMap((result, index) => {
    if (result.status !== "fulfilled") return [];
    return (result.value.Predictions || [])
      .filter((prediction) => prediction.RouteID === "D80")
      .map((prediction) => ({ ...prediction, StopID: stopIds[index] }));
  });
}

async function loadAlerts(nearest) {
  const [rail, bus] = await Promise.allSettled([
    wmata("/Incidents.svc/json/Incidents"),
    wmata("/Bus.svc/json/jIncidents")
  ]);
  return {
    rail: rail.status === "fulfilled" ? rail.value.Incidents || [] : [],
    bus: bus.status === "fulfilled" ? bus.value.BusIncidents || bus.value.Incidents || [] : [],
    stationCodes: new Set(nearest.flatMap((station) => station.codes || [station.code]))
  };
}

async function refreshTraffic() {
  if (state.isTrafficRefreshInFlight) return;
  state.isTrafficRefreshInFlight = true;
  try {
    await refreshTrafficData();
  } finally {
    state.isTrafficRefreshInFlight = false;
  }
}

async function refreshTrafficData() {
  if (!state.location) {
    renderTraffic();
    return;
  }
  await renderTraffic();
}

async function renderTraffic() {
  els.traffic.innerHTML = "";
  const origin = state.location || config.defaultLocation || { lat: 38.90525, lon: -77.05165, label: "2400 M Street NW" };
  destinations.forEach(async (destination) => {
    const driveUrl = mapsUrl(origin, destination, "driving");
    const transitUrl = mapsUrl(origin, destination, "transit");
    const directMiles = origin ? milesBetween(origin, destination) : 0;
    const approximateMinutes = origin ? Math.max(2, Math.round((directMiles * 1.25 / 18) * 60)) : 0;
    let displayedMinutes = approximateMinutes;
    let friction = origin ? "Approx. estimate" : "Open live map";
    let detail = origin ? `About ${approximateMinutes} min by car · ${directMiles.toFixed(1)} mi direct distance. Add a Google Routes or TomTom key for live traffic.` : "Set a location to check road options.";

    const card = document.createElement("article");
    card.className = "card";
    const timeLabel = `${displayedMinutes} min`;
    const timeNote = `${origin.label || "Selected location"} → ${destination.name}`;
    card.innerHTML = `
      <div class="card-head">
        <div>
          <h3>${destination.name}</h3>
          <p class="meta">${destination.label}</p>
        </div>
        <span class="pill ${friction.includes("delay") ? "severity" : ""}">${friction}</span>
      </div>
      <div class="road-time"><strong>${timeLabel}</strong><span>Estimated drive time · ${escapeHtml(timeNote)}</span></div>
      <p class="meta">${detail}</p>
      <div class="traffic-actions">
        <a class="link-button" target="_blank" rel="noreferrer" href="${driveUrl}">Drive</a>
        <a class="link-button" target="_blank" rel="noreferrer" href="${transitUrl}">Transit</a>
      </div>
    `;
    els.traffic.append(card);

    if (origin && (state.googleMapsKey || state.trafficKey)) {
      try {
        const traffic = state.googleMapsKey
          ? await googleRoutesRoute(origin, destination)
          : await tomTomRoute(origin, destination);
        displayedMinutes = Math.max(1, Math.round(traffic.travel / 60));
        friction = traffic.delay > 8 ? "Heavy delay" : traffic.delay > 3 ? "Some delay" : "Normal";
        detail = `${Math.round(traffic.travel / 60)} min by car, ${Math.round(traffic.delay)} min slower than free flow · ${traffic.provider}.`;
        card.querySelector(".road-time strong").textContent = `${displayedMinutes} min`;
        card.querySelector(".pill").textContent = friction;
        card.querySelector(".pill").classList.toggle("severity", friction.includes("delay"));
        card.querySelector(".road-time + .meta").textContent = detail;
      } catch (error) {
        detail = `About ${approximateMinutes} min by car · live traffic could not be reached. Map links are ready.`;
        card.querySelector(".road-time + .meta").textContent = detail;
      }
    }
  });
}

function showPage(index) {
  state.currentPage = ((index % els.pages.length) + els.pages.length) % els.pages.length;
  els.pages.forEach((page, pageIndex) => {
    page.classList.toggle("active", pageIndex === state.currentPage);
  });
  els.tabs.forEach((tab, tabIndex) => {
    tab.classList.toggle("active", tabIndex === state.currentPage);
  });
  els.pageLabel.textContent = ["Metro", "Bus", "Roads", "Lines"][state.currentPage];
  els.headerAlerts.hidden = state.currentPage !== 0;
  if (state.currentPage === 1 && state.busMap) setTimeout(() => state.busMap.invalidateSize(), 320);
  if (state.currentPage === 3 && state.featuredBusMap) setTimeout(() => state.featuredBusMap.invalidateSize(), 320);
}

// Expose a tiny navigation fallback for browsers that temporarily delay the
// normal event-listener path while a live data refresh is in progress.
window.showTransitPage = showPage;
window.toggleTransitLock = toggleLock;

function restartRotation() {
  clearInterval(state.rotationTimer);
  if (state.isLocked) return;
  state.rotationTimer = setInterval(() => {
    showPage(state.currentPage + 1);
  }, Number(config.rotateMs || 15000));
}

function toggleLock() {
  setRotationLock(!state.isLocked);
  setMessage(state.isLocked ? "Page rotation paused. Unlock to resume the 15-second rotation." : "Page rotation resumed.");
}

function setRotationLock(locked) {
  state.isLocked = locked;
  els.lockButton.classList.toggle("active", state.isLocked);
  els.lockButton.setAttribute("aria-pressed", String(state.isLocked));
  els.lockButton.textContent = state.isLocked ? "Unlock" : "Lock";
  restartRotation();
}

async function tomTomRoute(origin, destination) {
  const coords = `${origin.lat},${origin.lon}:${destination.lat},${destination.lon}`;
  const url = `https://api.tomtom.com/routing/1/calculateRoute/${coords}/json?traffic=true&travelMode=car&key=${encodeURIComponent(state.trafficKey)}`;
  const response = await fetchWithTimeout(url, {}, 7000);
  if (!response.ok) throw new Error(`TomTom request failed: ${response.status}`);
  const data = await response.json();
  const summary = data.routes?.[0]?.summary;
  if (!summary) throw new Error("No TomTom route");
  return {
    travel: summary.travelTimeInSeconds,
    delay: Math.max(0, (summary.trafficDelayInSeconds || 0) / 60),
    provider: "TomTom live traffic"
  };
}

async function googleRoutesRoute(origin, destination) {
  const response = await fetchWithTimeout("https://routes.googleapis.com/directions/v2:computeRoutes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": state.googleMapsKey,
      "X-Goog-FieldMask": "routes.duration,routes.staticDuration,routes.distanceMeters"
    },
    body: JSON.stringify({
      origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lon } } },
      destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lon } } },
      travelMode: "DRIVE",
      routingPreference: "TRAFFIC_AWARE_OPTIMAL",
      departureTime: new Date().toISOString()
    })
  }, 8000);
  if (!response.ok) throw new Error(`Google Routes request failed: ${response.status}`);
  const route = (await response.json()).routes?.[0];
  if (!route?.duration) throw new Error("No Google route");
  const travel = Number.parseFloat(String(route.duration).replace("s", ""));
  const freeFlow = Number.parseFloat(String(route.staticDuration || route.duration).replace("s", ""));
  if (!Number.isFinite(travel)) throw new Error("Invalid Google route duration");
  return {
    travel,
    delay: Math.max(0, (travel - (Number.isFinite(freeFlow) ? freeFlow : travel)) / 60),
    provider: "Google live traffic"
  };
}

async function wmata(path) {
  const joiner = path.includes("?") ? "&" : "?";
  const response = await fetchWithTimeout(`${WMATA_BASE}${path}${joiner}api_key=${encodeURIComponent(state.key)}`, {
    headers: { "Accept": "application/json" }
  });
  if (!response.ok) throw new Error(`WMATA request failed: ${response.status}`);
  return response.json();
}

function isWmataUnauthorized(error) {
  return /WMATA request failed: 401/.test(String(error?.message || error));
}

async function loadWeather() {
  if (!state.location || state.isWeatherInFlight) return;
  state.isWeatherInFlight = true;
  try {
    const params = new URLSearchParams({
      latitude: state.location.lat,
      longitude: state.location.lon,
      current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m",
      hourly: "precipitation_probability,precipitation",
      forecast_days: "1",
      temperature_unit: "fahrenheit",
      wind_speed_unit: "mph",
      timezone: "auto"
    });
    const response = await fetchWithTimeout(`https://api.open-meteo.com/v1/forecast?${params}`, {}, 7000);
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json();
    const current = data.current;
    if (!current) throw new Error("No current weather");
    const description = weatherDescription(current.weather_code);
    const rain = rainOutlook(data);
    els.weatherTemp.textContent = `${Math.round(current.temperature_2m)}°F`;
    els.weatherSummary.textContent = `${description} · feels ${Math.round(current.apparent_temperature)}° · wind ${Math.round(current.wind_speed_10m)} mph`;
    els.weatherRain.textContent = rain.label;
    els.weatherRain.className = rain.severity;
    els.weatherCard.title = `Weather updated ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
    els.weatherCard.classList.remove("weather-unavailable");
    els.weatherCard.querySelector(".weather-icon").textContent = weatherIcon(current.weather_code);
  } catch (error) {
    els.weatherTemp.textContent = "--°";
    els.weatherSummary.textContent = "Weather unavailable";
    els.weatherRain.textContent = "Rain outlook unavailable";
    els.weatherCard.classList.add("weather-unavailable");
  } finally {
    state.isWeatherInFlight = false;
  }
}

function rainOutlook(data) {
  const probabilities = (data.hourly?.precipitation_probability || []).slice(0, 8).map(Number).filter(Number.isFinite);
  const amounts = (data.hourly?.precipitation || []).slice(0, 8).map(Number).filter(Number.isFinite);
  const peak = probabilities.length ? Math.max(...probabilities) : 0;
  const total = amounts.reduce((sum, amount) => sum + amount, 0);
  if (peak >= 70) return { label: `Rain likely · peak ${peak}% next 8h`, severity: "rain-high" };
  if (peak >= 35 || total >= 1) return { label: `Rain possible · peak ${peak}% next 8h`, severity: "rain-medium" };
  return { label: `Dry trend · peak rain chance ${peak}%`, severity: "rain-low" };
}

function weatherDescription(code) {
  if (code === 0) return "Clear";
  if ([1, 2].includes(code)) return "Partly cloudy";
  if (code === 3) return "Cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Storms";
  return "Conditions";
}

function weatherIcon(code) {
  if (code === 0) return "☀";
  if ([1, 2].includes(code)) return "⛅";
  if ([3, 45, 48].includes(code)) return "☁";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄";
  if ([95, 96, 99].includes(code)) return "⚡";
  return "☂";
}

function fetchWithTimeout(url, options = {}, timeoutMs = 9000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
}

function withTimeout(promise, timeoutMs, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(message)), timeoutMs))
  ]);
}

function nearestStations(location) {
  return stationData
    .map((station) => ({ ...station, distance: milesBetween(location, station) }))
    .sort((a, b) => a.distance - b.distance);
}

function displayStations(location) {
  const stations = nearestStations(location);
  if (!state.selectedStationCodes.length) return stations.slice(0, 3);
  return stations
    .filter((station) => state.selectedStationCodes.includes(station.code))
    .sort((a, b) => {
      const aIndex = state.selectedStationCodes.indexOf(a.code);
      const bIndex = state.selectedStationCodes.indexOf(b.code);
      return aIndex - bIndex;
    });
}

function renderStationPicker(location) {
  if (!els.stationPicker || !location) return;
  const nearby = nearestStations(location).slice(0, 10);
  els.stationPicker.innerHTML = `
    <div class="station-picker-head"><strong>Nearby stations</strong><span>Choose up to 3</span></div>
    <div class="station-picker-list">
      ${nearby.map((station) => `
        <button type="button" class="station-choice${state.selectedStationCodes.includes(station.code) ? " active" : ""}" data-station-code="${escapeHtml(station.code)}" aria-pressed="${state.selectedStationCodes.includes(station.code)}">
          <span>${escapeHtml(station.name)}</span><small>${station.distance.toFixed(2)} mi</small>
        </button>
      `).join("")}
    </div>
  `;
}

function groupTrainPredictions(trains) {
  const grouped = new Map();
  trains.forEach((train) => {
    if (!grouped.has(train.LocationCode)) grouped.set(train.LocationCode, []);
    grouped.get(train.LocationCode).push(train);
  });
  return grouped;
}

function renderStations(stations, predictions) {
  renderMetroVisual(stations);
  els.stations.innerHTML = "";
  els.stationCount.textContent = stations.length;
  stations.forEach((station) => {
    const trains = (station.codes || [station.code])
      .flatMap((code) => predictions.get(code) || [])
      .filter((train) => train.Min !== "" && train.DestinationName !== "No Passenger")
      .sort((a, b) => trainMinutes(a) - trainMinutes(b));
    const groupedTrains = groupTrainsByDirection(trains, station.lines.includes("RD"));
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-head">
        <div>
          <h3>${escapeHtml(station.name)}</h3>
          <p class="meta">${station.distance.toFixed(2)} mi away</p>
        </div>
        <span class="pill">${station.code}</span>
      </div>
      <div class="rail-lines">${station.lines.map((line) => `<span class="rail-dot rail-${line}">${line}</span>`).join("")}</div>
      ${groupedTrains.length ? groupedTrains.map(formatTrainDirectionGroup).join("") : `<div class="prediction-list"><span class="prediction">Projected arrivals pending</span></div>`}
    `;
    els.stations.append(card);
  });
}

function renderMetroVisual(stations) {
  const visual = document.querySelector("#metroVisual");
  if (!visual) return;
  const ordered = [...stations].sort((a, b) => a.distance - b.distance);
  visual.innerHTML = ordered.map((station, index) => {
    const lines = station.lines.map((line) => `<span class="metro-visual-line rail-${line}">${escapeHtml(line)}</span>`).join("");
    const connector = index < ordered.length - 1 ? `<span class="metro-visual-connector" aria-hidden="true"></span>` : "";
    return `<div class="metro-visual-stop"><span class="metro-visual-dot"></span><strong>${escapeHtml(station.name)}</strong><small>${station.distance.toFixed(2)} mi</small><div>${lines}</div></div>${connector}`;
  }).join("");
}

function renderLiveTrains(trains, status) {
  els.liveTrains.innerHTML = "";
  els.liveTrainCount.textContent = status.startsWith("Live") ? `${status} · ${trains.length} trains` : status;
  els.liveTrainCount.classList.toggle("connected", status.startsWith("Live"));
  if (!trains.length) {
    const message = status === "WMATA key needed"
      ? "Add your WMATA API key in Data settings to see trains currently in service."
      : status === "Feed unavailable"
        ? "Live positions could not be reached. Next-train estimates may still be available."
        : "No active train positions were returned for the lines serving your nearby stations.";
    els.liveTrains.innerHTML = `<p class="live-trains-empty">${escapeHtml(message)}</p>`;
    updateLiveVehicleMarkers();
    return;
  }

  const visibleTrains = [];
  const trainsByLine = new Map();
  trains.forEach((train) => {
    if (!trainsByLine.has(train.LineCode)) trainsByLine.set(train.LineCode, []);
    trainsByLine.get(train.LineCode).push(train);
  });
  const lineQueues = [...trainsByLine.values()];
  while (visibleTrains.length < 8 && lineQueues.some((queue) => queue.length)) {
    lineQueues.forEach((queue) => {
      if (visibleTrains.length < 8 && queue.length) visibleTrains.push(queue.shift());
    });
  }

  els.liveTrains.innerHTML = visibleTrains.map((train) => {
    const destination = stationData.find((station) => station.code === train.DestinationStationCode || (station.codes || []).includes(train.DestinationStationCode));
    const destinationText = state.railStationNames.get(train.DestinationStationCode) || destination?.name || train.DestinationStationCode || "Destination not reported";
    const circuit = train.CircuitId ? `Track section ${escapeHtml(train.CircuitId)}` : "Track section unavailable";
    const cars = Number(train.CarCount) > 0 ? `${escapeHtml(train.CarCount)} cars` : "Car count unavailable";
    return `
      <article class="live-train-card">
        <span class="rail-dot rail-${escapeHtml(train.LineCode)}">${escapeHtml(train.LineCode)}</span>
        <div class="live-train-main">
          <strong>Train ${escapeHtml(train.TrainNumber || train.TrainId || "—")}</strong>
          <span class="live-train-destination">Toward ${escapeHtml(destinationText)}</span>
        </div>
        <div class="live-train-details"><span>${circuit}</span><span>${cars}</span></div>
      </article>
    `;
  }).join("");
  updateLiveVehicleMarkers();
}

function loadTrainCircuitLocations() {
  if (!state.trainCircuitLocationsPromise) {
    state.trainCircuitLocationsPromise = Promise.all([
      loadRailStationNames(),
      wmata("/TrainPositions/StandardRoutes?contentType=json")
    ]).then(([, result]) => {
      (result.StandardRoutes || []).forEach((route) => {
        const circuits = route.TrackCircuits || [];
        const stationAnchors = circuits.flatMap((circuit, index) => {
          const station = state.railStations.get(circuit.StationCode);
          return station ? [{ index, ...station }] : [];
        });

        circuits.forEach((circuit, index) => {
          const previous = [...stationAnchors].reverse().find((anchor) => anchor.index <= index);
          const next = stationAnchors.find((anchor) => anchor.index >= index);
          if (!previous && !next) return;
          let point = previous || next;
          if (previous && next && previous.index !== next.index) {
            const ratio = (index - previous.index) / (next.index - previous.index);
            point = {
              lat: previous.lat + (next.lat - previous.lat) * ratio,
              lon: previous.lon + (next.lon - previous.lon) * ratio
            };
          }
          state.trainCircuitLocations.set(String(circuit.CircuitId), {
            lat: point.lat,
            lon: point.lon,
            lineCode: route.LineCode,
            track: route.TrackNum
          });
        });
      });
      return state.trainCircuitLocations;
    }).catch(() => state.trainCircuitLocations);
  }
  return state.trainCircuitLocationsPromise;
}

function updateLiveVehicleMarkers() {
  if (!state.busMap || !window.L) return;
  if (!state.busVehicleLayer || !state.trainVehicleLayer) return;
  state.busVehicleLayer.clearLayers();
  state.trainVehicleLayer.clearLayers();

  const center = state.location || config.defaultLocation || { lat: 38.90525, lon: -77.05165 };
  const radius = (Number(els.radius.value) || 800) * 1.15;
  let nearbyBusCount = 0;
  const routeIds = routeIdsFromBusItems(state.liveBusPositions.map((bus) => ({ stop: { Routes: [bus.RouteID] }, predictions: [] })));
  state.liveBusPositions.forEach((bus) => {
    const point = { lat: Number(bus.Lat), lon: Number(bus.Lon) };
    if (milesBetween(center, point) * 1609.34 > radius) return;
    nearbyBusCount += 1;
    const route = bus.RouteID || "Bus";
    const color = routeColor(Math.max(0, routeIds.indexOf(route)));
    const vehicle = bus.VehicleID ? ` · vehicle ${bus.VehicleID}` : "";
    const direction = bus.DirectionText ? ` · ${bus.DirectionText}` : "";
    const arrow = directionArrow(bus.DirectionText);
    L.marker([point.lat, point.lon], {
      icon: L.divIcon({
        className: "live-vehicle-icon",
        html: `<span class="bus-map-marker" style="--vehicle-color:${color}"><b class="vehicle-arrow">${arrow}</b><span>${escapeHtml(route)}</span></span>`,
        iconSize: [48, 32],
        iconAnchor: [24, 16]
      })
    }).bindTooltip(`${escapeHtml(route)} bus${escapeHtml(vehicle)}${escapeHtml(direction)}`, { direction: "top", offset: [0, -8] }).addTo(state.busVehicleLayer);
  });

  const lineColors = { RD: "#bf2026", BL: "#0076bf", OR: "#da8707", SV: "#778895", YL: "#d2a81e", GR: "#00a651" };
  const addTrainMarkers = () => {
    let nearbyTrainCount = 0;
    state.liveTrainPositions.forEach((train) => {
      const point = state.trainCircuitLocations.get(String(train.CircuitId));
      if (!point || milesBetween(center, point) * 1609.34 > radius * 2.2) return;
      nearbyTrainCount += 1;
      const stationName = state.railStationNames.get(train.DestinationStationCode) || train.DestinationStationCode || "destination unavailable";
      const arrow = Number(train.DirectionNum) === 2 ? "↓" : "↑";
      L.marker([point.lat, point.lon], {
        icon: L.divIcon({
          className: "live-vehicle-icon",
          html: `<span class="train-map-marker" style="--vehicle-color:${lineColors[train.LineCode] || "#334b45"}"><b class="vehicle-arrow">${arrow}</b><span>${escapeHtml(train.LineCode || "M")}</span></span>`,
          iconSize: [38, 32],
          iconAnchor: [19, 16]
        })
      }).bindTooltip(`${escapeHtml(train.LineCode || "Metro")} train ${escapeHtml(train.TrainNumber || train.TrainId || "")} toward ${escapeHtml(stationName)} · approximate position`, { direction: "top", offset: [0, -8] }).addTo(state.trainVehicleLayer);
    });
    const trainCountNode = document.querySelector("#liveTrainMapCount");
    if (trainCountNode) trainCountNode.textContent = `${nearbyTrainCount} approximate train positions`;
  };

  const busCountNode = document.querySelector("#liveBusMapCount");
  if (busCountNode) busCountNode.textContent = `${nearbyBusCount} live buses nearby`;

  if (state.trainCircuitLocations.size) {
    addTrainMarkers();
  } else {
    const currentMap = state.busMap;
    loadTrainCircuitLocations().then(() => {
      if (currentMap === state.busMap) updateLiveVehicleMarkers();
    });
  }
}

function directionArrow(text) {
  const value = String(text || "").toLowerCase();
  if (/north|up|friendship|uptown/.test(value)) return "↑";
  if (/south|down|union|downtown/.test(value)) return "↓";
  if (/east|largo|new carrollton/.test(value)) return "→";
  if (/west|ashburn|dulles|ballston/.test(value)) return "←";
  return "↗";
}

function groupTrainsByDirection(trains, isRedLine = false) {
  const grouped = new Map();
  trains.forEach((train) => {
    const direction = metroDirectionLabel(train);
    const key = direction;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(train);
  });
  const order = isRedLine || trains.some((train) => train.Line === "RD")
    ? ["Northbound", "Southbound"]
    : ["Towards Virginia", "Towards the East"];
  return order.map((direction) => ({
    direction,
    trains: (grouped.get(direction) || [])
      .sort((a, b) => trainMinutes(a) - trainMinutes(b))
      .slice(0, 3)
  }));
}

function formatTrainDirectionGroup(group) {
  return `
    <section class="train-direction">
      <h4>${escapeHtml(group.direction)}</h4>
      <div class="prediction-list">${group.trains.length ? group.trains.map(formatTrain).join("") : `<span class="prediction">No projected trains</span>`}</div>
    </section>
  `;
}

function metroDirectionLabel(train) {
  if (train.Line === "RD") return redLineDirection(train) || "Red Line";
  return eastWestDirection(train) || "Direction";
}

function redLineDirection(train) {
  const destination = `${train.Destination || ""} ${train.DestinationName || ""}`.toLowerCase();
  if (destination.includes("shady") || destination.includes("grosvenor") || destination.includes("rockville") || destination.includes("twinbrook")) return "Northbound";
  if (destination.includes("glenmont") || destination.includes("silver spring") || destination.includes("takoma") || destination.includes("no ma") || destination.includes("union")) return "Southbound";
  return "";
}

function eastWestDirection(train) {
  const destination = `${train.Destination || ""} ${train.DestinationName || ""}`.toLowerCase();
  if (destination.includes("ashburn") || destination.includes("dulles") || destination.includes("wiehle") || destination.includes("vienna") || destination.includes("fairfax") || destination.includes("ballston") || destination.includes("franconia") || destination.includes("huntington")) return "Towards Virginia";
  if (destination.includes("downtown") || destination.includes("largo") || destination.includes("new carrollton") || destination.includes("stadium") || destination.includes("mount vernon") || destination.includes("greenbelt")) return "Towards the East";
  return "";
}

function renderBuses(items, routeDetails = []) {
  els.buses.innerHTML = "";
  els.busCount.textContent = `${routeIdsFromBusItems(items).length} routes`;
  if (!items.length) {
    renderBusCoverage([], []);
    return;
  }
  renderBusCoverage(items, routeDetails);
}

function renderBusCoverage(items, routeDetails = []) {
  state.lastNearbyBusItems = items;
  state.lastNearbyBusRouteDetails = routeDetails;
  els.busCoverage.innerHTML = "";
  const routes = new Map();
  items.forEach(({ stop, predictions }) => {
    [...(stop.Routes || []), ...predictions.map((prediction) => prediction.RouteID)]
      .filter(Boolean)
      .forEach((route) => {
        if (!routes.has(route)) routes.set(route, { route, directions: new Set(), stops: 0 });
        routes.get(route).stops += 1;
      });
    predictions.forEach((prediction) => {
      if (!routes.has(prediction.RouteID)) return;
      if (prediction.DirectionText) routes.get(prediction.RouteID).directions.add(prediction.DirectionText);
    });
  });

  const routeSource = routes.size
    ? [...routes.values()]
    : featuredBusRoutes.map((route) => ({
      route: route.route,
      directions: new Set(String(route.label || "Route direction").split("/").map((value) => value.trim()).filter(Boolean)),
      stops: 0
    }));
  const routeAreas = routeSource
    .sort((a, b) => b.stops - a.stops || a.route.localeCompare(b.route, undefined, { numeric: true }))
    .map((route, index) => ({ ...route, ...describeBusRoute(route.route), index }));

  const coverage = document.createElement("article");
  coverage.className = "coverage-card";
  coverage.innerHTML = `
    <div class="coverage-copy">
      <p class="eyebrow">Transit Lines</p>
      <h3>${escapeHtml(state.location?.label || "Selected area")}</h3>
      <p class="meta">Live bus locations and nearby stops centered on your selected address.</p>
      <div class="live-map-counts"><span id="liveBusMapCount">Bus locations loading</span><span id="liveTrainMapCount">Train locations loading</span></div>
    </div>
    ${formatRouteMap(routeDetails, items)}
    <div class="coverage-list" aria-label="All nearby bus routes">
      ${routeAreas.length ? routeAreas.map(formatCoverageListRoute).join("") : `<span class="route-chip">Routes pending</span>`}
    </div>
  `;
  els.busCoverage.append(coverage);
  requestAnimationFrame(() => drawBusRouteMap(routeDetails, items));
}

function renderFeaturedBusRoutes(routeDetails) {
  state.lastFeaturedBusRouteDetails = routeDetails;
  els.featuredBusCount.textContent = `${featuredBusRoutes.length} routes`;
  els.featuredBusCoverage.innerHTML = "";
  const loadedRoutes = new Set(routeDetails.map((route) => route.RouteID));
  const routesWithIndex = featuredBusRoutes.map((route, index) => ({ ...route, index, isLoaded: loadedRoutes.has(route.route) }));
  const coverage = document.createElement("article");
  coverage.className = "coverage-card featured-coverage-card";
  coverage.innerHTML = `
    <div class="coverage-copy">
      <p class="eyebrow">Fixed Route Map</p>
      <h3>A58 / D80 / D82 / C85 / D74</h3>
      <p class="meta">${routeDetails.length ? "Selected WMATA bus routes shown together on one street map." : "Add a WMATA key to draw these selected bus routes."}</p>
    </div>
    <div class="coverage-map" aria-label="Selected bus routes map">
      <div id="featuredBusRouteMap" class="leaflet-route-map"></div>
      <button type="button" class="map-reset">Reset view</button>
      ${routeDetails.length ? "" : `<div class="map-overlay-note"><strong>Selected route map ready</strong><span>WMATA route geometry will appear after a key is available.</span></div>`}
    </div>
    <div class="coverage-list" aria-label="Selected bus route legend">
      ${routesWithIndex.map(formatFeaturedRouteChip).join("")}
    </div>
  `;
  els.featuredBusCoverage.append(coverage);
  requestAnimationFrame(() => drawFeaturedBusRouteMap(routeDetails));
}

function renderD80Projections(predictions) {
  const groups = {
    Northbound: predictions.filter((prediction) => /north/i.test(prediction.DirectionText || "")),
    Southbound: predictions.filter((prediction) => /south/i.test(prediction.DirectionText || ""))
  };
  els.d80Projections.innerHTML = `
    <article class="d80-card">
      <div>
        <p class="eyebrow">D80 Projections</p>
        <h3>${escapeHtml(config.d80StopLabel || "Pennsylvania Ave NW + 24th St NW")}</h3>
      </div>
      <div class="d80-grid">
        ${formatD80Direction("Northbound", groups.Northbound)}
        ${formatD80Direction("Southbound", groups.Southbound)}
      </div>
    </article>
  `;
}

function formatD80Direction(label, predictions) {
  const sorted = predictions
    .sort((a, b) => Number(a.Minutes) - Number(b.Minutes))
    .slice(0, 3);
  return `
    <section class="d80-direction">
      <h4>${label}</h4>
      <div class="prediction-list">
        ${sorted.length ? sorted.map(formatD80Prediction).join("") : `<span class="prediction">No projected buses</span>`}
      </div>
    </section>
  `;
}

function formatD80Prediction(prediction) {
  return `<span class="prediction">${escapeHtml(prediction.DirectionText || "D80")}: Projected ${escapeHtml(prediction.Minutes)} min</span>`;
}

function formatFeaturedRouteChip(route) {
  const directions = String(route.label || "Route path").split("/").map((direction) => direction.trim()).filter(Boolean);
  return `
    <span class="coverage-chip ${route.isLoaded ? "" : "muted"}" style="--route-color: ${routeColor(route.index)}">
      <strong>${escapeHtml(route.route)}</strong>
      <div class="bus-direction-buttons">${directions.map(formatBusDirection).join("")}</div>
      <small>${route.isLoaded ? "line loaded" : "no WMATA line"}</small>
    </span>
  `;
}

function formatCoverageListRoute(route) {
  const directions = [...route.directions].slice(0, 2);
  const color = routeColor(route.index);
  return `
    <span class="coverage-chip" style="--route-color: ${color}">
      <strong>${escapeHtml(route.route)}</strong>
      <div class="bus-direction-buttons">${(directions.length ? directions : [route.area]).map(formatBusDirection).join("")}</div>
    </span>
  `;
}

function formatBusDirection(direction) {
  const text = String(direction || "Route direction").trim();
  const lower = text.toLowerCase();
  const arrow = /north|up|friendship|uptown/.test(lower) ? "↑" : /south|down|union|downtown/.test(lower) ? "↓" : /east|largo|new carrollton/.test(lower) ? "→" : /west|ashburn|dulles|ballston/.test(lower) ? "←" : "↗";
  return `<span class="bus-direction-button" title="${escapeHtml(text)}"><b>${arrow}</b><span>${escapeHtml(text)}</span></span>`;
}

function formatRouteMap(routeDetails, items = []) {
  const hasFallbackStops = items.some(({ stop }) => Number.isFinite(Number(stop.Lat)) && Number.isFinite(Number(stop.Lon)));
  const hasLiveVehicles = state.liveBusPositions.length > 0;
  return `
    <div class="coverage-map" aria-label="Nearby bus route map">
      <div id="busRouteMap" class="leaflet-route-map"></div>
      <button type="button" class="map-reset">Reset view</button>
      <div class="map-legend" aria-label="Map legend"><span><i class="legend-bus"></i>Live bus</span><span><i class="legend-train"></i>Train · approximate</span><span><i class="legend-stop"></i>Bus stop</span><span><i class="legend-direction">➤</i>Route direction</span></div>
      ${routeDetails.length || hasFallbackStops || hasLiveVehicles ? "" : `<div class="map-overlay-note"><strong>Nearby map</strong><span>Add a WMATA key to load live buses, stops, and route paths.</span></div>`}
    </div>
  `;
}

function drawBusRouteMap(routeDetails, items = []) {
  const mapNode = document.querySelector("#busRouteMap");
  if (!mapNode) return;

  if (state.busMap) {
    state.busMap.remove();
    state.busMap = null;
  }

  const center = state.location || config.defaultLocation || { lat: 38.90525, lon: -77.05165 };
  if (!window.L) {
    mapNode.innerHTML = `<div class="map-fallback">Street map library unavailable.</div>`;
    return;
  }

  state.busMap = L.map(mapNode, {
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true
  }).setView([center.lat, center.lon], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(state.busMap);

  const paths = normalizeRoutePaths(routeDetails);
  const bounds = [];
  paths.forEach((path, index) => {
    const color = routeColor(index);
    const latLngs = path.points.map((point) => [point.lat, point.lon]);
    bounds.push(...latLngs);
    L.polyline(latLngs, {
      color,
      weight: 6,
      opacity: 0.82,
      lineCap: "round",
      lineJoin: "round"
    }).bindTooltip(routeLabel(path), { sticky: true }).addTo(state.busMap);
    addRouteDirectionArrow(state.busMap, path, color);

    sampledRouteDots(path.points, 22).forEach((point) => {
      L.circleMarker([point.lat, point.lon], {
        radius: 3.7,
        color: "#ffffff",
        fillColor: color,
        fillOpacity: 0.88,
        opacity: 0.9,
        weight: 1.5
      }).bindTooltip(routeLabel(path), { sticky: true }).addTo(state.busMap);
    });

    const labelPoint = path.points[Math.floor(path.points.length / 2)];
    L.marker([labelPoint.lat, labelPoint.lon], {
      icon: L.divIcon({
        className: "route-label",
        html: `<span style="--route-color:${color}">${escapeHtml(path.route)}</span>`,
        iconSize: [44, 22],
        iconAnchor: [22, 11]
      })
    }).addTo(state.busMap);

    path.stops.forEach((stop) => {
      addBusStopMarker(state.busMap, stop, path, color, bounds);
    });
  });

  if (!paths.length) {
    const fallbackRoutes = routeIdsFromBusItems(items);
    items.forEach(({ stop }) => {
      const lat = Number(stop.Lat);
      const lon = Number(stop.Lon);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
      bounds.push([lat, lon]);
      L.circleMarker([lat, lon], {
        radius: 5,
        color: "#0076bf",
        fillColor: "#0076bf",
        fillOpacity: 0.8,
        weight: 2
      }).bindTooltip(stop.Name || stop.StopName || `Stop ${stop.StopID}`, { sticky: true }).addTo(state.busMap);

      (stop.Routes || []).slice(0, 4).forEach((route) => {
        const index = Math.max(0, fallbackRoutes.indexOf(route));
        const color = routeColor(index);
        interpolateDots({ lat: center.lat, lon: center.lon }, { lat, lon }, 11).forEach((point) => {
          L.circleMarker([point.lat, point.lon], {
            radius: 4,
            color: "#ffffff",
            fillColor: color,
            fillOpacity: 0.92,
            opacity: 0.95,
            weight: 1.5
          }).bindTooltip(route, { sticky: true }).addTo(state.busMap);
        });
      });
    });
  }

  L.circleMarker([center.lat, center.lon], {
    radius: 8,
    color: "#10211b",
    fillColor: "#10211b",
    fillOpacity: 1,
    weight: 2
  }).bindTooltip(center.label || "2400 M Street NW", { permanent: true, direction: "top", offset: [0, -8] }).addTo(state.busMap);
  L.circle([center.lat, center.lon], { radius: Number(els.radius.value) || 800, color: "#547c68", weight: 1, fillOpacity: 0.035, interactive: false }).addTo(state.busMap);
  state.busVehicleLayer = L.layerGroup().addTo(state.busMap);
  state.trainVehicleLayer = L.layerGroup().addTo(state.busMap);
  bindMapReset(state.busMap, mapNode, center, 15);
  updateLiveVehicleMarkers();

  setTimeout(() => state.busMap?.invalidateSize(), 80);
}

function drawFeaturedBusRouteMap(routeDetails) {
  const mapNode = document.querySelector("#featuredBusRouteMap");
  if (!mapNode) return;

  if (state.featuredBusMap) {
    state.featuredBusMap.remove();
    state.featuredBusMap = null;
  }

  const center = state.location || config.defaultLocation || { lat: 38.90525, lon: -77.05165 };
  if (!window.L) {
    mapNode.innerHTML = `<div class="map-fallback">Street map library unavailable.</div>`;
    return;
  }

  state.featuredBusMap = createRouteMap(mapNode, center);
  const routeOrder = featuredBusRoutes.map((route) => route.route);
  const bounds = drawRouteDetailsOnMap(state.featuredBusMap, routeDetails, routeOrder);
  drawMissingRoutePlaceholders(state.featuredBusMap, center, routeDetails, routeOrder, bounds);

  L.circleMarker([center.lat, center.lon], {
    radius: 8,
    color: "#10211b",
    fillColor: "#10211b",
    fillOpacity: 1,
    weight: 2
  }).bindTooltip(center.label || "2400 M Street NW", { permanent: true, direction: "top", offset: [0, -8] }).addTo(state.featuredBusMap);
  bounds.push([center.lat, center.lon]);

  if (bounds.length > 1) {
    state.featuredBusMap.fitBounds(bounds, { padding: [22, 22], maxZoom: 14 });
  }
  bindMapReset(state.featuredBusMap, mapNode, center, 14);

  setTimeout(() => state.featuredBusMap?.invalidateSize(), 80);
}

function drawMissingRoutePlaceholders(map, center, routeDetails, routeOrder, bounds) {
  const loadedRoutes = new Set(routeDetails.map((route) => route.RouteID));
  routeOrder.forEach((route, index) => {
    if (loadedRoutes.has(route)) return;
    const color = routeColor(index);
    const angle = (-70 + index * 35) * Math.PI / 180;
    const target = {
      lat: center.lat + Math.sin(angle) * 0.018,
      lon: center.lon + Math.cos(angle) * 0.018
    };
    bounds.push([target.lat, target.lon]);
    L.polyline([[center.lat, center.lon], [target.lat, target.lon]], {
      color,
      weight: 4,
      opacity: 0.45,
      dashArray: "8 8"
    }).bindTooltip(`${route}: WMATA route geometry unavailable`, { sticky: true }).addTo(map);
    L.marker([target.lat, target.lon], {
      icon: L.divIcon({
        className: "route-label",
        html: `<span style="--route-color:${color}">${escapeHtml(route)}</span>`,
        iconSize: [44, 22],
        iconAnchor: [22, 11]
      })
    }).addTo(map);
  });
}

function createRouteMap(mapNode, center) {
  const map = L.map(mapNode, {
    zoomControl: true,
    attributionControl: true,
    scrollWheelZoom: true
  }).setView([center.lat, center.lon], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
  return map;
}

function bindMapReset(map, mapNode, center, zoom) {
  const initialBounds = map.getBounds();
  const button = mapNode.parentElement.querySelector(".map-reset");
  if (!button) return;
  button.addEventListener("click", () => {
    map.fitBounds(initialBounds, { padding: [20, 20], maxZoom: zoom });
    map.invalidateSize();
  });
}

function drawRouteDetailsOnMap(map, routeDetails, routeOrder = []) {
  const paths = normalizeRoutePaths(routeDetails);
  const bounds = [];
  paths.forEach((path, fallbackIndex) => {
    const orderedIndex = routeOrder.indexOf(path.route);
    const color = routeColor(orderedIndex >= 0 ? orderedIndex : fallbackIndex);
    const latLngs = path.points.map((point) => [point.lat, point.lon]);
    bounds.push(...latLngs);
    L.polyline(latLngs, {
      color,
      weight: 6,
      opacity: 0.82,
      lineCap: "round",
      lineJoin: "round"
    }).bindTooltip(routeLabel(path), { sticky: true }).addTo(map);
    addRouteDirectionArrow(map, path, color);

    sampledRouteDots(path.points, 22).forEach((point) => {
      L.circleMarker([point.lat, point.lon], {
        radius: 3.7,
        color: "#ffffff",
        fillColor: color,
        fillOpacity: 0.88,
        opacity: 0.9,
        weight: 1.5
      }).bindTooltip(routeLabel(path), { sticky: true }).addTo(map);
    });

    const labelPoint = path.points[Math.floor(path.points.length / 2)];
    L.marker([labelPoint.lat, labelPoint.lon], {
      icon: L.divIcon({
        className: "route-label",
        html: `<span style="--route-color:${color}">${escapeHtml(path.route)}</span>`,
        iconSize: [44, 22],
        iconAnchor: [22, 11]
      })
    }).addTo(map);

    path.stops.forEach((stop) => {
      addBusStopMarker(map, stop, path, color, bounds);
    });
  });
  return bounds;
}

function addRouteDirectionArrow(map, path, color) {
  if (!path.points || path.points.length < 2) return;
  const midpoint = path.direction === 1 ? 0.65 : 0.35;
  const middleIndex = Math.floor((path.points.length - 1) * midpoint);
  const point = path.points[middleIndex];
  const before = path.points[Math.max(0, middleIndex - 1)];
  const after = path.points[Math.min(path.points.length - 1, middleIndex + 1)];
  const meanLatitude = (before.lat + after.lat) / 2 * Math.PI / 180;
  const dx = after.lon - before.lon;
  const dy = -(after.lat - before.lat) / Math.cos(meanLatitude);
  const bearing = Math.atan2(dy, dx) * 180 / Math.PI;
  L.marker([point.lat, point.lon], {
    interactive: false,
    keyboard: false,
    zIndexOffset: 1000,
    icon: L.divIcon({
      className: "route-direction-arrow",
      html: `<span class="route-direction-arrow-mark" style="--route-color:${color};--bearing:${bearing}deg">➤</span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })
  }).bindTooltip(routeLabel(path), { sticky: true }).addTo(map);
}

function addBusStopMarker(map, stop, path, color, bounds) {
  bounds.push([stop.lat, stop.lon]);
  L.circleMarker([stop.lat, stop.lon], {
    radius: 7,
    color: "#10211b",
    fillColor: color,
    fillOpacity: 0.98,
    opacity: 1,
    weight: 2.5
  }).bindTooltip(stopLabel(stop, path), { sticky: true }).addTo(map);
}

function routeLabel(path) {
  return `${path.route}${path.headsign ? ` toward ${path.headsign}` : ""}`;
}

function stopLabel(stop, path) {
  const name = stop.name || "Bus stop";
  const id = stop.id ? ` #${stop.id}` : "";
  return `${path.route}: ${name}${id}`;
}

function sampledRouteDots(points, maxDots) {
  if (points.length <= maxDots) return points;
  const step = Math.max(1, Math.floor(points.length / maxDots));
  const sampled = points.filter((_, index) => index % step === 0);
  const last = points[points.length - 1];
  if (sampled[sampled.length - 1] !== last) sampled.push(last);
  return sampled.slice(0, maxDots + 1);
}

function interpolateDots(start, end, count) {
  return Array.from({ length: count }, (_, index) => {
    const ratio = (index + 1) / (count + 1);
    return {
      lat: start.lat + (end.lat - start.lat) * ratio,
      lon: start.lon + (end.lon - start.lon) * ratio
    };
  });
}

function routeIdsFromBusItems(items) {
  return [...new Set(items.flatMap(({ stop, predictions }) => [
    ...(stop.Routes || []),
    ...predictions.map((prediction) => prediction.RouteID)
  ]).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function normalizeRoutePaths(routeDetails) {
  return routeDetails.flatMap((route) => {
    const directions = [route.Direction0, route.Direction1].filter(Boolean);
    return directions.map((direction, index) => ({
      route: route.RouteID,
      name: route.Name,
      direction: index,
      headsign: direction.TripHeadsign || direction.DirectionText || direction.Name || "",
      points: normalizePoints(direction.Shape || direction.ShapePoints || []),
      stops: normalizeStops(direction.Stops || [])
    })).filter((path) => path.points.length > 1);
  });
}

function normalizePoints(points) {
  return points
    .map((point) => ({
      lat: Number(point.Lat ?? point.Latitude),
      lon: Number(point.Lon ?? point.Longitude)
    }))
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
}

function normalizeStops(stops) {
  return stops
    .map((stop) => ({
      lat: Number(stop.Lat ?? stop.Latitude),
      lon: Number(stop.Lon ?? stop.Longitude),
      name: stop.Name || stop.StopName || "",
      id: stop.StopID || stop.StopId || ""
    }))
    .filter((stop) => Number.isFinite(stop.lat) && Number.isFinite(stop.lon));
}

function routeColor(index) {
  return ["#0076bf", "#00a184", "#d74f35", "#7b61ff", "#da8707", "#bf2026", "#008c55", "#665191", "#b45700", "#2f6f73"][index % 10];
}

function describeBusRoute(route) {
  const value = String(route).toUpperCase();
  if (/^3[0-9]/.test(value) || value === "D6") return { area: "Georgetown / Downtown", tone: "west" };
  if (/^(H|L|S)/.test(value)) return { area: "North DC neighborhoods", tone: "north" };
  if (/^(P|V|W|A)/.test(value)) return { area: "Southeast DC", tone: "east" };
  if (/^(N|D|G|X)/.test(value)) return { area: "Crosstown service", tone: "central" };
  if (/^(7|10|16|22|23|28)/.test(value)) return { area: "Virginia connections", tone: "south" };
  if (/^M/.test(value)) return { area: "Circulator / local loop", tone: "loop" };
  return { area: "Local bus corridor", tone: "local" };
}

function renderAlerts(alerts, nearest) {
  const lines = new Set(nearest.flatMap((station) => station.lines));
  const relevantRail = alerts.rail.filter((incident) => {
    const lineCodes = String(incident.LinesAffected || "").split(";").filter(Boolean);
    const stationCodes = String(incident.StationCodes || "").split(";").filter(Boolean);
    return lineCodes.some((line) => lines.has(line)) || stationCodes.some((code) => alerts.stationCodes.has(code));
  });
  const busAlerts = alerts.bus.slice(0, 5);
  const all = [...relevantRail, ...busAlerts].slice(0, 8);
  if (!all.length) {
    renderAlertEmpty("All clear", "No nearby rail or bus alerts are reported.");
    return;
  }
  const firstAlert = all[0];
  const description = firstAlert.Description || firstAlert.IncidentText || "Service alert details unavailable.";
  els.headerAlerts.innerHTML = `
    <div class="header-alert-icon" aria-hidden="true">!</div>
    <div class="header-alert-copy">
      <strong>${all.length} service ${all.length === 1 ? "alert" : "alerts"}</strong>
      <span>${escapeHtml(description)}</span>
    </div>
  `;
  els.headerAlerts.hidden = state.currentPage !== 0;
}

function formatTrain(train) {
  const min = train.Min === "ARR" ? "arr" : train.Min === "BRD" ? "brd" : `${train.Min} min`;
  return `<span class="prediction">${escapeHtml(train.Line || "--")} to ${escapeHtml(train.Destination || train.DestinationName)}: Projected ${escapeHtml(min)}</span>`;
}

function trainMinutes(train) {
  if (train.Min === "ARR") return 0;
  if (train.Min === "BRD") return 0.5;
  const minutes = Number(train.Min);
  return Number.isFinite(minutes) ? minutes : 999;
}

function formatBus(bus) {
  return `<span class="prediction">${escapeHtml(bus.RouteID)} ${escapeHtml(bus.DirectionText)}: ${escapeHtml(bus.Minutes)} min</span>`;
}

function mapsUrl(origin, destination, mode) {
  if (!origin) return `https://www.google.com/maps/search/?api=1&query=${destination.lat},${destination.lon}`;
  const params = new URLSearchParams({
    api: "1",
    origin: `${origin.lat},${origin.lon}`,
    destination: `${destination.lat},${destination.lon}`,
    travelmode: mode
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function milesBetween(a, b) {
  const earthMiles = 3958.8;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * earthMiles * Math.asin(Math.sqrt(h));
}

function toRad(value) {
  return value * Math.PI / 180;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderEmptyStates() {
  els.stationCount.textContent = "0";
  els.busCount.textContent = "0";
  els.featuredBusCount.textContent = `${featuredBusRoutes.length} routes`;
  renderLiveTrains([], "Waiting for location");
  renderEmpty(els.stations, "Choose a location", "The nearest Metro stations will appear here.");
  renderBusEmpty("Choose a location", "Nearby stops and route predictions will appear here.");
  renderFeaturedBusRoutes([]);
  renderD80Projections([]);
  renderAlertEmpty("Choose a location", "Relevant WMATA rail and bus alerts will appear here.");
}

function renderBusEmpty(title, text) {
  els.busCount.textContent = "0";
  renderBusCoverage([], []);
  renderEmpty(els.buses, title, text);
}

function renderAlertEmpty(title, text) {
  els.headerAlerts.innerHTML = `
    <div class="header-alert-icon clear" aria-hidden="true">✓</div>
    <div class="header-alert-copy">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(text)}</span>
    </div>
  `;
  els.headerAlerts.hidden = state.currentPage !== 0;
}

function renderEmpty(container, title, text) {
  container.innerHTML = "";
  const node = document.querySelector("#emptyTemplate").content.cloneNode(true);
  node.querySelector("strong").textContent = title;
  node.querySelector("p").textContent = text;
  container.append(node);
}

function setMessage(text) {
  els.message.textContent = text;
}

function updateClock() {
  els.updated.textContent = new Intl.DateTimeFormat([], {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date());
}
