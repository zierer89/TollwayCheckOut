(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");
  const sheet = document.getElementById("sheet");
  const continueBtn = document.getElementById("continueBtn");
  const backBtn = document.getElementById("backBtn");
  const today = document.getElementById("today");
  const sheetTitle = document.getElementById("sheetTitle");
  const placeholderTitle = document.getElementById("placeholderTitle");

  const sheetNames = {
    tractor: "Tractor Checkout",
    equipment: "Equipment Checkout",
    "lane-blade": "Lane Blade Inspection",
    help: "HELP Checkout",
    sweeper: "Sweeper Checkout",
    truck: "Truck Checkout",
    tma: "TMA Checkout",
    "message-board": "Message Board Checkout"
  };

  today.textContent = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  function showHome() {
    splash.classList.add("hidden");
    sheet.classList.add("hidden");
    home.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  function showSheet(key) {
    const title = sheetNames[key];
    if (!title) return;

    sheetTitle.textContent = title;
    placeholderTitle.textContent = `${title} form`;
    splash.classList.add("hidden");
    home.classList.add("hidden");
    sheet.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  continueBtn.addEventListener("click", showHome);
  backBtn.addEventListener("click", showHome);

  document.querySelectorAll("[data-sheet]").forEach((button) => {
    button.addEventListener("click", () => showSheet(button.dataset.sheet));
  });

  setTimeout(showHome, 3000);
})();
