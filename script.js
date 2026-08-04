// ================= CONFIG =================
const LOVE_DATE_DAY = 30; // tanggal love di kalender Agustus
const CALENDAR_MONTH_LABEL = "Agustus";
const CALENDAR_FIRST_WEEKDAY = 6; // 1 Agustus 2026 = Sabtu -> index 6 (S M T W T F S, Sabtu index 6)
const CALENDAR_DAYS_IN_MONTH = 31;

// ================= BACKGROUND FLOATING HEARTS =================
function spawnBgHearts() {
  const layer = document.getElementById("bgHearts");
  const count = 14;
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "float-heart ico";
    const size = 12 + Math.random() * 18;
    h.style.width = size + "px";
    h.style.height = size + "px";
    h.style.left = Math.random() * 100 + "%";
    h.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 29'%3E%3Cpath fill='%23f7669e' d='M16 29S0 18.5 0 8.8C0 3.9 3.9 0 8.7 0c2.9 0 5.6 1.4 7.3 3.7C17.7 1.4 20.4 0 23.3 0 28.1 0 32 3.9 32 8.8 32 18.5 16 29 16 29z'/%3E%3C/svg%3E\")";
    const duration = 9 + Math.random() * 10;
    const delay = Math.random() * 12;
    h.style.animationDuration = duration + "s";
    h.style.animationDelay = delay + "s";
    layer.appendChild(h);
  }
}

// ================= CALENDAR =================
function buildCalendar() {
  const grid = document.getElementById("calGrid");
  if (!grid) return;
  grid.innerHTML = "";

  for (let i = 0; i < CALENDAR_FIRST_WEEKDAY; i++) {
    const empty = document.createElement("span");
    empty.className = "cal-day";
    grid.appendChild(empty);
  }

  for (let d = 1; d <= CALENDAR_DAYS_IN_MONTH; d++) {
    const cell = document.createElement("span");
    cell.className = "cal-day";
    cell.textContent = d;
    if (d === LOVE_DATE_DAY) {
      cell.classList.add("love-day");
      cell.innerHTML = `
        <svg class="love-day-heart-svg" viewBox="0 0 40 36" aria-hidden="true">
          <path d="M20 33C20 33 3 22 3 11.5C3 5.5 7.8 1.5 13 1.5C16 1.5 18.5 3.2 20 5.8C21.5 3.2 24 1.5 27 1.5C32.2 1.5 37 5.5 37 11.5C37 22 20 33 20 33Z"
            fill="none" stroke="#ffffff" stroke-width="2.4"/>
        </svg>
        <span style="position:relative;z-index:1;">${d}</span>
      `;
    }
    grid.appendChild(cell);
  }
}

// ================= COVER / GIFT BOX OPEN =================
function initCoverOpen() {
  const giftBox = document.getElementById("giftBox");
  const cover = document.getElementById("cover");
  const main = document.getElementById("mainContent");

  function openSite() {
    cover.classList.add("hide");
    setTimeout(() => {
      cover.style.display = "none";
      main.hidden = false;
      main.classList.add("reveal");
      document.body.style.overflow = "auto";
      initScrollReveal();
      // try to autoplay music softly after user gesture
      playMusic();
    }, 600);
  }

  giftBox.addEventListener("click", openSite);
  giftBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openSite();
    }
  });
}

// ================= SCROLL REVEAL =================
function initScrollReveal() {
  const targets = document.querySelectorAll(".panel");
  targets.forEach((t) => t.classList.add("reveal-on-scroll"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((t) => io.observe(t));
}

// ================= MUSIC (Spotify embed control) =================
let musicPlaying = false;

function playMusic() {
  const status = document.getElementById("musicStatus");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const vinyl = document.getElementById("vinyl");
  musicPlaying = true;
  status.textContent = "Now Playing";
  playIcon.hidden = true;
  pauseIcon.hidden = false;
  vinyl.classList.add("spin");
}

function pauseMusic() {
  const status = document.getElementById("musicStatus");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const vinyl = document.getElementById("vinyl");
  musicPlaying = false;
  status.textContent = "Paused";
  playIcon.hidden = false;
  pauseIcon.hidden = true;
  vinyl.classList.remove("spin");
}

function initMusicToggle() {
  const btn = document.getElementById("musicToggle");
  const iframe = document.getElementById("spotifyFrame");

  btn.addEventListener("click", () => {
    if (musicPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
    // Re-render the iframe src to (re)trigger Spotify's own playback UI.
    // Spotify's embedded iframe handles actual audio playback itself;
    // this button mirrors that state visually for the custom card.
    if (iframe && !iframe.dataset.touched) {
      iframe.dataset.touched = "true";
    }
  });
}

// ================= ENVELOPE OPEN =================
function initEnvelope() {
  const wrap = document.getElementById("envelopeWrap");
  if (!wrap) return;
  wrap.addEventListener("click", () => {
    wrap.classList.toggle("opened");
  });
}

// ================= CLICK HEART BURST =================
function initClickHearts() {
  const layer = document.getElementById("clickHearts");
  document.addEventListener("click", (e) => {
    for (let i = 0; i < 3; i++) {
      const h = document.createElement("div");
      h.className = "click-heart";
      const offsetX = (Math.random() - 0.5) * 40;
      h.style.left = e.clientX + offsetX + "px";
      h.style.top = e.clientY + "px";
      h.style.animationDelay = i * 0.06 + "s";
      layer.appendChild(h);
      setTimeout(() => h.remove(), 1000);
    }
  });
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  spawnBgHearts();
  buildCalendar();
  initCoverOpen();
  initMusicToggle();
  initEnvelope();
  initClickHearts();
  document.body.style.overflow = "hidden";
});
