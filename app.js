(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");
  const sheet = document.getElementById("sheet");
  const continueBtn = document.getElementById("continueBtn");
  const backBtn = document.getElementById("backBtn");
  const today = document.getElementById("today");
  const sheetTitle = document.getElementById("sheetTitle");
  const sheetDescription = document.getElementById("sheetDescription");

  const sheets = {
    truck: {
      title: "Driver's Truck Inspection Sheet",
      description: "Daily truck inspection and repair reporting."
    },
    loader: {
      title: "Loader Checkout Sheet",
      description: "Loader pre-use inspection."
    },
    backhoe: {
      title: "Backhoe / Excavator Checkout Sheet",
      description: "Heavy equipment pre-use inspection."
    },
    mower: {
      title: "Tractor / Mower Checkout Sheet",
      description: "Tractor and mowing equipment pre-use inspection."
    },
    trailer: {
      title: "Trailer Checkout Sheet",
      description: "Trailer and coupling inspection."
    },
    small: {
      title: "Small Equipment Checkout Sheet",
      description: "Small tools and specialty equipment inspection."
    }
  };

  const now = new Date();
  today.textContent = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  function showHome() {
    splash.classList.add("hidden");
    sheet.classList.add("hidden");
    home.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showSheet(key) {
    const config = sheets[key];
    if (!config) return;
    sheetTitle.textContent = config.title;
    sheetDescription.textContent = config.description;
    splash.classList.add("hidden");
    home.classList.add("hidden");
    sheet.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  continueBtn.addEventListener("click", showHome);
  backBtn.addEventListener("click", showHome);

  document.querySelectorAll("[data-sheet]").forEach((button) => {
    button.addEventListener("click", () => showSheet(button.dataset.sheet));
  });

  // Splash automatically advances after 1.8 seconds.
  const splashTimer = window.setTimeout(showHome, 1800);
  continueBtn.addEventListener("click", () => window.clearTimeout(splashTimer), { once: true });

  // Optional service worker registration for installable/offline behavior.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {
        // App still works normally if the service worker is unavailable.
      });
    });
  }
})();
