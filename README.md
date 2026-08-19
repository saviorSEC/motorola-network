# MOTOROLA NETWORK — LPR · Video · Radio Ecosystem

Flock-globe-style galaxy + street map of Motorola Solutions' intelligence network:
Fixed Plate Search cloud, LEARN analytics, VehicleManager, 29+ video-manager customer
tenants, RadioCentral, identity plane (Okta/Ping/Auth0), and the acquired video-security
family (Vigilant, Avigilon, Pelco, Openpath, Envysion).

- **Galaxy 3D** (`index.html`): **10 planets / 105 services / 194 links**
  - Click any planet → member services · click a service → role/DNS/endpoints/notes
- **Street Map** (`streetmap.html`): Leaflet/OSM view of the tenant fleet — inferred
  geolocation, confidence-flagged (high/inferred/low), search + detail panels
- **Boundary:** passive OSINT — CT logs, passive DNS, benign HTTP probes, public JS.
  No auth, no writes, no exploitation. Tenant coordinates are inferred from public
  slugs (agency HQ / city center), not camera locations. Creds redacted.
- Full report + recon data: private archive `saviorSEC/Motorola` (TLP:AMBER)

Data: `motorola_network.js` (`NET_INT`) + `streetmap-data.js` (`STREET_DATA`) ·
engine: three.js + 3d-force-graph + Leaflet
