(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");
  const sheet = document.getElementById("sheet");
  const backBtn = document.getElementById("backBtn");
  const homeBtn = document.getElementById("homeBtn");
  const sheetTitle = document.getElementById("sheetTitle");
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

  function showHome(){
    splash.classList.add("hidden");
    sheet.classList.add("hidden");
    home.classList.remove("hidden");
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

    truckForm.classList.add("hidden");
    tractorForm.classList.add("hidden");
    tmaForm.classList.add("hidden");
    equipmentForm.classList.add("hidden");
    sweeperForm.classList.add("hidden");
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

  backBtn.addEventListener("click",showHome);
  homeBtn.addEventListener("click",showHome);


  const mainSettingsButton = document.getElementById("mainSettingsButton");
  const mainSettingsDropdown = document.getElementById("mainSettingsDropdown");
  const settingsPage = document.getElementById("settingsPage");
  const aboutPage = document.getElementById("aboutPage");

  function closeMainSettingsMenu(){
    mainSettingsDropdown.classList.add("hidden");
    mainSettingsButton.setAttribute("aria-expanded","false");
  }

  mainSettingsButton.addEventListener("click",(e)=>{
    e.stopPropagation();
    const opening=mainSettingsDropdown.classList.contains("hidden");
    mainSettingsDropdown.classList.toggle("hidden");
    mainSettingsButton.setAttribute("aria-expanded", opening ? "true" : "false");
  });

  document.addEventListener("click",(e)=>{
    if(!e.target.closest(".main-settings-menu")) closeMainSettingsMenu();
  });

  document.querySelectorAll("[data-menu-page]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      closeMainSettingsMenu();
      home.classList.add("hidden");
      sheet.classList.add("hidden");
      settingsPage.classList.add("hidden");
      aboutPage.classList.add("hidden");
      (btn.dataset.menuPage==="settings" ? settingsPage : aboutPage).classList.remove("hidden");
      window.scrollTo(0,0);
    });
  });

  document.querySelectorAll(".menu-back-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      settingsPage.classList.add("hidden");
      aboutPage.classList.add("hidden");
      home.classList.remove("hidden");
      window.scrollTo(0,0);
    });
  });

  buildChecklist();
  makeChecklist(tractorChecklist, tractorItems);
  makeChecklist(tmaChecklist, tmaItems);
  makeChecklist(equipmentChecklist, equipmentItems);
  makeChecklist(sweeperChecklist, sweeperItems);
  setTimeout(showHome,5000);
})();