(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");
  const sheet = document.getElementById("sheet");
  const backBtn = document.getElementById("backBtn");
  const homeBtn = document.getElementById("homeBtn");
  const sheetTitle = document.getElementById("sheetTitle");
  const detailTitle = document.getElementById("detailTitle");
  const bigIcon = document.getElementById("bigIcon");

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
    window.scrollTo(0,0);
  }

  document.querySelectorAll("[data-sheet]").forEach(btn=>{
    btn.addEventListener("click",()=>showSheet(btn.dataset.sheet));
  });

  backBtn.addEventListener("click",showHome);
  homeBtn.addEventListener("click",showHome);

  setTimeout(showHome,5000);
})();
