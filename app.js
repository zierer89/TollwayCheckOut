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
  const mechanicLockScreen = document.getElementById("mechanicLockScreen");
  const mechanicLockName = document.getElementById("mechanicLockName");
  const mechanicPinEntry = document.getElementById("mechanicPinEntry");
  const mechanicPinError = document.getElementById("mechanicPinError");
  const unlockMechanicBtn = document.getElementById("unlockMechanicBtn");
  const mechanicPersonalScreen = document.getElementById("mechanicPersonalScreen");
  const mechanicPersonalHeading = document.getElementById("mechanicPersonalHeading");
  const utilityPageHeading = document.getElementById("utilityPageHeading");
  const utilityPageText = document.getElementById("utilityPageText");
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

  async function hashPin(pin){
    const data = new TextEncoder().encode(pin);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");
  }

  function mechanicsStorageKey(location){
    return `illinoisTollwayFleetMechanics:${location}`;
  }

  function getMechanics(location){
    try{
      const saved = JSON.parse(localStorage.getItem(mechanicsStorageKey(location)) || "[]");
      return Array.isArray(saved) ? saved : [];
    }catch{
      return [];
    }
  }

  function saveMechanics(location, mechanics){
    localStorage.setItem(mechanicsStorageKey(location), JSON.stringify(mechanics));
  }

  function renderMechanicRoster(){
    if(!currentFleetLocation) return;
    const mechanics = getMechanics(currentFleetLocation);
    mechanicList.innerHTML = "";
    mechanicEmptyState.classList.toggle("hidden", mechanics.length > 0);

    mechanics.forEach(mechanic=>{
      const item = typeof mechanic === "string" ? {name:mechanic,pinHash:""} : mechanic;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "mechanic-card";
      card.textContent = item.name;
      card.addEventListener("click",()=>showMechanicLock(item));
      mechanicList.appendChild(card);
    });
  }

  function showFleetMechanicsLanding(){
    currentDetailView = "fleetLocations";
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
    currentDetailView = "mechanicRoster";
    currentFleetLocation = location;
    fleetMechanicsLanding.classList.add("hidden");
    fleetMechanicRoster.classList.add("hidden");
    addMechanicBtn.classList.add("hidden");
    utilityPageContent.classList.add("hidden");
    fleetMechanicRoster.classList.remove("hidden");
    addMechanicPanel.classList.add("hidden");
    addMechanicBtn.classList.remove("hidden");
    sheetTitle.textContent = location;
    mechanicRosterIntro.textContent = `Fleet Mechanics - ${location}`;
    newMechanicName.value = "";
    renderMechanicRoster();
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showMechanicLock(mechanic){
    selectedMechanic = mechanic;
    currentDetailView = "mechanicLock";
    fleetMechanicRoster.classList.add("hidden");
    mechanicPersonalScreen.classList.add("hidden");
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
    currentDetailView = "mechanicPersonal";
    mechanicLockScreen.classList.add("hidden");
    mechanicPersonalScreen.classList.remove("hidden");
    addMechanicBtn.classList.add("hidden");
    sheetTitle.textContent = selectedMechanic.name;
    mechanicPersonalHeading.textContent = selectedMechanic.name;
    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  function showHome(){
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

  truckForm.addEventListener("submit", (e) => {
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

    submitMessage.classList.remove("hidden");
    submitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });


  tractorForm.addEventListener("submit", (e) => {
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

    tractorSubmitMessage.classList.remove("hidden");
    tractorSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  laneForm.addEventListener("submit", (e) => {
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
    laneSubmitMessage.classList.remove("hidden");
    laneSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });

  lanePhotos.addEventListener("change",()=>showPhotoNames(lanePhotos,lanePhotoList));

  sweeperForm.addEventListener("submit", (e) => {
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
    sweeperSubmitMessage.classList.remove("hidden");
    sweeperSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });
  sweeperPhotos.addEventListener("change",()=>showPhotoNames(sweeperPhotos,sweeperPhotoList));

  equipmentForm.addEventListener("submit", (e) => {
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
    equipmentSubmitMessage.classList.remove("hidden");
    equipmentSubmitMessage.scrollIntoView({behavior:"smooth",block:"center"});
  });
  equipmentPhotos.addEventListener("change",()=>showPhotoNames(equipmentPhotos,equipmentPhotoList));

  tmaForm.addEventListener("submit", (e) => {
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
    if(currentDetailView === "mechanicLock" || currentDetailView === "mechanicPersonal"){
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

  function showUtilityPage(page){
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
      sheetTitle.textContent = "Fleet District Managers"; utilityPageHeading.textContent = "Fleet District Managers";
      utilityPageText.textContent = "Fleet District Managers content will be added here.";
    }

    window.scrollTo({top:0,left:0,behavior:"auto"});
  }

  document.querySelectorAll("[data-fleet-location]").forEach(btn=>{
    btn.addEventListener("click",()=>showMechanicRoster(btn.dataset.fleetLocation));
  });

  addMechanicBtn.addEventListener("click",()=>{
    if(!currentFleetLocation) return;
    mechanicAddError.classList.add("hidden");
    newMechanicName.value = "";
    newMechanicPin.value = "";
    confirmMechanicPin.value = "";
    addMechanicPanel.classList.remove("hidden");
    newMechanicName.focus();
  });

  cancelMechanicBtn.addEventListener("click",()=>{
    addMechanicPanel.classList.add("hidden");
    mechanicAddError.classList.add("hidden");
    newMechanicName.value = "";
    newMechanicPin.value = "";
    confirmMechanicPin.value = "";
  });

  saveMechanicBtn.addEventListener("click",async()=>{
    const name = newMechanicName.value.trim();
    const pin = newMechanicPin.value.trim();
    const confirmPin = confirmMechanicPin.value.trim();
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

    const mechanics = getMechanics(currentFleetLocation).map(m =>
      typeof m === "string" ? {name:m,pinHash:""} : m
    );
    if(mechanics.some(m=>m.name.toLowerCase()===name.toLowerCase())){
      mechanicAddError.textContent = "A mechanic with that name already exists at this location.";
      mechanicAddError.classList.remove("hidden");
      return;
    }

    mechanics.push({name, pinHash: await hashPin(pin)});
    saveMechanics(currentFleetLocation, mechanics);
    addMechanicPanel.classList.add("hidden");
    newMechanicName.value = "";
    newMechanicPin.value = "";
    confirmMechanicPin.value = "";
    renderMechanicRoster();
  });

  [newMechanicName,newMechanicPin,confirmMechanicPin].forEach(field=>{
    field.addEventListener("keydown",(e)=>{
      if(e.key === "Enter"){
        e.preventDefault();
        saveMechanicBtn.click();
      }
    });
  });

  unlockMechanicBtn.addEventListener("click",async()=>{
    if(!selectedMechanic) return;
    mechanicPinError.classList.add("hidden");

    if(!selectedMechanic.pinHash){
      mechanicPinError.textContent = "This mechanic does not have a PIN yet.";
      mechanicPinError.classList.remove("hidden");
      return;
    }

    const enteredHash = await hashPin(mechanicPinEntry.value.trim());
    if(enteredHash !== selectedMechanic.pinHash){
      mechanicPinError.textContent = "Incorrect PIN. Try again.";
      mechanicPinError.classList.remove("hidden");
      mechanicPinEntry.select();
      return;
    }
    showMechanicPersonalScreen();
  });

  mechanicPinEntry.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
      e.preventDefault();
      unlockMechanicBtn.click();
    }
  });

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
  setTimeout(showHome,5000);
})();