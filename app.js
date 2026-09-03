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

  truckPhotos.addEventListener("change", () => showPhotoNames(truckPhotos, truckPhotoList));
  tractorPhotos.addEventListener("change", () => showPhotoNames(tractorPhotos, tractorPhotoList));

  document.querySelectorAll("[data-sheet]").forEach(btn=>{
    btn.addEventListener("click",()=>showSheet(btn.dataset.sheet));
  });

  backBtn.addEventListener("click",showHome);
  homeBtn.addEventListener("click",showHome);

  buildChecklist();
  makeChecklist(tractorChecklist, tractorItems);
  setTimeout(showHome,5000);
})();