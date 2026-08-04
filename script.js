// ================= CONFIG =================
const LOVE_DATE_DAY = 30; // tanggal love di kalender Agustus
const CALENDAR_FIRST_WEEKDAY = 6; // 1 Agustus 2026 = Sabtu -> index 6 (S M T W T F S)
const CALENDAR_DAYS_IN_MONTH = 31;

const PIN_CODE = "20100830"; // tahun-bulan-tanggal lahir
const AUDIO_TRIM_START = 149; // 2:29
const AUDIO_TRIM_END = 238;   // 3:58

const BOUQUET_MESSAGES = [
  "Makasih udah jadi alasan aku senyum setiap hari.",
  "Semoga semua mimpi kamu pelan-pelan jadi kenyataan.",
  "Kamu tuh berharga, jangan lupa itu ya.",
  "Peluk jauh buat kamu yang lagi baca ini.",
  "Sehat-sehat terus, jangan lupa makan.",
  "Kamu udah hebat sejauh ini, beneran.",
  "Semoga hari-hari kamu selalu dikelilingi hal baik.",
  "Aku bersyukur banget ada kamu.",
  "Happy birthday, semoga makin bahagia tiap tahunnya.",
  "Kamu berharga banget, jangan lupa itu ya, banyak orang sayang kamu."
];

const HEART_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 29'%3E%3Cpath fill='%23f7669e' d='M16 29S0 18.5 0 8.8C0 3.9 3.9 0 8.7 0c2.9 0 5.6 1.4 7.3 3.7C17.7 1.4 20.4 0 23.3 0 28.1 0 32 3.9 32 8.8 32 18.5 16 29 16 29z'/%3E%3C/svg%3E";
const FLOWER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cg fill='%23ffb3d1' stroke='%23e04b86' stroke-width='1.5'%3E%3Cellipse cx='40' cy='18' rx='11' ry='16'/%3E%3Cellipse cx='40' cy='62' rx='11' ry='16'/%3E%3Cellipse cx='18' cy='40' rx='16' ry='11'/%3E%3Cellipse cx='62' cy='40' rx='16' ry='11'/%3E%3Cellipse cx='24' cy='24' rx='11' ry='16' transform='rotate(-45 24 24)'/%3E%3Cellipse cx='56' cy='56' rx='11' ry='16' transform='rotate(-45 56 56)'/%3E%3Cellipse cx='56' cy='24' rx='11' ry='16' transform='rotate(45 56 24)'/%3E%3Cellipse cx='24' cy='56' rx='11' ry='16' transform='rotate(45 24 56)'/%3E%3C/g%3E%3Ccircle cx='40' cy='40' r='11' fill='%23f7669e'/%3E%3C/svg%3E";

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
    h.style.backgroundImage = `url("${HEART_SVG}")`;
    const duration = 9 + Math.random() * 10;
    const delay = Math.random() * 12;
    h.style.animationDuration = duration + "s";
    h.style.animationDelay = delay + "s";
    layer.appendChild(h);
  }
}

// ================= BACKGROUND FLOATING FLOWERS =================
function spawnBgFlowers() {
  const layer = document.getElementById("bgFlowers");
  if (!layer) return;
  const count = 10;
  for (let i = 0; i < count; i++) {
    const f = document.createElement("div");
    f.className = "float-flower ico";
    const size = 20 + Math.random() * 22;
    f.style.width = size + "px";
    f.style.height = size + "px";
    f.style.left = Math.random() * 100 + "%";
    f.style.backgroundImage = `url("${FLOWER_SVG}")`;
    const duration = 12 + Math.random() * 12;
    const delay = Math.random() * 16;
    f.style.animationDuration = duration + "s";
    f.style.animationDelay = delay + "s";
    layer.appendChild(f);
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

// ================= PIN SCREEN =================
function initPinScreen() {
  const pinScreen = document.getElementById("pinScreen");
  const cover = document.getElementById("cover");
  const dotsWrap = document.getElementById("pinDots");
  const errorEl = document.getElementById("pinError");
  const keypad = document.getElementById("keypad");
  if (!pinScreen || !dotsWrap || !keypad) return;

  let entered = "";

  function renderDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < PIN_CODE.length; i++) {
      const slot = document.createElement("span");
      slot.className = "pin-heart-slot" + (i < entered.length ? " filled" : "");
      dotsWrap.appendChild(slot);
    }
  }

  function showError() {
    errorEl.hidden = false;
    dotsWrap.classList.add("shake");
    setTimeout(() => {
      dotsWrap.classList.remove("shake");
      entered = "";
      renderDots();
    }, 450);
  }

  function unlockSite() {
    pinScreen.classList.add("hide");
    setTimeout(() => {
      pinScreen.hidden = true;
      cover.hidden = false;
    }, 500);
  }

  function checkPin() {
    if (entered.length !== PIN_CODE.length) return;
    if (entered === PIN_CODE) {
      errorEl.hidden = true;
      unlockSite();
    } else {
      showError();
    }
  }

  keypad.addEventListener("click", (e) => {
    const btn = e.target.closest(".key");
    if (!btn) return;
    const key = btn.dataset.key;

    if (key === "clear") {
      entered = "";
      errorEl.hidden = true;
      renderDots();
      return;
    }
    if (key === "back") {
      entered = entered.slice(0, -1);
      errorEl.hidden = true;
      renderDots();
      return;
    }
    if (entered.length >= PIN_CODE.length) return;
    entered += key;
    errorEl.hidden = true;
    renderDots();
    if (entered.length === PIN_CODE.length) {
      setTimeout(checkPin, 150);
    }
  });

  renderDots();
}

// ================= COVER / GIFT BOX OPEN =================
function buildGiftBurstPieces() {
  const burst = document.getElementById("giftBurst");
  if (!burst) return;
  burst.innerHTML = "";
  const total = 16;
  for (let i = 0; i < total; i++) {
    const piece = document.createElement("span");
    piece.className = "burst-piece";
    const isHeart = i % 2 === 0;
    piece.style.backgroundImage = `url("${isHeart ? HEART_SVG : FLOWER_SVG}")`;
    piece.style.backgroundSize = "contain";
    piece.style.backgroundRepeat = "no-repeat";
    const angle = (i / total) * Math.PI * 2;
    const dist = 90 + Math.random() * 70;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    piece.style.setProperty("--tx", `calc(-50% + ${tx}px)`);
    piece.style.setProperty("--ty", `calc(-50% + ${ty}px)`);
    piece.style.animationDelay = Math.random() * 0.15 + "s";
    burst.appendChild(piece);
  }
}

function initCoverOpen() {
  const giftBox = document.getElementById("giftBox");
  const cover = document.getElementById("cover");
  const main = document.getElementById("mainContent");
  if (!giftBox) return;

  let opened = false;

  function openSite() {
    if (opened) return;
    opened = true;
    buildGiftBurstPieces();
    giftBox.classList.add("opening");

    setTimeout(() => {
      cover.classList.add("hide");
    }, 500);

    setTimeout(() => {
      cover.style.display = "none";
      main.hidden = false;
      main.classList.add("reveal");
      document.body.style.overflow = "auto";
      initScrollReveal();
      // try to autoplay music softly after user gesture
      playMusic();
    }, 1050);
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

// ================= MUSIC (local audio, trimmed + custom loop) =================
let musicStarted = false;

function setPlayingUI(isPlaying) {
  const status = document.getElementById("musicStatus");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const vinyl = document.getElementById("vinyl");
  if (!status) return;
  status.textContent = isPlaying ? "Now Playing" : "Paused";
  playIcon.hidden = isPlaying;
  pauseIcon.hidden = !isPlaying;
  vinyl.classList.toggle("spin", isPlaying);
}

function playMusic() {
  const audio = document.getElementById("bgAudio");
  if (!audio) return;
  if (!musicStarted) {
    musicStarted = true;
    audio.currentTime = AUDIO_TRIM_START;
  }
  const p = audio.play();
  if (p && p.catch) p.catch(() => {});
}

function pauseMusic() {
  const audio = document.getElementById("bgAudio");
  if (!audio) return;
  audio.pause();
}

function initMusicToggle() {
  const btn = document.getElementById("musicToggle");
  const audio = document.getElementById("bgAudio");
  if (!btn || !audio) return;

  btn.addEventListener("click", () => {
    if (audio.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  });

  audio.addEventListener("play", () => setPlayingUI(true));
  audio.addEventListener("pause", () => setPlayingUI(false));

  // Custom loop window: first play 2:29 -> 3:58, every loop after that 0:00 -> 3:58
  audio.addEventListener("timeupdate", () => {
    if (audio.currentTime >= AUDIO_TRIM_END) {
      audio.currentTime = 0;
      const p = audio.play();
      if (p && p.catch) p.catch(() => {});
    }
  });
  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    const p = audio.play();
    if (p && p.catch) p.catch(() => {});
  });

  setPlayingUI(false);
}

// ================= ENVELOPE OPEN =================
function initEnvelope() {
  const wrap = document.getElementById("envelopeWrap");
  if (!wrap) return;
  wrap.addEventListener("click", () => {
    wrap.classList.toggle("opened");
  });
}

// ================= DIGITAL BOUQUET =================
function initBouquet() {
  const field = document.getElementById("bouquetField");
  const note = document.getElementById("bouquetNote");
  const noteText = document.getElementById("bouquetNoteText");
  if (!field) return;

  const cols = 5;
  const rows = 2;
  const messages = [...BOUQUET_MESSAGES];

  let index = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const flower = document.createElement("div");
      flower.className = "bouquet-flower";
      const jitterX = (Math.random() - 0.5) * 14;
      const jitterY = (Math.random() - 0.5) * 14;
      const leftPct = (c + 0.5) * (100 / cols) + jitterX * 0.2;
      const topPx = r * 140 + 20 + jitterY;
      flower.style.left = `calc(${leftPct}% - 27px)`;
      flower.style.top = topPx + "px";
      flower.style.animationDelay = Math.random() * 2 + "s";
      const msg = messages[index % messages.length];
      index++;
      flower.addEventListener("click", () => {
        noteText.textContent = msg;
        note.hidden = false;
        flower.classList.add("picked");
      });
      field.appendChild(flower);
    }
  }
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
  spawnBgFlowers();
  buildCalendar();
  initPinScreen();
  initCoverOpen();
  initMusicToggle();
  initEnvelope();
  initBouquet();
  initClickHearts();
  document.body.style.overflow = "hidden";
});
