// MOTOROLA SOLUTIONS — street map data (passive OSINT, public artifacts). 2026-08-19.
// Tenant coordinates are INFERRED from tenant slugs (agency/city names) — confidence flagged.
const STREET_DATA = {
  "meta": {
    "title": "MOTOROLA VIDEO MANAGER — TENANT FLEET",
    "note": "Inferred tenant geolocation from public *.videomanager.ex.motorolasolutions.com slugs. Passive OSINT — no customer data accessed."
  },
  "tenants": [
    {"id":"brinks","host":"brinks.videomanager.exc.motorolasolutions.com","name":"Brinks","city":"Coppell (Dallas)","state":"TX","country":"US","lat":32.9546,"lng":-96.9747,"conf":"inferred","note":"Armored-car / cash logistics — global HQ in Coppell, TX."},
    {"id":"garda-wa","host":"garda-wa.videomanager.ex.motorolasolutions.com","name":"GardaWorld WA","city":"Seattle","state":"WA","country":"US","lat":47.6062,"lng":-122.3321,"conf":"inferred","note":"GardaWorld cash services — WA region; 404 on root (exists)."},
    {"id":"surreypd","host":"surreypd.videomanager.ex.motorolasolutions.com","name":"Surrey PD","city":"Surrey","state":"BC","country":"CA","lat":49.1044,"lng":-122.8011,"conf":"high","note":"Surrey Police Department, BC."},
    {"id":"metrovanc","host":"metrovanc.videomanager.exc.motorolasolutions.com","name":"Metro Vancouver","city":"Vancouver","state":"BC","country":"CA","lat":49.2609,"lng":-123.1140,"conf":"high","note":"Metro Vancouver regional district."},
    {"id":"hempd","host":"hempd.videomanager.ex.motorolasolutions.com","name":"Hempstead PD","city":"Hempstead","state":"NY","country":"US","lat":40.7062,"lng":-73.6187,"conf":"inferred","note":"Hempstead, NY (or Hempstead, TX — unconfirmed)."},
    {"id":"rockyview","host":"rockyview.videomanager.exc.motorolasolutions.com","name":"Rocky View","city":"Rocky View County","state":"AB","country":"CA","lat":51.2397,"lng":-114.0893,"conf":"high","note":"Rocky View County, Alberta."},
    {"id":"wheatland","host":"wheatland.videomanager.exc.motorolasolutions.com","name":"Wheatland","city":"Wheatland County","state":"AB","country":"CA","lat":51.0789,"lng":-113.4021,"conf":"inferred","note":"Wheatland County AB (or Wheatland WY — unconfirmed)."},
    {"id":"nanton","host":"nanton.videomanager.exc.motorolasolutions.com","name":"Nanton","city":"Nanton","state":"AB","country":"CA","lat":50.3502,"lng":-113.7712,"conf":"high","note":"Town of Nanton, Alberta."},
    {"id":"oceansprg","host":"oceansprg.videomanager.ex.motorolasolutions.com","name":"Ocean Springs","city":"Ocean Springs","state":"MS","country":"US","lat":30.4113,"lng":-88.8278,"conf":"high","note":"Ocean Springs, Mississippi."},
    {"id":"chrltwnps","host":"chrltwnps.videomanager.exc.motorolasolutions.com","name":"Charlottetown PS","city":"Charlottetown","state":"PE","country":"CA","lat":46.2382,"lng":-63.1311,"conf":"high","note":"Charlottetown Police Services, PEI."},
    {"id":"svpd","host":"svpd.videomanager.ex.motorolasolutions.com","name":"SVPD","city":"Sierra Vista","state":"AZ","country":"US","lat":31.5545,"lng":-110.3037,"conf":"inferred","note":"Sierra Vista PD, AZ (slug match)."},
    {"id":"uco","host":"uco.videomanager.ex.motorolasolutions.com","name":"UCO","city":"Edmond","state":"OK","country":"US","lat":35.6582,"lng":-97.4648,"conf":"inferred","note":"University of Central Oklahoma (Edmond, OK)."},
    {"id":"leeco","host":"leeco.videomanager.ex.motorolasolutions.com","name":"Lee County","city":"Fort Myers","state":"FL","country":"US","lat":26.5739,"lng":-81.9491,"conf":"inferred","note":"Lee County, FL (unconfirmed which Lee Co.)."},
    {"id":"georgecty","host":"georgecty.videomanager.ex.motorolasolutions.com","name":"Georgetown","city":"Georgetown","state":"TX","country":"US","lat":30.6333,"lng":-97.6778,"conf":"inferred","note":"Georgetown (TX/KY/ON — unconfirmed)."},
    {"id":"stealth","host":"stealth.videomanager.exc.motorolasolutions.com","name":"Stealth","city":"Dallas","state":"TX","country":"US","lat":32.7767,"lng":-96.7970,"conf":"inferred","note":"Stealth Monitoring (Dallas, TX)."},
    {"id":"bearenergy","host":"bearenergy.videomanager.ex.motorolasolutions.com","name":"Bear Energy","city":"Houston","state":"TX","country":"US","lat":29.7604,"lng":-95.3698,"conf":"inferred","note":"Bear Energy LLC (energy trading)."},
    {"id":"milrsvil","host":"milrsvil.videomanager.ex.motorolasolutions.com","name":"Milrsvil","city":"Millersville","state":"PA","country":"US","lat":40.0062,"lng":-76.3541,"conf":"inferred","note":"Millersville, PA (or Mills River NC — unconfirmed)."},
    {"id":"hardwick","host":"hardwick.videomanager.ex.motorolasolutions.com","name":"Hardwick","city":"Hardwick","state":"VT","country":"US","lat":44.5051,"lng":-72.3689,"conf":"inferred","note":"Hardwick, VT (or NJ/MA — unconfirmed)."},
    {"id":"utahcor-wa","host":"utahcor-wa.videomanager.ex.motorolasolutions.com","name":"UtahCoR WA","city":"Salt Lake City","state":"UT","country":"US","lat":40.7608,"lng":-111.8910,"conf":"low","note":"Slug ambiguous (Utah County / corrections WA). 404 on root."},
    {"id":"auxpd","host":"auxpd.videomanager.ex.motorolasolutions.com","name":"AUX PD","city":"","state":"","country":"","lat":null,"lng":null,"conf":"low","note":"Slug unresolved — not placed."},
    {"id":"bvista","host":"bvista.videomanager.ex.motorolasolutions.com","name":"B Vista","city":"","state":"","country":"","lat":null,"lng":null,"conf":"low","note":"Slug unresolved — not placed."},
    {"id":"chivid","host":"chivid.videomanager.exc.motorolasolutions.com","name":"ChiVid","city":"","state":"","country":"","lat":null,"lng":null,"conf":"low","note":"Slug unresolved — not placed."},
    {"id":"cria","host":"cria.videomanager.ex.motorolasolutions.com","name":"CRIA","city":"","state":"","country":"","lat":null,"lng":null,"conf":"low","note":"Slug unresolved — not placed."},
    {"id":"grtlkspa","host":"grtlkspa.videomanager.ex.motorolasolutions.com","name":"GrtLksPA","city":"","state":"","country":"","lat":null,"lng":null,"conf":"low","note":"Slug unresolved — not placed."},
    {"id":"irsol","host":"irsol.videomanager.ex.motorolasolutions.com","name":"IRSol","city":"","state":"","country":"","lat":null,"lng":null,"conf":"low","note":"Slug unresolved — not placed."}
  ],
  "regions": [
    {"id":"learn-fl","name":"LEARN — Florida region","host":"learnfl.vigilantsolutions.com","lat":28.5383,"lng":-81.3792,"kind":"azure","note":"Azure East US (20.141.88.92) — plate analytics cluster."},
    {"id":"learn-au","name":"LEARN — Australia region","host":"learnau.vigilantsolutions.com","lat":-33.8688,"lng":151.2093,"kind":"azure","note":"Azure Australia East (52.187.196.228)."},
    {"id":"elastic-gcp","name":"Elastic Kibana — GCP us-central1","host":"theia.motorolasolutions.com → seth-es-cluster-1.kb.us-central1.gcp.cloud.es.io","lat":41.2619,"lng":-95.8608,"kind":"cloud","note":"Elastic Cloud cluster (us-central1)."}
  ]
};
