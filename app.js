(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");
  const sheet = document.getElementById("sheet");
  const backBtn = document.getElementById("backBtn");
  const homeBtn = document.getElementById("homeBtn");
  const sheetTitle = document.getElementById("sheetTitle");
  const utilityPageContent = document.getElementById("utilityPageContent");
  const fleetMechanicsLanding = document.getElementById("fleetMechanicsLanding");
  const fleetMechanicRoster = document.getElementById("fleetMechanicRoster");
  const mechanicRosterIntro = document.getElementById("mechanicRosterIntro");
  const mechanicList = document.getElementById("mechanicList");
  const mechanicEmptyState = document.getElementById("mechanicEmptyState");
  const addMechanicBtn = document.getElementById("addMechanicBtn");
  const addMechanicPanel = document.getElementById("addMechanicPanel");
  const newMechanicName = document.getElementById("newMechanicName");
  const saveMechanicBtn = document.getElementById("saveMechanicBtn");
  const cancelMechanicBtn = document.getElementById("cancelMechanicBtn");
  const newMechanicPin = document.getElementById("newMechanicPin");
  const confirmMechanicPin = document.getElementById("confirmMechanicPin");
  const mechanicAddError = document.getElementById("mechanicAddError");
  const newMechanicIsLead = document.getElementById("newMechanicIsLead");
  const mechanicLockScreen = document.getElementById("mechanicLockScreen");
  const mechanicLockName = document.getElementById("mechanicLockName");
  const mechanicPinEntry = document.getElementById("mechanicPinEntry");
  const mechanicPinError = document.getElementById("mechanicPinError");
  const unlockMechanicBtn = document.getElementById("unlockMechanicBtn");
  const mechanicPersonalScreen = document.getElementById("mechanicPersonalScreen");
  const mechanicPersonalHeading = document.getElementById("mechanicPersonalHeading");
  const mechanicSettingsBtn = document.getElementById("mechanicSettingsBtn");
  const mechanicSettingsPanel = document.getElementById("mechanicSettingsPanel");
  const changeMechanicPin = document.getElementById("changeMechanicPin");
  const confirmChangeMechanicPin = document.getElementById("confirmChangeMechanicPin");
  const changePinError = document.getElementById("changePinError");
  const saveChangedPinBtn = document.getElementById("saveChangedPinBtn");
  const districtManagerRoster = document.getElementById("districtManagerRoster");
  const districtManagerRosterIntro = document.getElementById("districtManagerRosterIntro");
  const addDistrictManagerPanel = document.getElementById("addDistrictManagerPanel");
  const newDistrictManagerName = document.getElementById("newDistrictManagerName");
  const newDistrictManagerPassword = document.getElementById("newDistrictManagerPassword");
  const confirmDistrictManagerPassword = document.getElementById("confirmDistrictManagerPassword");
  const districtManagerAddError = document.getElementById("districtManagerAddError");
  const saveDistrictManagerBtn = document.getElementById("saveDistrictManagerBtn");
  const cancelDistrictManagerBtn = document.getElementById("cancelDistrictManagerBtn");
  const districtManagerEmptyState = document.getElementById("districtManagerEmptyState");
  const districtManagerList = document.getElementById("districtManagerList");
  const districtManagerLockScreen = document.getElementById("districtManagerLockScreen");
  const districtManagerLockName = document.getElementById("districtManagerLockName");
  const districtManagerPasswordEntry = document.getElementById("districtManagerPasswordEntry");
  const districtManagerPasswordError = document.getElementById("districtManagerPasswordError");
  const unlockDistrictManagerBtn = document.getElementById("unlockDistrictManagerBtn");
  const districtManagerPersonalScreen = document.getElementById("districtManagerPersonalScreen");
  const districtManagerPersonalHeading = document.getElementById("districtManagerPersonalHeading");
  const districtManagerSettingsPanel = document.getElementById("districtManagerSettingsPanel");
  const changeDistrictManagerPassword = document.getElementById("changeDistrictManagerPassword");
  const confirmChangeDistrictManagerPassword = document.getElementById("confirmChangeDistrictManagerPassword");
  const districtManagerSettingsError = document.getElementById("districtManagerSettingsError");
  const saveDistrictManagerPasswordBtn = document.getElementById("saveDistrictManagerPasswordBtn");
  const mechanicResetScreen=document.getElementById("mechanicResetScreen"), mechanicResetName=document.getElementById("mechanicResetName"), mechanicResetCode=document.getElementById("mechanicResetCode"), mechanicResetNewPin=document.getElementById("mechanicResetNewPin"), mechanicResetConfirmPin=document.getElementById("mechanicResetConfirmPin"), mechanicResetError=document.getElementById("mechanicResetError"), completeMechanicResetBtn=document.getElementById("completeMechanicResetBtn");
  const districtManagerResetScreen=document.getElementById("districtManagerResetScreen"), districtManagerResetName=document.getElementById("districtManagerResetName"), districtManagerResetCode=document.getElementById("districtManagerResetCode"), districtManagerResetNewPassword=document.getElementById("districtManagerResetNewPassword"), districtManagerResetConfirmPassword=document.getElementById("districtManagerResetConfirmPassword"), districtManagerResetError=document.getElementById("districtManagerResetError"), completeDistrictManagerResetBtn=document.getElementById("completeDistrictManagerResetBtn");
  const mechanicLandingContent=document.getElementById("mechanicLandingContent"),mechanicLandingName=document.getElementById("mechanicLandingName"),mechanicWelcome=document.getElementById("mechanicWelcome"),mechanicViewSheetsBtn=document.getElementById("mechanicViewSheetsBtn");
  const districtManagerLandingContent=document.getElementById("districtManagerLandingContent"),districtManagerLandingName=document.getElementById("districtManagerLandingName"),districtManagerWelcome=document.getElementById("districtManagerWelcome"),districtManagerViewSheetsBtn=document.getElementById("districtManagerViewSheetsBtn"),districtManagerSheetsView=document.getElementById("districtManagerSheetsView");
  const mechanicInboxLocation = document.getElementById("mechanicInboxLocation");
  const mechanicSubmissionEmpty = document.getElementById("mechanicSubmissionEmpty");
  const mechanicSubmissionList = document.getElementById("mechanicSubmissionList");
  const mechanicSubmissionDetail = document.getElementById("mechanicSubmissionDetail");
  const submissionDetailContent = document.getElementById("submissionDetailContent");
  const utilityPageHeading = document.getElementById("utilityPageHeading");
  const utilityPageText = document.getElementById("utilityPageText");
  const adminScreen=document.getElementById("adminScreen"), adminSetupView=document.getElementById("adminSetupView"), adminLockView=document.getElementById("adminLockView"), adminLandingView=document.getElementById("adminLandingView"), adminMechanicsView=document.getElementById("adminMechanicsView"), adminManagersView=document.getElementById("adminManagersView"), adminResetView=document.getElementById("adminResetView");
  const adminSetupPassword=document.getElementById("adminSetupPassword"), adminSetupConfirmPassword=document.getElementById("adminSetupConfirmPassword"), adminSetupError=document.getElementById("adminSetupError"), createAdminPasswordBtn=document.getElementById("createAdminPasswordBtn");
  const adminPasswordEntry=document.getElementById("adminPasswordEntry"), adminLockError=document.getElementById("adminLockError"), unlockAdminBtn=document.getElementById("unlockAdminBtn");
  const adminMasterUsersBtn=document.getElementById("adminMasterUsersBtn"), adminMasterUsersView=document.getElementById("adminMasterUsersView"), adminMasterUserList=document.getElementById("adminMasterUserList"), adminUserProfileView=document.getElementById("adminUserProfileView"), adminProfileName=document.getElementById("adminProfileName"), adminProfileRole=document.getElementById("adminProfileRole"), adminMechanicProfileFields=document.getElementById("adminMechanicProfileFields"), adminProfileLocation=document.getElementById("adminProfileLocation"), adminProfileIsLead=document.getElementById("adminProfileIsLead"), adminSaveMechanicProfileBtn=document.getElementById("adminSaveMechanicProfileBtn"), adminProfileStatus=document.getElementById("adminProfileStatus"), adminProfileResetBtn=document.getElementById("adminProfileResetBtn"), adminProfileDeleteBtn=document.getElementById("adminProfileDeleteBtn"), adminProfileError=document.getElementById("adminProfileError");
  let selectedAdminUser=null;
  const adminManageMechanicsBtn=document.getElementById("adminManageMechanicsBtn"), adminManageManagersBtn=document.getElementById("adminManageManagersBtn"), adminResetPasswordBtn=document.getElementById("adminResetPasswordBtn");
  const adminMechanicLocation=document.getElementById("adminMechanicLocation"), adminMechanicName=document.getElementById("adminMechanicName"), adminMechanicPin=document.getElementById("adminMechanicPin"), adminMechanicConfirmPin=document.getElementById("adminMechanicConfirmPin"), adminMechanicIsLead=document.getElementById("adminMechanicIsLead"), adminMechanicError=document.getElementById("adminMechanicError"), adminAddMechanicBtn=document.getElementById("adminAddMechanicBtn"), adminMechanicList=document.getElementById("adminMechanicList");
  const adminManagerName=document.getElementById("adminManagerName"), adminManagerPassword=document.getElementById("adminManagerPassword"), adminManagerConfirmPassword=document.getElementById("adminManagerConfirmPassword"), adminManagerError=document.getElementById("adminManagerError"), adminAddManagerBtn=document.getElementById("adminAddManagerBtn"), adminManagerList=document.getElementById("adminManagerList");
  const adminNewPassword=document.getElementById("adminNewPassword"), adminConfirmNewPassword=document.getElementById("adminConfirmNewPassword"), adminResetError=document.getElementById("adminResetError"), saveAdminPasswordBtn=document.getElementById("saveAdminPasswordBtn");
  const bottomNav = document.querySelector(".bottom-nav");
  const detailTitle = document.getElementById("detailTitle");
  const bigIcon = document.getElementById("bigIcon");
  const placeholderContent = document.getElementById("placeholderContent");
  const truckForm = document.getElementById("truckForm");
  const truckChecklist = document.getElementById("truckChecklist");
  const submitMessage = document.getElementById("submitMessage");
  const tractorForm = document.getElementById("tractorForm");
  const tractorChecklist = document.getElementById("tractorChecklist");
  const tractorSubmitMessage = document.getElementById("tractorSubmitMessage");
  const truckPhotos = document.getElementById("truckPhotos");
  const truckPhotoList = document.getElementById("truckPhotoList");
  const tractorPhotos = document.getElementById("tractorPhotos");
  const tractorPhotoList = document.getElementById("tractorPhotoList");
  const tmaForm = document.getElementById("tmaForm");
  const tmaChecklist = document.getElementById("tmaChecklist");
  const tmaSubmitMessage = document.getElementById("tmaSubmitMessage");
  const tmaPhotos = document.getElementById("tmaPhotos");
  const tmaPhotoList = document.getElementById("tmaPhotoList");
  const equipmentForm = document.getElementById("equipmentForm");
  const equipmentChecklist = document.getElementById("equipmentChecklist");
  const equipmentSubmitMessage = document.getElementById("equipmentSubmitMessage");
  const equipmentPhotos = document.getElementById("equipmentPhotos");
  const equipmentPhotoList = document.getElementById("equipmentPhotoList");
  const sweeperForm = document.getElementById("sweeperForm");
  const sweeperChecklist = document.getElementById("sweeperChecklist");
  const sweeperSubmitMessage = document.getElementById("sweeperSubmitMessage");
  const sweeperPhotos = document.getElementById("sweeperPhotos");
  const sweeperPhotoList = document.getElementById("sweeperPhotoList");
  const laneForm = document.getElementById("laneForm");
  const laneChecklist = document.getElementById("laneChecklist");
  const laneSubmitMessage = document.getElementById("laneSubmitMessage");
  const lanePhotos = document.getElementById("lanePhotos");
  const lanePhotoList = document.getElementById("lanePhotoList");
  const messageForm = document.getElementById("messageForm");
  const messageChecklist = document.getElementById("messageChecklist");
  const messageSubmitMessage = document.getElementById("messageSubmitMessage");
  const messagePhotos = document.getElementById("messagePhotos");
  const messagePhotoList = document.getElementById("messagePhotoList");
  const helpForm = document.getElementById("helpForm");
  const helpChecklist = document.getElementById("helpChecklist");
  const helpSubmitMessage = document.getElementById("helpSubmitMessage");
  const helpPhotos = document.getElementById("helpPhotos");
  const helpPhotoList = document.getElementById("helpPhotoList");

  const sheets = {
    tractor:["Tractor Checkout","🚜"],
    equipment:["Equipment Checkout","🏗️"],
    lane:["Lane Blade Inspection","🛣️"],
    help:["HELP Checkout","⚠️"],
    sweeper:["Sweeper Checkout","🚛"],
    truck:["Truck Checkout","🚚"],
    tma:["TMA Checkout","🚧"],
    message:["Message Board Checkout","💬"]
  };

  const checklist = [
    ["ENGINE COMPARTMENT",[
      "Engine oil level","Coolant level","Transmission fluid level","Power steering fluid level","Belt tension","Check for fluid leaks"
    ]],
    ["CAB INTERIOR",[
      "Mirrors",
      "Light controls - head, stop, turn, 4-way and clearance",
      "Horn, windshield wipers and washer",
      "Tollway radio operation",
      "Seat belts",
      "First aid kit",
      "Flares",
      "Backup camera(s)",
      "Road temp sensor"
    ]],
    ["SET PARKING BRAKE, START ENGINE AND CHECK THE FOLLOWING (STAY IN CAB)",[
      "Oil pressure and fuel gauge","Air pressure","Brake pedal travel","Emergency/parking brake","Steering operation","Air leaks (service brake off/applied)"
    ]],
    ["TRUCK EXTERIOR",[
      "Illumination of all lights - head, plow, marker, clearance, tail, mars, brake, 4-way, alternating, message sign and arrowboard operation",
      "Clean light lenses & reflectors",
      "Wheels, wheel check indicators and tires",
      "Hydraulic oil level",
      "Hydraulic tank cap",
      "Fuel tank cap",
      "Drain air tanks",
      "All mud flaps",
      "DEF level (if applicable)",
      "Check for oil leaks"
    ]],
    ["FRONT AND WING PLOW",[
      "Plow blades, bolts, plow pins, and mounting plow moldboard and frame for cracks",
      "Hydraulic hoses and connections",
      "Wing plow safety chain"
    ]],
    ["TRUCK SPREADER & DUMP BODY",[
      "Tailgate pins, latches, tailgate pins locked",
      "Tarp system condition",
      "Spinner and gate opening",
      "Hydraulic hoses and connections",
      "Spreader/spinner mounting (bolts/brackets)",
      "Conveyor chain tension",
      "Liquid tank mounting and condition",
      "Spreader controller operation"
    ]],
    ["TRAILER AND COUPLINGS (IF PULLING TRAILER)",[
      "Hitch operation and D-rings",
      "Wiring and connections",
      "Illumination of all lights",
      "Clean all light lenses and reflectors",
      "Safety chain-condition & mounting",
      "Trailer brake operation",
      "Trailer brake breakaway system"
    ]]
  ];


  const helpItems = [
    ["ENGINE COMPARTMENT",[
      "Engine oil level",
      "Coolant level, add only 50/50 mixture",
      "Transmission fluid level",
      "Power steering fluid level",
      "Belt tension",
      "Check for fluid leaks",
      "Windshield washer fluid both reservoirs",
      "Hydraulic oil level"
    ]],
    ["CAB INTERIOR",[
      "Oil pressure and fuel gauge",
      "Air pressure",
      "Light controls - head, stop, turn, 4-way and clearance",
      "Horn, windshield wipers and washer",
      "Mirrors",
      "Radio operation",
      "Brake pedal travel",
      "Emergency Brake"
    ]],
    ["TRUCK CONDITION",[
      "Seat belts",
      "Fire extinguisher",
      "First aid kit",
      "Flares",
      "Steering operation",
      "Air leaks (service brakes off/applied)",
      "Backup camera"
    ]],
    ["TRUCK EXTERIOR",[
      "Illumination of ALL lights, head, marker, clearance, tail, micro edge, brake, 4-way and arrow board lights",
      "Tires, wheels for loose lugs and flat tires",
      "Hydraulic oil level",
      "Hydraulic tank cap",
      "Fuel tank cap",
      "Drain air tanks",
      "Mud flaps"
    ]],
    ["MESSAGE BOARD",[
      "Verify operation"
    ]],
    ["WHEEL LIFT AND WINCH",[
      "PTO operation",
      "Winch operation",
      "Wheel lift operation (run unit)",
      "Any damage to wheel lift"
    ]],
    ["TOOLS AND EQUIPMENT",[
      "Fire extinguisher",
      "Hydraulic jack",
      "Hazmat pillows",
      "Gasoline",
      "Coolant",
      "Signs and cones",
      "Hand tools",
      "Air hose",
      "Broom and shovel",
      "Invoices",
      "First aid kit",
      "Lift safety chains and wheel straps",
      "AED (Green ready light blinking)",
      "Two AED PADS (not expired)",
      "One Battery",
      "One Complete AED Responder Kit",
      "Milwaukee 1/2” Impact Wrench"
    ]]
  ];

  const messageItems = [
    ["MESSAGE BOARD OPERATION",[
      "Computer Keyboard Operation",
      "Test Message Board Sign Function",
      "Sign Lift Mechanism",
      "Voltmeter Gauge",
      "Sign Hand Brake (5 lb. Pull Maximum)"
    ]],
    ["IF THE UNIT IS GOING TO BE MOVED, CHECK THE FOLLOWING",[
      "Tire Condition",
      "Wheel Lug Nuts",
      "Safety Chains",
      "Pintle Hitch and Draw Bar",
      "All Outrigger Jacks for Operation",
      "Enclosure Latch Operation",
      "Sign Enclosure/Cover Latches",
      "Tail Lights (all functions)"
    ]]
  ];

  const laneItems = [
    ["FLUID LEVELS",[
      "Hydraulic Oil Level"
    ]],
    ["VISUAL INSPECTION",[
      "Damaged, bent, missing or broken bolts and pins",
      "Inspect frame for damage rust or broken welds",
      "Cylinder and wing pivot pins free from damage",
      "Check Blade wear 1/8” Minimum",
      "Check Maul Board for damage",
      "Check for fraying or missing pieces",
      "Check hoses for leaks"
    ]],
    ["OPERATE BLADE AND CHECK",[
      "Verify Light is on/Unstowed",
      "Verify Light is off/Stowed",
      "Complete movement",
      "Hydraulic Leaks",
      "Camera Operation",
      "Wing Operation",
      "Assure blade will not deploy above 20 M.P.H."
    ]]
  ];

  const sweeperItems = [
    ["TRUCK ENGINE COMPARTMENT",[
      "Engine oil level","Coolant level, add only 50/50 mixture","Transmission fluid level",
      "Power steering fluid level","Serpentine belt","Check for leaks","Air cleaner"
    ]],
    ["REAR ENGINE M4's 770",[
      "Oil level","Coolant level","Serpentine belt","Check for leaks","Air cleaner","Sweeper console controls"
    ]],
    ["CAB INTERIOR",[
      "Oil pressure and fuel gauge","Air pressure","Light controls - head, stop, turn, 4-way and clearance",
      "Horn, windshield wipers and washers","Mirrors","Radio operation","Brake pedal travel",
      "Parking brake","Seat belts","First aid kit","Fire extinguisher","Flares","Backup camera"
    ]],
    ["TRUCK EXTERIOR",[
      "Illumination of all lights, head, clearance, tail, brake, 4-way, beacon, alternating, and arrowboard lights",
      "Clean light lenses and reflectors","Tires, wheels for loose lugs and flat tires","Fuel tank cap","Drain air tanks"
    ]],
    ["SWEEPING UNIT",[
      "Hydraulic oil level and cap","Hydraulic leaks","Gutter brooms","Water system operation",
      "Main broom operation and condition","Hopper and dump door operation","Automatic grease reservoir",
      "Elevator condition","Sweeper console controls","Outriggers (Stewart Amos)"
    ]]
  ];

  const equipmentItems = [
    ["FLUID LEVELS",["Engine Oil/All Engines","Transmission Oil","Hydraulic Oil","Coolant Level/All Engines","Brake Fluid"]],
    ["GREASING",["Automatic Greaser","Fittings Not Cover by Automatic Greaser"]],
    ["VISUAL INSPECTION",["Air Filter Service Indicator","Air Cleaner Connections all Engines","Belt Tension all Engines","Wheel Lugs & Tires","Any signs of Leaks","Undercarriage","Track Adjustment & Master Pin","Is Unit Clean","Seat Belts"]],
    ["START ENGINE AND CHECK",["Gauges & Warning Lights","Horn","Brakes","Lights","Steering & Loader Functions","Back Up Alarm","Mower Operation","Clutch Operation","Charging System (Volt Meter)","Backup Camera"]]
  ];

  const tmaItems = [
    ["FRAME, SUPPORT ASSY., AND CARTRIDGE ASSEMBLIES",[
      "Frame free of damage.",
      "Frame bolts tight and check all welds for cracks.",
      "All 4 mounting pins secured w/ring cotter pins (truck mounted).",
      "Hitch, stabilizers and safety chains attached to truck properly (trailer mounted).",
      "Wheels and tires (trailer mounted).",
      "Ride height correct (truck mounted).",
      "Tension cables for stretching or damage.",
      "Cartridge assemblies for mounting and damage."
    ]],
    ["ELECTRICAL",[
      "Connection and condition of light plugs.",
      "Condition of expose wiring.",
      "Connection and condition of power cable.",
      "Verify all lights for proper operation.",
      "Check breakaway switch."
    ]],
    ["ARROW BOARD",[
      "Mounting and wiring secured properly to truck.",
      "All display function properly."
    ]]
  ];

  const tractorItems = [
    ["ENGINE COMPARTMENT",[
      "Engine oil level","Coolant level","Check radiator is clean/free of debris",
      "Transmission fluid level","Belt tension","Check for fluid leaks","Fuel tank cap"
    ]],
    ["CAB INTERIOR",[
      "Windows / Mirrors","Light controls - head, stop, turn, tail and warning",
      "Horn, windshield wipers and washer","Seat belts","A/C, heater operation",
      "Door latches and seals","4-wheel drive operation"
    ]],
    ["SET PARKING BRAKE, START ENGINE AND CHECK THE FOLLOWING (STAY IN CAB)",[
      "Oil pressure and fuel gauge","Brake pedal travel","Emergency/parking brake","Steering operation"
    ]],
    ["TRACTOR EXTERIOR",[
      "Illumination of all lights: head, work, tail, brake, and warning",
      "Clean light lenses & reflectors","Tires, wheels for loose lugs and flat tires and debris",
      "Hydraulic oil level","Hydraulic tank cap"
    ]],
    ["BATWING AND MOTT/FLAIL MOWERS",[
      "Hydraulic hoses and fittings","PTO drive shaft / 3 point hitch",
      "Safety chain-condition & mounting","Check blades, missing or bent",
      "Check tires, flats/wheel bearings","Properly greased daily","Roller bearings",
      "Mower operation","Drawbar, pin, and keeper",
      "All rotating shaft covers intact and in place","All rubber flaps and chains in place",
      "Drive belt(s), condition and tension","Gear box leakage?"
    ]]
  ];

  function makeChecklist(container, data){
    container.innerHTML = "";
    data.forEach(([section, items], sectionIndex) => {
      const wrap = document.createElement("section");
      wrap.className = "check-section";
      const h = document.createElement("h2");
      h.textContent = section;
      wrap.appendChild(h);

      items.forEach((item, itemIndex) => {
        const row = document.createElement("div");
        row.className = "check-row";
        row.dataset.key = `${sectionIndex}-${itemIndex}`;

        const text = document.createElement("div");
        text.className = "check-text";
        text.textContent = item;

        const group = document.createElement("div");
        group.className = "status-group";

        ["OK","DEFECT","N/A"].forEach(value => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "status-btn";
          btn.dataset.value = value;
          btn.textContent = value;
          btn.addEventListener("click", () => {
            group.querySelectorAll(".status-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            row.dataset.status = value;
            const note = row.querySelector(".defect-note");
            note.classList.toggle("visible", value === "DEFECT");
            note.required = value === "DEFECT";
            if (value !== "DEFECT") note.value = "";
          });
          group.appendChild(btn);
        });

        const note = document.createElement("textarea");
        note.className = "defect-note";
        note.rows = 2;
        note.placeholder = "Describe the defect / needed repair";

        row.append(text, group, note);
        wrap.appendChild(row);
      });

      container.appendChild(wrap);
    });
  }

  function showPhotoNames(input, list){
    list.innerHTML = "";
    [...input.files].forEach(file => {
      const item = document.createElement("div");
      item.className = "photo-chip";
      item.textContent = file.name;
      list.appendChild(item);
    });
  }

  function buildChecklist(){
    truckChecklist.innerHTML = "";
    checklist.forEach(([section, items], sectionIndex) => {
      const wrap = document.createElement("section");
      wrap.className = "check-section";
      const h = document.createElement("h2");
      h.textContent = section;
      wrap.appendChild(h);

      items.forEach((item, itemIndex) => {
        const row = document.createElement("div");
        row.className = "check-row";
        row.dataset.key = `${sectionIndex}-${itemIndex}`;

        const text = document.createElement("div");
        text.className = "check-text";
        text.textContent = item;

        const group = document.createElement("div");
        group.className = "status-group";

        ["OK","DEFECT","N/A"].forEach(value => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "status-btn";
          btn.dataset.value = value;
          btn.textContent = value;
          btn.addEventListener("click", () => {
            group.querySelectorAll(".status-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            row.dataset.status = value;
            const note = row.querySelector(".defect-note");
            note.classList.toggle("visible", value === "DEFECT");
            note.required = value === "DEFECT";
            if (value !== "DEFECT") note.value = "";
          });
          group.appendChild(btn);
        });

        const note = document.createElement("textarea");
        note.className = "defect-note";
        note.rows = 2;
        note.placeholder = "Describe the defect / needed repair";

        row.append(text, group, note);
        wrap.appendChild(row);
      });

      truckChecklist.appendChild(wrap);
    });
  }

  let currentFleetLocation = null;
  let selectedMechanic = null;
  let currentDetailView = "home";

  let activeMechanicPin = "";
  let selectedDistrictManager = null;
  let activeDistrictManagerPassword = "";
  let activeAdminPassword = "";

  function backendConfig(){
    const cfg = window.TOLLWAY_BACKEND || {};
    const url = String(cfg.SUPABASE_URL || "").replace(/\/+$/,"");
    const key = String(cfg.SUPABASE_ANON_KEY || "");
    const configured =
      url.startsWith("https://") &&
      !url.includes("PASTE_") &&
      key &&
      !key.includes("PASTE_");
    return {url,key,configured};
  }

  async function backendRpc(functionName, payload){
    const cfg = backendConfig();
    if(!cfg.configured){
      throw new Error("Shared online database is not configured yet. Add the Supabase project URL and anon key to config.js.");
    }

    const response = await fetch(`${cfg.url}/rest/v1/rpc/${functionName}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "apikey":cfg.key,
        "Authorization":`Bearer ${cfg.key}`
      },
      body:JSON.stringify(payload || {})
    });

    let data = null;
    const text = await response.text();
    if(text){
      try{ data = JSON.parse(text); }
      catch{ data = text; }
    }

    if(!response.ok){
      const message =
        (data && typeof data === "object" && (data.message || data.hint || data.details)) ||
        (typeof data === "string" && data) ||
        `Database request failed (${response.status})`;
      throw new Error(message);
    }
    return data;
  }

  function titleFromForm(form){
    if(form === truckForm) return "Truck Checkout";
    if(form === tractorForm) return "Tractor Checkout";
    if(form === tmaForm) return "TMA Checkout";
    if(form === equipmentForm) return "Equipment Checkout";
    if(form === sweeperForm) return "Sweeper Checkout";
    if(form === laneForm) return "Lane Blade Inspection";
    return "Checkout Sheet";
  }

  function readFormLocation(form){
    const locationField = [...form.querySelectorAll("select")].find(s =>
      /location/i.test(s.name || "") || /location/i.test((s.closest("label")?.textContent || ""))
    );
    return locationField ? locationField.value : "";
  }

  function formSnapshot(form){
    const details = [];
    form.querySelectorAll("input, select, textarea").forEach(el=>{
      if(el.type === "file" || el.type === "button" || el.type === "submit") return;
      if(el.classList.contains("defect-note") && !el.value.trim()) return;
      const label = el.closest("label");
      let key = label ? label.childNodes[0]?.textContent?.trim() : "";
      if(!key) key = el.name || el.id || "Field";
      let value = el.value;
      if(el.type === "checkbox" || el.type === "radio") value = el.checked ? "Yes" : "No";
      if(value !== "") details.push({key,value});
    });

    form.querySelectorAll(".check-row").forEach(row=>{
      const itemText = row.querySelector(".check-item-text")?.textContent?.trim()
        || row.querySelector(".check-label")?.textContent?.trim()
        || row.firstElementChild?.textContent?.trim()
        || "Inspection Item";
      if(row.dataset.status){
        const note = row.querySelector(".defect-note")?.value?.trim() || "";
        details.push({key:itemText, value: note ? `${row.dataset.status} — ${note}` : row.dataset.status});
      }
    });
    return details;
  }

  async function routeSubmissionToLocation(form){
    const location = readFormLocation(form);
    if(!location) throw new Error("Select a location before submitting.");

    return backendRpc("submit_checkout_sheet",{
      p_location: location,
      p_form_type: titleFromForm(form),
      p_details: formSnapshot(form)
    });
  }

  const LOCAL_MECHANICS_KEY = "tollway_mock_mechanics_v39";
  const LOCAL_MANAGERS_KEY = "tollway_mock_managers_v39";

  function loadLocalProfiles(key){
    try{
      const value=JSON.parse(localStorage.getItem(key)||"[]");
      return Array.isArray(value)?value:[];
    }catch(e){ return []; }
  }

  function saveLocalProfiles(key,rows){
    localStorage.setItem(key,JSON.stringify(rows));
  }

  function localId(){
    return "local-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9);
  }

  function localMechanics(){
    return loadLocalProfiles(LOCAL_MECHANICS_KEY);
  }

  function localManagers(){
    return loadLocalProfiles(LOCAL_MANAGERS_KEY);
  }

  async function getMechanics(location){
    if(!backendIsConfigured()){
      return localMechanics()
        .filter(m=>m.location===location)
        .sort((a,b)=>(Number(b.is_lead)-Number(a.is_lead))||a.name.localeCompare(b.name));
    }
    const rows = await backendRpc("list_fleet_mechanics",{p_location:location});
    return Array.isArray(rows) ? rows : [];
  }

  async function createMechanic(location,name,pin,isLead){
    if(!backendIsConfigured()){
      const rows=localMechanics();
      if(rows.some(m=>m.location===location && m.name.trim().toLowerCase()===name.trim().toLowerCase())) throw new Error("A mechanic with this name already exists at this location.");
      if(isLead && rows.some(m=>m.location===location && m.is_lead)) throw new Error("This location already has a Lead Mechanic.");
      const mechanic={id:localId(),location,name:name.trim(),pin,is_lead:Boolean(isLead),reset_required:false,created_at:new Date().toISOString()};
      rows.push(mechanic); saveLocalProfiles(LOCAL_MECHANICS_KEY,rows); return mechanic;
    }
    return backendRpc("create_fleet_mechanic",{p_location:location,p_name:name,p_pin:pin,p_is_lead:Boolean(isLead)});
  }

  async function verifyMechanicPin(mechanicId,pin){
    if(!backendIsConfigured()){
      const m=localMechanics().find(x=>x.id===mechanicId);
      return Boolean(m && !m.reset_required && m.pin===pin);
    }
    return backendRpc("verify_fleet_mechanic_pin",{p_mechanic_id:mechanicId,p_pin:pin});
  }

  async function getMechanicSubmissions(mechanicId,pin){
    if(!backendIsConfigured()) return [];
    const rows = await backendRpc("get_mechanic_submissions",{p_mechanic_id:mechanicId,p_pin:pin});
    return Array.isArray(rows) ? rows : [];
  }

  async function signOffSubmission(mechanicId,pin,submissionId){
    if(!backendIsConfigured()) throw new Error("Shared submission testing requires Supabase.");
    return backendRpc("sign_off_checkout_sheet",{p_mechanic_id:mechanicId,p_pin:pin,p_submission_id:submissionId});
  }

  async function changeMechanicPinOnline(mechanicId,currentPin,newPin){
    if(!backendIsConfigured()){
      const rows=localMechanics(), i=rows.findIndex(x=>x.id===mechanicId);
      if(i<0) throw new Error("Mechanic not found.");
      if(rows[i].pin!==currentPin) throw new Error("Incorrect current PIN.");
      rows[i].pin=newPin; rows[i].reset_required=false; saveLocalProfiles(LOCAL_MECHANICS_KEY,rows); return true;
    }
    return backendRpc("change_fleet_mechanic_pin",{p_mechanic_id:mechanicId,p_current_pin:currentPin,p_new_pin:newPin});
  }

  async function deleteMechanicOnline(mechanicId,currentPin){
    if(!backendIsConfigured()){
      const rows=localMechanics(), m=rows.find(x=>x.id===mechanicId);
      if(!m) throw new Error("Mechanic not found.");
      if(m.pin!==currentPin) throw new Error("Incorrect current PIN.");
      saveLocalProfiles(LOCAL_MECHANICS_KEY,rows.filter(x=>x.id!==mechanicId)); return true;
    }
    return backendRpc("delete_fleet_mechanic",{p_mechanic_id:mechanicId,p_current_pin:currentPin});
  }

  async function adminDeleteMechanic(mechanicId){
    if(!backendIsConfigured()){
      const rows=localMechanics();
      if(!rows.some(x=>x.id===mechanicId)) throw new Error("Mechanic not found.");
      saveLocalProfiles(LOCAL_MECHANICS_KEY,rows.filter(x=>x.id!==mechanicId));
      localStorage.removeItem(localResetKey("mechanic",mechanicId));
      return true;
    }
    return backendRpc("admin_delete_fleet_mechanic",{p_admin_password:activeAdminPassword,p_mechanic_id:mechanicId});
  }

  async function getDistrictManagers(){
    if(!backendIsConfigured()) return localManagers().sort((a,b)=>a.name.localeCompare(b.name));
    const rows = await backendRpc("list_fleet_district_managers",{});
    return Array.isArray(rows) ? rows : [];
  }

  async function createDistrictManager(name,password){
    if(!backendIsConfigured()){
      const rows=localManagers();
      if(rows.some(m=>m.name.trim().toLowerCase()===name.trim().toLowerCase())) throw new Error("A district manager with this name already exists.");
      const manager={id:localId(),name:name.trim(),password,reset_required:false,created_at:new Date().toISOString()};
      rows.push(manager); saveLocalProfiles(LOCAL_MANAGERS_KEY,rows); return manager;
    }
    return backendRpc("create_fleet_district_manager",{p_name:name,p_password:password});
  }

  async function verifyDistrictManagerPassword(managerId,password){
    if(!backendIsConfigured()){
      const m=localManagers().find(x=>x.id===managerId);
      return Boolean(m && !m.reset_required && m.password===password);
    }
    return backendRpc("verify_fleet_district_manager_password",{p_manager_id:managerId,p_password:password});
  }

  async function updateDistrictManagerName(managerId,password,newName){
    if(!backendIsConfigured()) throw new Error("District Manager names are managed by Admin.");
    return backendRpc("update_fleet_district_manager_name",{p_manager_id:managerId,p_password:password,p_new_name:newName});
  }

  async function changeDistrictManagerPasswordOnline(managerId,currentPassword,newPassword){
    if(!backendIsConfigured()){
      const rows=localManagers(), i=rows.findIndex(x=>x.id===managerId);
      if(i<0) throw new Error("District Manager not found.");
      if(rows[i].password!==currentPassword) throw new Error("Incorrect current password.");
      rows[i].password=newPassword; rows[i].reset_required=false; saveLocalProfiles(LOCAL_MANAGERS_KEY,rows); return true;
    }
    return backendRpc("change_fleet_district_manager_password",{p_manager_id:managerId,p_current_password:currentPassword,p_new_password:newPassword});
  }

  async function deleteDistrictManagerOnline(managerId,password){
    if(!backendIsConfigured()){
      const rows=localManagers(), m=rows.find(x=>x.id===managerId);
      if(!m) throw new Error("District Manager not found.");
      if(m.password!==password) throw new Error("Incorrect current password.");
      saveLocalProfiles(LOCAL_MANAGERS_KEY,rows.filter(x=>x.id!==managerId)); return true;
    }
    return backendRpc("delete_fleet_district_manager",{p_manager_id:managerId,p_password:password});
  }

  async function adminDeleteDistrictManager(managerId){
    if(!backendIsConfigured()){
      const rows=localManagers();
      if(!rows.some(x=>x.id===managerId)) throw new Error("District Manager not found.");
      saveLocalProfiles(LOCAL_MANAGERS_KEY,rows.filter(x=>x.id!==managerId));
      localStorage.removeItem(localResetKey("manager",managerId));
      return true;
    }
    return backendRpc("admin_delete_fleet_district_manager",{p_admin_password:activeAdminPassword,p_manager_id:managerId});
  }

  async function adminUpdateMechanicAssignment(mechanicId,location,isLead){
    if(!backendIsConfigured()){
      const rows=localMechanics(), i=rows.findIndex(x=>x.id===mechanicId);
      if(i<0) throw new Error("Mechanic not found.");
      if(isLead && rows.some(x=>x.id!==mechanicId && x.location===location && x.is_lead)) throw new Error("This location already has a Lead Mechanic.");
      rows[i].location=location; rows[i].is_lead=Boolean(isLead); saveLocalProfiles(LOCAL_MECHANICS_KEY,rows); return true;
    }
    return backendRpc("admin_update_fleet_mechanic_assignment",{p_admin_password:activeAdminPassword,p_mechanic_id:mechanicId,p_location:location,p_is_lead:Boolean(isLead)});
  }

  async function renderMechanicRoster(){
    if(!currentFleetLocation) return;
    mechanicList.innerHTML = "";
    mechanicEmptyState.classList.add("hidden");

    try{
      const mechanics = await getMechanics(currentFleetLocation);
      mechanicEmptyState.classList.toggle("hidden", mechanics.length > 0);

      mechanics.forEach(mechanic=>{
        const card = document.createElement("button");
        card.type = "button";
        card.className = "mechanic-card";
        const nameSpan = document.createElement("span");
        nameSpan.textContent = mechanic.name;
        card.appendChild(nameSpan);
        if(mechanic.is_lead){
          const badge = document.createElement("span");
          badge.className = "lead-badge";
          badge.textContent = "Lead Mechanic";
          card.appendChild(badge);
        }
        card.addEventListener("click",()=>showMechanicLock(mechanic));
        mechanicList.appendChild(card);
      });
    }catch(err){
      mechanicEmptyState.classList.remove("hidden");
      mechanicEmptyState.textContent = err.message;
    }
  }

  async function renderSubmissionInbox(){
    if(!currentFleetLocation || !selectedMechanic || !activeMechanicPin) return;
    mechanicSubmissionList.innerHTML = "";
    mechanicSubmissionEmpty.classList.add("hidden");
    mechanicInboxLocation.textContent = `Submitted sheets for ${currentFleetLocation}`;

    try{
      const rows = await getMechanicSubmissions(selectedMechanic.id,activeMechanicPin);
      const items = rows.map(row=>({
        id:row.id,
        type:row.form_type,
        location:row.location,
        submittedAt:row.submitted_at,
        details:Array.isArray(row.details) ? row.details : [],
        reviewStatus:row.review_status || "Pending",
        reviewedByName:row.reviewed_by_name || "",
        reviewedAt:row.reviewed_at || null
      }));

      mechanicSubmissionEmpty.classList.toggle("hidden", items.length > 0);

      items.forEach(item=>{
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "submission-card";
        const dt = new Date(item.submittedAt);
        const stamp = isNaN(dt) ? "" : dt.toLocaleString();
        const inspectedBy = item.details?.find(d=>/inspected by|name/i.test(d.key))?.value || "";
        btn.innerHTML = `<span class="submission-type"></span><span class="submission-meta"></span><span class="review-status"></span>`;
        btn.querySelector(".submission-type").textContent = item.type;
        btn.querySelector(".submission-meta").textContent =
          [inspectedBy, stamp].filter(Boolean).join(" • ");
        btn.querySelector(".review-status").textContent =
          item.reviewStatus === "Reviewed" ? "Reviewed" : "Pending Review";
        btn.addEventListener("click",()=>showSubmissionDetail(item));
        mechanicSubmissionList.appendChild(btn);
      });
    }catch(err){
      mechanicSubmissionEmpty.classList.remove("hidden");
      mechanicSubmissionEmpty.textContent = err.message;
    }
  }

  function showSubmissionDetail(item){
    currentDetailView = "submissionDetail";
    mechanicSettingsBtn.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.remove("hidden");
    sheetTitle.textContent = item.type;

    const card = document.createElement("div");
    card.className = "submission-detail-card";
    const title = document.createElement("h2");
    title.textContent = item.type;
    card.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "detail-meta";
    const dt = new Date(item.submittedAt);
    meta.textContent = `${item.location} • ${isNaN(dt) ? "" : dt.toLocaleString()}`;
    card.appendChild(meta);

    const section = document.createElement("div");
    section.className = "submission-detail-section";
    (item.details || []).forEach(d=>{
      const row = document.createElement("div");
      row.className = "submission-detail-row";
      const k = document.createElement("strong");
      k.textContent = d.key;
      const v = document.createElement("span");
      v.textContent = d.value;
      row.append(k,v);
      section.appendChild(row);
    });
    card.appendChild(section);

    if(item.reviewStatus === "Reviewed"){
      const reviewed = document.createElement("div");
      reviewed.className = "review-complete";
      const who = item.reviewedByName || "Lead Mechanic";
      const when = item.reviewedAt ? new Date(item.reviewedAt).toLocaleString() : "";
      reviewed.innerHTML = "<strong>Review Signed Off</strong>";
      const detail = document.createElement("span");
      detail.textContent = [who, when].filter(Boolean).join(" • ");
      reviewed.appendChild(detail);
      card.appendChild(reviewed);
    } else {
      const reviewPanel = document.createElement("div");
      reviewPanel.className = "review-panel";

      const note = document.createElement("p");
      note.className = "review-note";

      if(selectedMechanic?.is_lead){
        note.textContent = "This checkout sheet is waiting for lead mechanic sign-off.";
        const signBtn = document.createElement("button");
        signBtn.type = "button";
        signBtn.className = "submit-btn";
        signBtn.textContent = "Sign Off Review";
        signBtn.addEventListener("click",async()=>{
          signBtn.disabled = true;
          try{
            await signOffSubmission(selectedMechanic.id,activeMechanicPin,item.id);
            item.reviewStatus = "Reviewed";
            item.reviewedByName = selectedMechanic.name;
            item.reviewedAt = new Date().toISOString();
            showSubmissionDetail(item);
          }catch(err){
            alert(err.message);
            signBtn.disabled = false;
          }
        });
        reviewPanel.append(note,signBtn);
      }else{
        note.textContent = "Pending lead mechanic sign-off. Only the lead mechanic for this location can complete the review.";
        reviewPanel.appendChild(note);
      }
      card.appendChild(reviewPanel);
    }

    submissionDetailContent.innerHTML = "";
    submissionDetailContent.appendChild(card);
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  const LOCAL_ADMIN_PASSWORD_KEY = "tollway_admin_password_v34";

  function backendIsConfigured(){
    const cfg = backendConfig();
    return Boolean(cfg && cfg.configured);
  }

  function localAdminPasswordExists(){
    return Boolean(localStorage.getItem(LOCAL_ADMIN_PASSWORD_KEY));
  }

  function createLocalAdminPassword(password){
    if(localAdminPasswordExists()) throw new Error("Admin password has already been created.");
    localStorage.setItem(LOCAL_ADMIN_PASSWORD_KEY,password);
    return true;
  }

  function verifyLocalAdminPassword(password){
    return localStorage.getItem(LOCAL_ADMIN_PASSWORD_KEY) === password;
  }

  function resetLocalAdminPassword(currentPassword,newPassword){
    if(!verifyLocalAdminPassword(currentPassword)) throw new Error("Incorrect Admin password.");
    localStorage.setItem(LOCAL_ADMIN_PASSWORD_KEY,newPassword);
    return true;
  }

  function localResetKey(type,id){ return `tollway_${type}_reset_${id}`; }
  function createLocalReset(type,id){
    const code=String(Math.floor(100000+Math.random()*900000));
    localStorage.setItem(localResetKey(type,id),code);
    return code;
  }
  function hasLocalReset(type,id){ return Boolean(localStorage.getItem(localResetKey(type,id))); }
  function completeLocalReset(type,id,code,newCredential){
    if(localStorage.getItem(localResetKey(type,id))!==code) throw new Error("Incorrect temporary reset code.");
    if(type==="mechanic"){
      const rows=localMechanics(), i=rows.findIndex(x=>x.id===id);
      if(i<0) throw new Error("Mechanic not found.");
      rows[i].pin=newCredential; rows[i].reset_required=false; saveLocalProfiles(LOCAL_MECHANICS_KEY,rows);
    }else{
      const rows=localManagers(), i=rows.findIndex(x=>x.id===id);
      if(i<0) throw new Error("District Manager not found.");
      rows[i].password=newCredential; rows[i].reset_required=false; saveLocalProfiles(LOCAL_MANAGERS_KEY,rows);
    }
    localStorage.removeItem(localResetKey(type,id));
    return true;
  }

  function hideAdminViews(){
    adminScreen.classList.add("hidden");
    [adminSetupView,adminLockView,adminLandingView,adminMasterUsersView,adminUserProfileView,adminMechanicsView,adminManagersView,adminResetView].forEach(v=>v.classList.add("hidden"));
  }

  function showAdminSubView(view,title){
    [adminSetupView,adminLockView,adminLandingView,adminMasterUsersView,adminUserProfileView,adminMechanicsView,adminManagersView,adminResetView].forEach(v=>v.classList.add("hidden"));
    adminScreen.classList.remove("hidden"); view.classList.remove("hidden"); sheetTitle.textContent=title; addMechanicBtn.classList.add("hidden"); mechanicSettingsBtn.classList.add("hidden"); bottomNav.classList.add("hidden"); window.scrollTo(0,0);
  }

  async function showAdmin(){
    currentDetailView="admin";
    hideDistrictManagerViews();
    fleetMechanicsLanding.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    utilityPageContent.classList.add("hidden");
    placeholderContent.classList.add("hidden");
    activeAdminPassword="";

    if(!backendIsConfigured()){
      if(localAdminPasswordExists()){
        showAdminSubView(adminLockView,"Admin");
        adminPasswordEntry.value="";
      }else{
        showAdminSubView(adminSetupView,"Admin Setup");
        adminSetupError.classList.add("hidden");
      }
      return;
    }

    try{
      const exists=await backendRpc("admin_password_exists",{});
      if(exists===true){
        showAdminSubView(adminLockView,"Admin");
        adminPasswordEntry.value="";
      }else{
        showAdminSubView(adminSetupView,"Admin Setup");
      }
    }catch(e){
      showAdminSubView(adminSetupView,"Admin Setup");
      adminSetupError.textContent=e.message;
      adminSetupError.classList.remove("hidden");
    }
  }

  async function renderAdminMechanics(){
    adminMechanicList.innerHTML=""; const loc=adminMechanicLocation.value; if(!loc)return;
    try{
      const rows=await getMechanics(loc);
      rows.forEach(m=>{
        const row=document.createElement("div"); row.className="admin-profile-row";
        const name=document.createElement("span"); name.textContent=m.name+(m.is_lead?" — Lead Mechanic":"")+(m.reset_required?" — Reset Required":"");
        const actions=document.createElement("div"); actions.className="admin-profile-actions";
        const reset=document.createElement("button"); reset.type="button"; reset.className="secondary-btn"; reset.textContent="Reset PIN";
        reset.onclick=async()=>{
          if(!confirm(`Reset the PIN for ${m.name}? Their current PIN will stop working.`))return;
          try{
            const code=backendIsConfigured()
              ? await backendRpc("admin_reset_fleet_mechanic_pin",{p_admin_password:activeAdminPassword,p_mechanic_id:m.id})
              : (()=>{ const code=createLocalReset("mechanic",m.id); const rows=localMechanics(); const i=rows.findIndex(x=>x.id===m.id); if(i>=0){rows[i].reset_required=true;saveLocalProfiles(LOCAL_MECHANICS_KEY,rows);} return code; })();
            alert(`Temporary reset code for ${m.name}: ${code}\\n\\nGive this code to the mechanic. They will be required to create a new PIN.`);
            renderAdminMechanics();
          }catch(e){alert(e.message);}
        };
        const del=document.createElement("button"); del.type="button"; del.className="danger-btn"; del.textContent="Delete";
        del.onclick=async()=>{if(!confirm(`Delete ${m.name}?`))return;await adminDeleteMechanic(m.id);renderAdminMechanics();};
        actions.append(reset,del); row.append(name,actions); adminMechanicList.appendChild(row);
      });
    }catch(e){adminMechanicError.textContent=e.message;adminMechanicError.classList.remove("hidden");}
  }

  async function renderAdminManagers(){
    adminManagerList.innerHTML="";
    try{
      const rows=await getDistrictManagers();
      rows.forEach(m=>{
        const row=document.createElement("div"); row.className="admin-profile-row";
        const name=document.createElement("span"); name.textContent=m.name+(m.reset_required?" — Reset Required":"");
        const actions=document.createElement("div"); actions.className="admin-profile-actions";
        const reset=document.createElement("button"); reset.type="button"; reset.className="secondary-btn"; reset.textContent="Reset Password";
        reset.onclick=async()=>{
          if(!confirm(`Reset the password for ${m.name}? Their current password will stop working.`))return;
          try{
            const code=backendIsConfigured()
              ? await backendRpc("admin_reset_fleet_district_manager_password",{p_admin_password:activeAdminPassword,p_manager_id:m.id})
              : (()=>{ const code=createLocalReset("manager",m.id); const rows=localManagers(); const i=rows.findIndex(x=>x.id===m.id); if(i>=0){rows[i].reset_required=true;saveLocalProfiles(LOCAL_MANAGERS_KEY,rows);} return code; })();
            alert(`Temporary reset code for ${m.name}: ${code}\\n\\nGive this code to the district manager. They will be required to create a new password.`);
            renderAdminManagers();
          }catch(e){alert(e.message);}
        };
        const del=document.createElement("button"); del.type="button"; del.className="danger-btn"; del.textContent="Delete";
        del.onclick=async()=>{if(!confirm(`Delete ${m.name}?`))return;await adminDeleteDistrictManager(m.id);renderAdminManagers();};
        actions.append(reset,del); row.append(name,actions); adminManagerList.appendChild(row);
      });
    }catch(e){adminManagerError.textContent=e.message;adminManagerError.classList.remove("hidden");}
  }

  async function getAllAdminMechanics(){
    if(!backendIsConfigured()) return localMechanics();
    const all=[]; for(const loc of ["M1","M2","M3","M4","M5","M6","M7","M8","M11","M12","M14","M16","CAG","E02","E06","Sign Shop","Road Electric"]){ const rows=await getMechanics(loc); all.push(...rows); } return all;
  }
  async function renderAdminMasterUsers(){
    adminMasterUserList.innerHTML="";
    try{
      const mechanics=await getAllAdminMechanics(), managers=await getDistrictManagers();
      const users=[
        ...mechanics.map(x=>({...x,_type:"mechanic"})),
        ...managers.map(x=>({...x,_type:"manager"}))
      ].sort((a,b)=>a.name.localeCompare(b.name));
      if(!users.length){adminMasterUserList.innerHTML='<div class="mechanic-empty-state">No user profiles have been created yet.</div>';return;}
      users.forEach(u=>{
        const btn=document.createElement("button"); btn.type="button"; btn.className="master-user-card";
        const role=u._type==="mechanic" ? `Fleet Mechanic • ${u.location}${u.is_lead?" • Lead Mechanic":""}` : "Fleet District Manager";
        btn.innerHTML=`<span class="master-user-name"></span><span class="master-user-meta"></span><span class="master-user-arrow">›</span>`;
        btn.querySelector(".master-user-name").textContent=u.name;
        btn.querySelector(".master-user-meta").textContent=role+(u.reset_required?" • Reset Required":"");
        btn.onclick=()=>showAdminUserProfile(u);
        adminMasterUserList.appendChild(btn);
      });
    }catch(e){adminMasterUserList.innerHTML=`<p class="form-error">${e.message}</p>`;}
  }
  function showAdminUserProfile(user){
    selectedAdminUser=user; currentDetailView="adminUserProfile";
    showAdminSubView(adminUserProfileView,"Admin Profile Controls");
    adminProfileName.textContent=user.name;
    adminProfileRole.textContent=user._type==="mechanic"?"Fleet Mechanic":"Fleet District Manager";
    adminProfileStatus.textContent=user.reset_required?"Status: Reset Required":"Status: Active";
    adminMechanicProfileFields.classList.toggle("hidden",user._type!=="mechanic");
    if(user._type==="mechanic"){adminProfileLocation.value=user.location;adminProfileIsLead.checked=Boolean(user.is_lead);}
    adminProfileResetBtn.textContent=user._type==="mechanic"?"Reset PIN":"Reset Password";
    adminProfileError.classList.add("hidden");
  }

  function showFleetMechanicsLanding(){
    mechanicResetScreen.classList.add("hidden"); districtManagerResetScreen.classList.add("hidden");
    hideAdminViews();
    hideDistrictManagerViews();
    currentDetailView = "fleetLocations";
    activeMechanicPin = "";
    mechanicSettingsBtn.classList.add("hidden");
    currentFleetLocation = null;
    sheetTitle.textContent = "Fleet Mechanics";
    addMechanicBtn.classList.add("hidden");
    addMechanicPanel.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    utilityPageContent.classList.add("hidden");
    fleetMechanicsLanding.classList.remove("hidden");
    bottomNav.classList.add("hidden");
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showMechanicRoster(location){
    mechanicResetScreen.classList.add("hidden"); districtManagerResetScreen.classList.add("hidden");
    hideAdminViews();
    hideDistrictManagerViews();
    currentDetailView = "mechanicRoster";
    activeMechanicPin = "";
    mechanicSettingsBtn.classList.add("hidden");
    currentFleetLocation = location;
    fleetMechanicsLanding.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    mechanicResetScreen.classList.add("hidden");
    addMechanicBtn.classList.add("hidden");
    utilityPageContent.classList.add("hidden");
    fleetMechanicRoster.classList.remove("hidden");
    addMechanicPanel.classList.add("hidden");
    addMechanicBtn.classList.add("hidden");
    sheetTitle.textContent = location;
    mechanicRosterIntro.textContent = `Fleet Mechanics - ${location}`;
    newMechanicName.value = "";
    renderMechanicRoster();
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showMechanicLock(mechanic){
    hideDistrictManagerViews();
    selectedMechanic = mechanic;
    const resetRequired = mechanic.reset_required || (!backendIsConfigured() && hasLocalReset("mechanic",mechanic.id));
    if(resetRequired){
      currentDetailView="mechanicReset";
      fleetMechanicRoster.classList.add("hidden"); mechanicLockScreen.classList.add("hidden"); mechanicPersonalScreen.classList.add("hidden");
      mechanicResetScreen.classList.remove("hidden"); districtManagerResetScreen.classList.add("hidden");
      addMechanicBtn.classList.add("hidden"); mechanicSettingsBtn.classList.add("hidden");
      sheetTitle.textContent=mechanic.name; mechanicResetName.textContent=mechanic.name;
      mechanicResetCode.value=""; mechanicResetNewPin.value=""; mechanicResetConfirmPin.value=""; mechanicResetError.classList.add("hidden");
      window.scrollTo(0,0); return;
    }
    mechanicSettingsBtn.classList.add("hidden");
    currentDetailView = "mechanicLock";
    fleetMechanicRoster.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    mechanicLockScreen.classList.remove("hidden");
    addMechanicBtn.classList.add("hidden");
    sheetTitle.textContent = mechanic.name;
    mechanicLockName.textContent = mechanic.name;
    mechanicPinEntry.value = "";
    mechanicPinError.classList.add("hidden");
    setTimeout(()=>mechanicPinEntry.focus(),50);
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showMechanicPersonalScreen(){
    hideDistrictManagerViews();
    currentDetailView = "mechanicPersonal";
    mechanicLockScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    mechanicPersonalScreen.classList.remove("hidden");
    addMechanicBtn.classList.add("hidden");
    mechanicSettingsBtn.classList.remove("hidden");
    mechanicSettingsPanel.classList.add("hidden");
    changeMechanicPin.value = "";
    confirmChangeMechanicPin.value = "";
    changePinError.classList.add("hidden");
    sheetTitle.textContent = selectedMechanic.name;
    mechanicPersonalHeading.textContent = selectedMechanic.name;
    mechanicLandingName.textContent = selectedMechanic.name;
    mechanicWelcome.textContent = `Welcome, ${selectedMechanic.name}`;
    mechanicLandingContent.classList.remove("hidden");
    mechanicInboxLocation.classList.add("hidden");
    mechanicSubmissionEmpty.classList.add("hidden");
    mechanicSubmissionList.classList.add("hidden");
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showHome(){
    mechanicResetScreen.classList.add("hidden"); districtManagerResetScreen.classList.add("hidden");
    hideAdminViews();
    hideDistrictManagerViews();
    mechanicSettingsBtn.classList.add("hidden");
    splash.classList.add("hidden");
    sheet.classList.add("hidden");
    home.classList.remove("hidden");
    utilityPageContent.classList.add("hidden");
    fleetMechanicsLanding.classList.add("hidden");
    placeholderContent.classList.remove("hidden");
    bottomNav.classList.remove("hidden");
    window.scrollTo(0,0);
  }

  function showSheet(key){
    mechanicResetScreen.classList.add("hidden"); districtManagerResetScreen.classList.add("hidden");
    hideAdminViews();
    hideDistrictManagerViews();
    mechanicSettingsBtn.classList.add("hidden");
    const item=sheets[key];
    if(!item)return;

    sheetTitle.textContent=item[0];
    detailTitle.textContent=item[0];
    bigIcon.textContent=item[1];

    splash.classList.add("hidden");
    home.classList.add("hidden");
    sheet.classList.remove("hidden");
    utilityPageContent.classList.add("hidden");
    fleetMechanicsLanding.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    addMechanicBtn.classList.add("hidden");
    bottomNav.classList.remove("hidden");

    truckForm.classList.add("hidden");
    tractorForm.classList.add("hidden");
    tmaForm.classList.add("hidden");
    equipmentForm.classList.add("hidden");
    sweeperForm.classList.add("hidden");
    laneForm.classList.add("hidden");
    messageForm.classList.add("hidden");
    helpForm.classList.add("hidden");
    placeholderContent.classList.add("hidden");

    const now = new Date();
    const dateValue = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
    const timeValue = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;

    if(key === "truck"){
      truckForm.classList.remove("hidden");
      submitMessage.classList.add("hidden");
      const date = truckForm.querySelector('[name="date"]');
      const time = truckForm.querySelector('[name="time"]');
      if(!date.value) date.value = dateValue;
      if(!time.value) time.value = timeValue;
    } else if(key === "tractor"){
      tractorForm.classList.remove("hidden");
      tractorSubmitMessage.classList.add("hidden");
      const date = tractorForm.querySelector('[name="tractorDate"]');
      const time = tractorForm.querySelector('[name="tractorTime"]');
      if(!date.value) date.value = dateValue;
      if(!time.value) time.value = timeValue;
    } else if(key === "tma"){
      tmaForm.classList.remove("hidden");
      tmaSubmitMessage.classList.add("hidden");
      const date = tmaForm.querySelector('[name="tmaDate"]');
      if(!date.value) date.value = dateValue;
    } else if(key === "equipment"){
      equipmentForm.classList.remove("hidden");
      equipmentSubmitMessage.classList.add("hidden");
      const date = equipmentForm.querySelector('[name="equipmentDate"]');
      const time = equipmentForm.querySelector('[name="equipmentTime"]');
      if(!date.value) date.value = dateValue;
      if(!time.value) time.value = timeValue;
    } else if(key === "lane"){
      laneForm.classList.remove("hidden");
      laneSubmitMessage.classList.add("hidden");
      const date = laneForm.querySelector('[name="laneDate"]');
      const time = laneForm.querySelector('[name="laneTime"]');
      if(!date.value) date.value = dateValue;
      if(!time.value) time.value = timeValue;
    } else if(key === "help"){
      helpForm.classList.remove("hidden");
      helpSubmitMessage.classList.add("hidden");
      const date = helpForm.querySelector('[name="helpDate"]');
      const time = helpForm.querySelector('[name="helpTime"]');
      if(!date.value) date.value = dateValue;
      if(!time.value) time.value = timeValue;
    } else if(key === "message"){
      messageForm.classList.remove("hidden");
      messageSubmitMessage.classList.add("hidden");
      const date = messageForm.querySelector('[name="messageDate"]');
      if(!date.value) date.value = dateValue;
    } else if(key === "sweeper"){
      sweeperForm.classList.remove("hidden");
      sweeperSubmitMessage.classList.add("hidden");
      const date = sweeperForm.querySelector('[name="sweeperDate"]');
      const time = sweeperForm.querySelector('[name="sweeperTime"]');
      if(!date.value) date.value = dateValue;
      if(!time.value) time.value = timeValue;
    } else {
      placeholderContent.classList.remove("hidden");
    }

    window.scrollTo(0,0);
  }

  truckForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const rows = [...truckChecklist.querySelectorAll(".check-row")];
    const missing = rows.filter(row => !row.dataset.status);
    const missingDefectNotes = rows.filter(row => row.dataset.status === "DEFECT" && !row.querySelector(".defect-note").value.trim());

    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus();
      return;
    }
    if(!truckForm.reportValidity()) return;

    try{
      await routeSubmissionToLocation(truckForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    submitMessage.classList.remove("hidden");
    submitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });


  tractorForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows = [...tractorChecklist.querySelectorAll(".check-row")];
    const missing = rows.filter(row => !row.dataset.status);
    const missingDefectNotes = rows.filter(row => row.dataset.status === "DEFECT" && !row.querySelector(".defect-note").value.trim());

    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus();
      return;
    }
    if(!tractorForm.reportValidity()) return;

    try{
      await routeSubmissionToLocation(tractorForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    tractorSubmitMessage.classList.remove("hidden");
    tractorSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  helpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows=[...helpChecklist.querySelectorAll(".check-row")];
    const missing=rows.filter(row=>!row.dataset.status);
    const missingDefectNotes=rows.filter(row=>row.dataset.status==="DEFECT" && !row.querySelector(".defect-note").value.trim());
    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus();
      return;
    }
    if(!helpForm.reportValidity()) return;
    try{
      await routeSubmissionToLocation(helpForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    helpSubmitMessage.classList.remove("hidden");
    helpSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  helpPhotos.addEventListener("change",()=>showPhotoNames(helpPhotos,helpPhotoList));

  messageForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows=[...messageChecklist.querySelectorAll(".check-row")];
    const missing=rows.filter(row=>!row.dataset.status);
    const missingDefectNotes=rows.filter(row=>row.dataset.status==="DEFECT" && !row.querySelector(".defect-note").value.trim());
    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus();
      return;
    }
    if(!messageForm.reportValidity()) return;
    try{
      await routeSubmissionToLocation(messageForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    messageSubmitMessage.classList.remove("hidden");
    messageSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  messagePhotos.addEventListener("change",()=>showPhotoNames(messagePhotos,messagePhotoList));

  laneForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows=[...laneChecklist.querySelectorAll(".check-row")];
    const missing=rows.filter(row=>!row.dataset.status);
    const missingDefectNotes=rows.filter(row=>row.dataset.status==="DEFECT" && !row.querySelector(".defect-note").value.trim());
    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus();
      return;
    }
    if(!laneForm.reportValidity()) return;
    try{
      await routeSubmissionToLocation(laneForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    laneSubmitMessage.classList.remove("hidden");
    laneSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  lanePhotos.addEventListener("change",()=>showPhotoNames(lanePhotos,lanePhotoList));

  sweeperForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows=[...sweeperChecklist.querySelectorAll(".check-row")];
    const missing=rows.filter(row=>!row.dataset.status);
    const missingDefectNotes=rows.filter(row=>row.dataset.status==="DEFECT" && !row.querySelector(".defect-note").value.trim());
    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"}); return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus(); return;
    }
    if(!sweeperForm.reportValidity()) return;
    try{
      await routeSubmissionToLocation(sweeperForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    sweeperSubmitMessage.classList.remove("hidden");
    sweeperSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });
  sweeperPhotos.addEventListener("change",()=>showPhotoNames(sweeperPhotos,sweeperPhotoList));

  equipmentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows=[...equipmentChecklist.querySelectorAll(".check-row")];
    const missing=rows.filter(row=>!row.dataset.status);
    const missingDefectNotes=rows.filter(row=>row.dataset.status==="DEFECT" && !row.querySelector(".defect-note").value.trim());
    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"}); return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus(); return;
    }
    if(!equipmentForm.reportValidity()) return;
    try{
      await routeSubmissionToLocation(equipmentForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    equipmentSubmitMessage.classList.remove("hidden");
    equipmentSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });
  equipmentPhotos.addEventListener("change",()=>showPhotoNames(equipmentPhotos,equipmentPhotoList));

  tmaForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rows = [...tmaChecklist.querySelectorAll(".check-row")];
    const missing = rows.filter(row => !row.dataset.status);
    const missingDefectNotes = rows.filter(row => row.dataset.status === "DEFECT" && !row.querySelector(".defect-note").value.trim());

    if(missing.length){
      alert(`Please mark every inspection item OK, DEFECT, or N/A. ${missing.length} item(s) are still unanswered.`);
      missing[0].scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(missingDefectNotes.length){
      alert("Please add a comment for every item marked DEFECT.");
      missingDefectNotes[0].querySelector(".defect-note").focus();
      return;
    }
    if(!tmaForm.reportValidity()) return;

    try{
      await routeSubmissionToLocation(tmaForm);
    }catch(err){
      alert(`Checkout could not be submitted online. ${err.message}`);
      return;
    }
    tmaSubmitMessage.classList.remove("hidden");
    tmaSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  tmaPhotos.addEventListener("change", () => showPhotoNames(tmaPhotos, tmaPhotoList));
  truckPhotos.addEventListener("change", () => showPhotoNames(truckPhotos, truckPhotoList));
  tractorPhotos.addEventListener("change", () => showPhotoNames(tractorPhotos, tractorPhotoList));

  document.querySelectorAll("[data-sheet]").forEach(btn=>{
    btn.addEventListener("click",()=>showSheet(btn.dataset.sheet));
  });

  backBtn.addEventListener("click",()=>{
    if(currentDetailView === "submissionDetail"){
      showMechanicPersonalScreen();
    } else if(currentDetailView === "districtManagerLock" || currentDetailView === "districtManagerPersonal"){
      showDistrictManagerRoster();
    } else if(currentDetailView === "adminMechanics" || currentDetailView === "adminManagers" || currentDetailView === "adminReset"){
      currentDetailView="adminLanding"; showAdminSubView(adminLandingView,"Admin");
    } else if(currentDetailView === "admin" || currentDetailView === "adminLanding"){
      showHome();
    } else if(currentDetailView === "districtManagerRoster"){
      showHome();
    } else if(currentDetailView === "mechanicReset"){
      showMechanicRoster(currentFleetLocation);
    } else if(currentDetailView === "districtManagerReset"){
      showDistrictManagerRoster();
    } else if(currentDetailView === "mechanicLock" || currentDetailView === "mechanicPersonal"){
      showMechanicRoster(currentFleetLocation);
    } else if(currentDetailView === "mechanicRoster"){
      showFleetMechanicsLanding();
    } else {
      showHome();
    }
  });
  homeBtn.addEventListener("click",showHome);


  const mainFleetButton = document.getElementById("mainFleetButton");
  const mainFleetDropdown = document.getElementById("mainFleetDropdown");
  const mainSettingsButton = document.getElementById("mainSettingsButton");
  const mainSettingsDropdown = document.getElementById("mainSettingsDropdown");

  function closeMainFleetMenu(){
    mainFleetDropdown.classList.add("hidden");
    mainFleetButton.setAttribute("aria-expanded","false");
  }
  mainFleetButton.addEventListener("click",(e)=>{
    e.stopPropagation();
    closeMainSettingsMenu();
    const opening=mainFleetDropdown.classList.contains("hidden");
    mainFleetDropdown.classList.toggle("hidden");
    mainFleetButton.setAttribute("aria-expanded",opening ? "true":"false");
  });

  function closeMainSettingsMenu(){
    mainSettingsDropdown.classList.add("hidden");
    mainSettingsButton.setAttribute("aria-expanded","false");
  }

  mainSettingsButton.addEventListener("click",(e)=>{
    e.stopPropagation();
    closeMainFleetMenu();
    const opening=mainSettingsDropdown.classList.contains("hidden");
    mainSettingsDropdown.classList.toggle("hidden");
    mainSettingsButton.setAttribute("aria-expanded", opening ? "true" : "false");
  });

  document.addEventListener("click",(e)=>{
    if(!e.target.closest(".main-settings-menu")) closeMainSettingsMenu();
    if(!e.target.closest(".main-fleet-menu")) closeMainFleetMenu();
  });

  function hideDistrictManagerViews(){
    districtManagerRoster.classList.add("hidden");
    districtManagerLockScreen.classList.add("hidden");
    districtManagerPersonalScreen.classList.add("hidden");
    addDistrictManagerPanel.classList.add("hidden");
  }

  async function renderDistrictManagerRoster(){
    districtManagerList.innerHTML = "";
    try{
      const managers = await getDistrictManagers();
      districtManagerEmptyState.classList.toggle("hidden", managers.length > 0);
      districtManagerEmptyState.textContent = "No district managers have been added yet.";

      managers.forEach(manager=>{
        const card = document.createElement("button");
        card.type = "button";
        card.className = "mechanic-card";
        card.textContent = manager.name;
        card.addEventListener("click",()=>showDistrictManagerLock(manager));
        districtManagerList.appendChild(card);
      });
    }catch(err){
      districtManagerEmptyState.classList.remove("hidden");
      districtManagerEmptyState.textContent = err.message;
    }
  }

  function showDistrictManagerRoster(){
    mechanicResetScreen.classList.add("hidden"); districtManagerResetScreen.classList.add("hidden");
    hideAdminViews();
    currentDetailView = "districtManagerRoster";
    selectedDistrictManager = null;
    activeDistrictManagerPassword = "";
    currentFleetLocation = null;

    fleetMechanicsLanding.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    utilityPageContent.classList.add("hidden");
    placeholderContent.classList.add("hidden");

    districtManagerLockScreen.classList.add("hidden");
    districtManagerPersonalScreen.classList.add("hidden");
    districtManagerRoster.classList.remove("hidden");
    addDistrictManagerPanel.classList.add("hidden");

    addMechanicBtn.classList.add("hidden");
    mechanicSettingsBtn.classList.add("hidden");
    sheetTitle.textContent = "Fleet District Managers";
    districtManagerRosterIntro.textContent = "Fleet District Managers";
    bottomNav.classList.add("hidden");

    renderDistrictManagerRoster();
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showDistrictManagerLock(manager){
    selectedDistrictManager = manager;
    const resetRequired = manager.reset_required || (!backendIsConfigured() && hasLocalReset("manager",manager.id));
    if(resetRequired){
      activeDistrictManagerPassword=""; currentDetailView="districtManagerReset";
      districtManagerRoster.classList.add("hidden"); districtManagerLockScreen.classList.add("hidden"); districtManagerPersonalScreen.classList.add("hidden");
      districtManagerResetScreen.classList.remove("hidden"); mechanicResetScreen.classList.add("hidden");
      addMechanicBtn.classList.add("hidden"); mechanicSettingsBtn.classList.add("hidden");
      sheetTitle.textContent=manager.name; districtManagerResetName.textContent=manager.name;
      districtManagerResetCode.value=""; districtManagerResetNewPassword.value=""; districtManagerResetConfirmPassword.value=""; districtManagerResetError.classList.add("hidden");
      window.scrollTo(0,0); return;
    }
    activeDistrictManagerPassword = "";
    currentDetailView = "districtManagerLock";

    districtManagerRoster.classList.add("hidden");
    districtManagerPersonalScreen.classList.add("hidden");
    districtManagerLockScreen.classList.remove("hidden");

    addMechanicBtn.classList.add("hidden");
    mechanicSettingsBtn.classList.add("hidden");
    sheetTitle.textContent = manager.name;
    districtManagerLockName.textContent = manager.name;
    districtManagerPasswordEntry.value = "";
    districtManagerPasswordError.classList.add("hidden");

    setTimeout(()=>districtManagerPasswordEntry.focus(),50);
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showDistrictManagerPersonalScreen(){
    currentDetailView = "districtManagerPersonal";
    districtManagerLockScreen.classList.add("hidden");
    districtManagerRoster.classList.add("hidden");
    districtManagerPersonalScreen.classList.remove("hidden");

    addMechanicBtn.classList.add("hidden");
    mechanicSettingsBtn.classList.remove("hidden");
    districtManagerSettingsPanel.classList.add("hidden");

    sheetTitle.textContent = selectedDistrictManager.name;
    districtManagerPersonalHeading.textContent = selectedDistrictManager.name;
    districtManagerLandingName.textContent = selectedDistrictManager.name;
    districtManagerWelcome.textContent = `Welcome, ${selectedDistrictManager.name}`;
    districtManagerLandingContent.classList.remove("hidden");
    districtManagerSheetsView.classList.add("hidden");
    changeDistrictManagerPassword.value = "";
    confirmChangeDistrictManagerPassword.value = "";
    districtManagerSettingsError.classList.add("hidden");

    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showUtilityPage(page){
    mechanicSettingsBtn.classList.add("hidden");
    closeMainSettingsMenu();

    splash.classList.add("hidden");
    home.classList.add("hidden");
    sheet.classList.remove("hidden");

    truckForm.classList.add("hidden");
    tractorForm.classList.add("hidden");
    tmaForm.classList.add("hidden");
    equipmentForm.classList.add("hidden");
    sweeperForm.classList.add("hidden");
    laneForm.classList.add("hidden");
    placeholderContent.classList.add("hidden");

    utilityPageContent.classList.remove("hidden");
    fleetMechanicsLanding.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
    mechanicSubmissionDetail.classList.add("hidden");
    hideDistrictManagerViews();
    addMechanicBtn.classList.add("hidden");
    bottomNav.classList.add("hidden");

    if(page === "settings"){
      sheetTitle.textContent = "Settings"; utilityPageHeading.textContent = "Settings";
      utilityPageText.textContent = "App settings will be added here.";
    } else if(page === "about"){
      sheetTitle.textContent = "About"; utilityPageHeading.textContent = "About";
      utilityPageText.innerHTML = "Illinois Tollway Equipment Checkout App<br><br>Mobile app created by Ryan Zierer 2026";
    } else if(page === "mechanics"){
      showFleetMechanicsLanding();
    } else if(page === "managers"){
      showDistrictManagerRoster();
      return;
    } else if(page === "admin"){
      showAdmin();
      return;
    }

    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  document.querySelectorAll("[data-fleet-location]").forEach(btn=>{
    btn.addEventListener("click",()=>showMechanicRoster(btn.dataset.fleetLocation));
  });

  mechanicSettingsBtn.addEventListener("click",()=>{
    if(currentDetailView === "districtManagerPersonal"){
      districtManagerSettingsPanel.classList.toggle("hidden");
      if(!districtManagerSettingsPanel.classList.contains("hidden")){
        window.scrollTo({top:0,left:0,behavior:"smooth"});
      }
      return;
    }

    mechanicSettingsPanel.classList.toggle("hidden");
    if(!mechanicSettingsPanel.classList.contains("hidden")){
      window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
  });

  saveChangedPinBtn.addEventListener("click",async()=>{
    if(!selectedMechanic || !activeMechanicPin) return;

    const newPin = changeMechanicPin.value.trim();
    const confirmPin = confirmChangeMechanicPin.value.trim();
    changePinError.classList.add("hidden");

    if(!/^\d{4,6}$/.test(newPin)){
      changePinError.textContent = "New PIN must be 4 to 6 numbers.";
      changePinError.classList.remove("hidden");
      changeMechanicPin.focus();
      return;
    }
    if(newPin !== confirmPin){
      changePinError.textContent = "PIN entries do not match.";
      changePinError.classList.remove("hidden");
      confirmChangeMechanicPin.focus();
      return;
    }

    saveChangedPinBtn.disabled = true;
    try{
      await changeMechanicPinOnline(selectedMechanic.id,activeMechanicPin,newPin);
      activeMechanicPin = newPin;
      changeMechanicPin.value = "";
      confirmChangeMechanicPin.value = "";
      mechanicSettingsPanel.classList.add("hidden");
      alert("PIN changed successfully.");
    }catch(err){
      changePinError.textContent = err.message;
      changePinError.classList.remove("hidden");
    }finally{
      saveChangedPinBtn.disabled = false;
    }
  });


  cancelDistrictManagerBtn.addEventListener("click",()=>{
    addDistrictManagerPanel.classList.add("hidden");
    districtManagerAddError.classList.add("hidden");
    newDistrictManagerName.value = "";
    newDistrictManagerPassword.value = "";
    confirmDistrictManagerPassword.value = "";
  });

  saveDistrictManagerBtn.addEventListener("click",async()=>{
    const name = newDistrictManagerName.value.trim();
    const password = newDistrictManagerPassword.value;
    const confirmPassword = confirmDistrictManagerPassword.value;
    districtManagerAddError.classList.add("hidden");

    if(!name){
      districtManagerAddError.textContent = "Enter the district manager's name.";
      districtManagerAddError.classList.remove("hidden");
      newDistrictManagerName.focus();
      return;
    }

    if(password.length < 4){
      districtManagerAddError.textContent = "Password must be at least 4 characters.";
      districtManagerAddError.classList.remove("hidden");
      newDistrictManagerPassword.focus();
      return;
    }

    if(password !== confirmPassword){
      districtManagerAddError.textContent = "Passwords do not match.";
      districtManagerAddError.classList.remove("hidden");
      confirmDistrictManagerPassword.focus();
      return;
    }

    saveDistrictManagerBtn.disabled = true;
    try{
      await createDistrictManager(name,password);
      addDistrictManagerPanel.classList.add("hidden");
      await renderDistrictManagerRoster();
    }catch(err){
      districtManagerAddError.textContent = /duplicate|unique/i.test(err.message)
        ? "A district manager with that name already exists."
        : err.message;
      districtManagerAddError.classList.remove("hidden");
    }finally{
      saveDistrictManagerBtn.disabled = false;
    }
  });

  unlockDistrictManagerBtn.addEventListener("click",async()=>{
    if(!selectedDistrictManager) return;

    const password = districtManagerPasswordEntry.value;
    districtManagerPasswordError.classList.add("hidden");
    unlockDistrictManagerBtn.disabled = true;

    try{
      const valid = await verifyDistrictManagerPassword(selectedDistrictManager.id,password);
      if(valid !== true){
        districtManagerPasswordError.textContent = "Incorrect password. Try again.";
        districtManagerPasswordError.classList.remove("hidden");
        return;
      }

      activeDistrictManagerPassword = password;
      showDistrictManagerPersonalScreen();
    }catch(err){
      districtManagerPasswordError.textContent = err.message;
      districtManagerPasswordError.classList.remove("hidden");
    }finally{
      unlockDistrictManagerBtn.disabled = false;
    }
  });


  saveDistrictManagerPasswordBtn.addEventListener("click",async()=>{
    const newPassword = changeDistrictManagerPassword.value;
    const confirmPassword = confirmChangeDistrictManagerPassword.value;
    districtManagerSettingsError.classList.add("hidden");

    if(newPassword.length < 4){
      districtManagerSettingsError.textContent = "Password must be at least 4 characters.";
      districtManagerSettingsError.classList.remove("hidden");
      return;
    }

    if(newPassword !== confirmPassword){
      districtManagerSettingsError.textContent = "Passwords do not match.";
      districtManagerSettingsError.classList.remove("hidden");
      return;
    }

    try{
      await changeDistrictManagerPasswordOnline(
        selectedDistrictManager.id,
        activeDistrictManagerPassword,
        newPassword
      );
      activeDistrictManagerPassword = newPassword;
      changeDistrictManagerPassword.value = "";
      confirmChangeDistrictManagerPassword.value = "";
      alert("Password changed successfully.");
    }catch(err){
      districtManagerSettingsError.textContent = err.message;
      districtManagerSettingsError.classList.remove("hidden");
    }
  });


  addMechanicBtn.addEventListener("click",()=>{
    if(currentDetailView === "districtManagerRoster"){
      districtManagerAddError.classList.add("hidden");
      newDistrictManagerName.value = "";
      newDistrictManagerPassword.value = "";
      confirmDistrictManagerPassword.value = "";
      addDistrictManagerPanel.classList.remove("hidden");
      newDistrictManagerName.focus();
      return;
    }

    if(!currentFleetLocation) return;
    mechanicAddError.classList.add("hidden");
    newMechanicName.value = "";
    newMechanicPin.value = "";
    confirmMechanicPin.value = "";
    newMechanicIsLead.checked = false;
    addMechanicPanel.classList.remove("hidden");
    newMechanicName.focus();
  });

  cancelMechanicBtn.addEventListener("click",()=>{
    addMechanicPanel.classList.add("hidden");
    mechanicAddError.classList.add("hidden");
    newMechanicName.value = "";
    newMechanicPin.value = "";
    confirmMechanicPin.value = "";
    newMechanicIsLead.checked = false;
  });

  saveMechanicBtn.addEventListener("click",async()=>{
    const name = newMechanicName.value.trim();
    const pin = newMechanicPin.value.trim();
    const confirmPin = confirmMechanicPin.value.trim();
    const isLead = newMechanicIsLead.checked;
    mechanicAddError.classList.add("hidden");

    if(!name){
      mechanicAddError.textContent = "Enter the mechanic's name.";
      mechanicAddError.classList.remove("hidden");
      newMechanicName.focus();
      return;
    }
    if(!/^\d{4,6}$/.test(pin)){
      mechanicAddError.textContent = "PIN must be 4 to 6 numbers.";
      mechanicAddError.classList.remove("hidden");
      newMechanicPin.focus();
      return;
    }
    if(pin !== confirmPin){
      mechanicAddError.textContent = "PIN entries do not match.";
      mechanicAddError.classList.remove("hidden");
      confirmMechanicPin.focus();
      return;
    }

    saveMechanicBtn.disabled = true;
    try{
      await createMechanic(currentFleetLocation,name,pin,isLead);
      addMechanicPanel.classList.add("hidden");
      newMechanicName.value = "";
      newMechanicPin.value = "";
      confirmMechanicPin.value = "";
      newMechanicIsLead.checked = false;
      await renderMechanicRoster();
    }catch(err){
      mechanicAddError.textContent =
        /lead mechanic is already assigned/i.test(err.message)
          ? "This location already has a lead mechanic."
          : /duplicate|unique/i.test(err.message)
            ? "A mechanic with that name already exists at this location."
            : err.message;
      mechanicAddError.classList.remove("hidden");
    }finally{
      saveMechanicBtn.disabled = false;
    }
  });

  [newMechanicName,newMechanicPin,confirmMechanicPin].forEach(field=>{
    field.addEventListener("keydown",(e)=>{
      if(e.key === "Enter"){
        e.preventDefault();
        saveMechanicBtn.click();
      }
    });
  });

  mechanicViewSheetsBtn.onclick=()=>{
    mechanicLandingContent.classList.add("hidden");
    mechanicInboxLocation.classList.remove("hidden");
    mechanicSubmissionEmpty.classList.remove("hidden");
    mechanicSubmissionList.classList.remove("hidden");
    sheetTitle.textContent="View Checkout Sheets";
    renderSubmissionInbox();
    window.scrollTo({top:0,left:0,behavior:"auto"});
  };
  districtManagerViewSheetsBtn.onclick=()=>{
    districtManagerLandingContent.classList.add("hidden");
    districtManagerSheetsView.classList.remove("hidden");
    sheetTitle.textContent="View Checkout Sheets";
    window.scrollTo({top:0,left:0,behavior:"auto"});
  };

  completeMechanicResetBtn.onclick=async()=>{
    const code=mechanicResetCode.value.trim(), pin=mechanicResetNewPin.value, confirmPin=mechanicResetConfirmPin.value;
    mechanicResetError.classList.add("hidden");
    if(!/^\d{6}$/.test(code)||!/^\d{4,6}$/.test(pin)||pin!==confirmPin){
      mechanicResetError.textContent=!/^\d{6}$/.test(code)?"Enter the 6-digit temporary reset code.":!/^\d{4,6}$/.test(pin)?"New PIN must be 4–6 digits.":"PINs do not match.";
      mechanicResetError.classList.remove("hidden"); return;
    }
    try{
      if(backendIsConfigured()) await backendRpc("complete_fleet_mechanic_pin_reset",{p_mechanic_id:selectedMechanic.id,p_reset_code:code,p_new_pin:pin});
      else completeLocalReset("mechanic",selectedMechanic.id,code,pin);
      selectedMechanic.reset_required=false; mechanicResetScreen.classList.add("hidden"); alert("New PIN created successfully."); showMechanicLock(selectedMechanic);
    }catch(e){mechanicResetError.textContent=e.message;mechanicResetError.classList.remove("hidden");}
  };

  completeDistrictManagerResetBtn.onclick=async()=>{
    const code=districtManagerResetCode.value.trim(), pass=districtManagerResetNewPassword.value, confirmPass=districtManagerResetConfirmPassword.value;
    districtManagerResetError.classList.add("hidden");
    if(!/^\d{6}$/.test(code)||pass.length<4||pass!==confirmPass){
      districtManagerResetError.textContent=!/^\d{6}$/.test(code)?"Enter the 6-digit temporary reset code.":pass.length<4?"New password must be at least 4 characters.":"Passwords do not match.";
      districtManagerResetError.classList.remove("hidden"); return;
    }
    try{
      if(backendIsConfigured()) await backendRpc("complete_fleet_district_manager_password_reset",{p_manager_id:selectedDistrictManager.id,p_reset_code:code,p_new_password:pass});
      else completeLocalReset("manager",selectedDistrictManager.id,code,pass);
      selectedDistrictManager.reset_required=false; districtManagerResetScreen.classList.add("hidden"); alert("New password created successfully."); showDistrictManagerLock(selectedDistrictManager);
    }catch(e){districtManagerResetError.textContent=e.message;districtManagerResetError.classList.remove("hidden");}
  };

  unlockMechanicBtn.addEventListener("click",async()=>{
    if(!selectedMechanic) return;
    mechanicPinError.classList.add("hidden");
    const enteredPin = mechanicPinEntry.value.trim();

    if(!/^\d{4,6}$/.test(enteredPin)){
      mechanicPinError.textContent = "Enter your 4–6 digit PIN.";
      mechanicPinError.classList.remove("hidden");
      mechanicPinEntry.focus();
      return;
    }

    unlockMechanicBtn.disabled = true;
    try{
      const verified = await verifyMechanicPin(selectedMechanic.id,enteredPin);
      if(!verified){
        mechanicPinError.textContent = "Incorrect PIN. Try again.";
        mechanicPinError.classList.remove("hidden");
        mechanicPinEntry.select();
        return;
      }
      activeMechanicPin = enteredPin;
      showMechanicPersonalScreen();
    }catch(err){
      mechanicPinError.textContent = err.message;
      mechanicPinError.classList.remove("hidden");
    }finally{
      unlockMechanicBtn.disabled = false;
    }
  });

  mechanicPinEntry.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
      e.preventDefault();
      unlockMechanicBtn.click();
    }
  });

  createAdminPasswordBtn.onclick=async()=>{
    const p=adminSetupPassword.value,c=adminSetupConfirmPassword.value;
    adminSetupError.classList.add("hidden");
    if(p.length<6||p!==c){
      adminSetupError.textContent=p.length<6?"Admin password must be at least 6 characters.":"Passwords do not match.";
      adminSetupError.classList.remove("hidden");
      return;
    }
    try{
      if(backendIsConfigured()) await backendRpc("create_admin_password",{p_password:p});
      else createLocalAdminPassword(p);
      activeAdminPassword=p;
      currentDetailView="adminLanding";
      showAdminSubView(adminLandingView,"Admin");
    }catch(e){
      adminSetupError.textContent=e.message;
      adminSetupError.classList.remove("hidden");
    }
  };

  unlockAdminBtn.onclick=async()=>{
    const p=adminPasswordEntry.value;
    adminLockError.classList.add("hidden");
    try{
      const ok=backendIsConfigured()
        ? await backendRpc("verify_admin_password",{p_password:p})
        : verifyLocalAdminPassword(p);
      if(ok!==true){
        adminLockError.textContent="Incorrect Admin password.";
        adminLockError.classList.remove("hidden");
        return;
      }
      activeAdminPassword=p;
      currentDetailView="adminLanding";
      showAdminSubView(adminLandingView,"Admin");
    }catch(e){
      adminLockError.textContent=e.message;
      adminLockError.classList.remove("hidden");
    }
  };
  adminMasterUsersBtn.onclick=()=>{currentDetailView="adminMasterUsers";showAdminSubView(adminMasterUsersView,"Master User List");renderAdminMasterUsers();};
  adminSaveMechanicProfileBtn.onclick=async()=>{
    if(!selectedAdminUser||selectedAdminUser._type!=="mechanic")return;
    try{await adminUpdateMechanicAssignment(selectedAdminUser.id,adminProfileLocation.value,adminProfileIsLead.checked);selectedAdminUser.location=adminProfileLocation.value;selectedAdminUser.is_lead=adminProfileIsLead.checked;alert("Mechanic assignment updated.");showAdminUserProfile(selectedAdminUser);}catch(e){adminProfileError.textContent=e.message;adminProfileError.classList.remove("hidden");}
  };
  adminProfileResetBtn.onclick=async()=>{
    if(!selectedAdminUser)return;
    try{
      let code;
      if(selectedAdminUser._type==="mechanic"){
        code=backendIsConfigured()?await backendRpc("admin_reset_fleet_mechanic_pin",{p_admin_password:activeAdminPassword,p_mechanic_id:selectedAdminUser.id}):(()=>{const c=createLocalReset("mechanic",selectedAdminUser.id),rows=localMechanics(),i=rows.findIndex(x=>x.id===selectedAdminUser.id);if(i>=0){rows[i].reset_required=true;saveLocalProfiles(LOCAL_MECHANICS_KEY,rows);}return c;})();
      }else{
        code=backendIsConfigured()?await backendRpc("admin_reset_fleet_district_manager_password",{p_admin_password:activeAdminPassword,p_manager_id:selectedAdminUser.id}):(()=>{const c=createLocalReset("manager",selectedAdminUser.id),rows=localManagers(),i=rows.findIndex(x=>x.id===selectedAdminUser.id);if(i>=0){rows[i].reset_required=true;saveLocalProfiles(LOCAL_MANAGERS_KEY,rows);}return c;})();
      }
      selectedAdminUser.reset_required=true;adminProfileStatus.textContent="Status: Reset Required";
      alert(`Temporary reset code for ${selectedAdminUser.name}: ${code}`);
    }catch(e){adminProfileError.textContent=e.message;adminProfileError.classList.remove("hidden");}
  };
  adminProfileDeleteBtn.onclick=async()=>{
    if(!selectedAdminUser||!confirm(`Delete ${selectedAdminUser.name}?`))return;
    try{if(selectedAdminUser._type==="mechanic")await adminDeleteMechanic(selectedAdminUser.id);else await adminDeleteDistrictManager(selectedAdminUser.id);selectedAdminUser=null;currentDetailView="adminMasterUsers";showAdminSubView(adminMasterUsersView,"Master User List");renderAdminMasterUsers();}catch(e){adminProfileError.textContent=e.message;adminProfileError.classList.remove("hidden");}
  };
  adminManageMechanicsBtn.onclick=()=>{currentDetailView="adminMechanics";showAdminSubView(adminMechanicsView,"Manage Fleet Mechanics");renderAdminMechanics();};
  adminManageManagersBtn.onclick=()=>{currentDetailView="adminManagers";showAdminSubView(adminManagersView,"Manage District Managers");renderAdminManagers();};
  adminResetPasswordBtn.onclick=()=>{currentDetailView="adminReset";adminNewPassword.value="";adminConfirmNewPassword.value="";showAdminSubView(adminResetView,"Reset Admin Password");};
  adminMechanicLocation.onchange=renderAdminMechanics;
  adminAddMechanicBtn.onclick=async()=>{const loc=adminMechanicLocation.value,n=adminMechanicName.value.trim(),p=adminMechanicPin.value,c=adminMechanicConfirmPin.value;adminMechanicError.classList.add("hidden");if(!loc||!n||!/^\d{4,6}$/.test(p)||p!==c){adminMechanicError.textContent=!loc?"Select a work location.":!n?"Enter the mechanic name.":!/^\d{4,6}$/.test(p)?"PIN must be 4–6 digits.":"PINs do not match.";adminMechanicError.classList.remove("hidden");return;}try{await createMechanic(loc,n,p,adminMechanicIsLead.checked);adminMechanicLocation.value="";adminMechanicName.value="";adminMechanicPin.value="";adminMechanicConfirmPin.value="";adminMechanicIsLead.checked=false;renderAdminMechanics();}catch(e){adminMechanicError.textContent=e.message;adminMechanicError.classList.remove("hidden");}};
  adminAddManagerBtn.onclick=async()=>{const n=adminManagerName.value.trim(),p=adminManagerPassword.value,c=adminManagerConfirmPassword.value;adminManagerError.classList.add("hidden");if(!n||p.length<4||p!==c){adminManagerError.textContent=!n?"Enter the district manager name.":p.length<4?"Password must be at least 4 characters.":"Passwords do not match.";adminManagerError.classList.remove("hidden");return;}try{await createDistrictManager(n,p);adminManagerName.value="";adminManagerPassword.value="";adminManagerConfirmPassword.value="";renderAdminManagers();}catch(e){adminManagerError.textContent=e.message;adminManagerError.classList.remove("hidden");}};
  saveAdminPasswordBtn.onclick=async()=>{
    const p=adminNewPassword.value,c=adminConfirmNewPassword.value;
    adminResetError.classList.add("hidden");
    if(p.length<6||p!==c){
      adminResetError.textContent=p.length<6?"Admin password must be at least 6 characters.":"Passwords do not match.";
      adminResetError.classList.remove("hidden");
      return;
    }
    try{
      if(backendIsConfigured()) await backendRpc("reset_admin_password",{p_current_password:activeAdminPassword,p_new_password:p});
      else resetLocalAdminPassword(activeAdminPassword,p);
      activeAdminPassword=p;
      alert("Admin password reset successfully.");
      currentDetailView="adminLanding";
      showAdminSubView(adminLandingView,"Admin");
    }catch(e){
      adminResetError.textContent=e.message;
      adminResetError.classList.remove("hidden");
    }
  };

  document.querySelectorAll("[data-fleet-page]").forEach(btn=>{
    btn.addEventListener("click",()=>{ closeMainFleetMenu(); showUtilityPage(btn.dataset.fleetPage); });
  });

  document.querySelectorAll("[data-menu-page]").forEach(btn=>{
    btn.addEventListener("click",()=>showUtilityPage(btn.dataset.menuPage));
  });

  buildChecklist();
  makeChecklist(tractorChecklist, tractorItems);
  makeChecklist(tmaChecklist, tmaItems);
  makeChecklist(equipmentChecklist, equipmentItems);
  makeChecklist(sweeperChecklist, sweeperItems);
  makeChecklist(laneChecklist, laneItems);
  makeChecklist(messageChecklist, messageItems);
  makeChecklist(helpChecklist, helpItems);
  setTimeout(showHome,5000);
})();