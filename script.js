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
const STAR_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath fill='%23ffd35e' stroke='%23e0a53a' stroke-width='1.5' d='M30 4l7 16 17 2-13 12 4 17-15-9-15 9 4-17-13-12 17-2z'/%3E%3C/svg%3E";
const SPARKLE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath fill='%23ff8fbb' d='M20 0c1 9 3 15 20 20-17 5-19 11-20 20-1-9-3-15-20-20 17-5 19-11 20-20z'/%3E%3C/svg%3E";
const BOW_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 60'%3E%3Cpath d='M45 30 C30 5,5 5,5 22 C5 38,28 38,45 30 C28 38,5 38,5 22' fill='%23ffb3d1' stroke='%23e04b86' stroke-width='2'/%3E%3Cpath d='M45 30 C60 5,85 5,85 22 C85 38,62 38,45 30' fill='%23ffc3dc' stroke='%23e04b86' stroke-width='2'/%3E%3Ccircle cx='45' cy='30' r='7' fill='%23f7669e' stroke='%23e04b86' stroke-width='2'/%3E%3C/svg%3E";
const FLOWER2_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Cg fill='%23ffd6e8' stroke='%23e0729e' stroke-width='1'%3E%3Cellipse cx='25' cy='11' rx='7' ry='11'/%3E%3Cellipse cx='25' cy='11' rx='7' ry='11' transform='rotate(72 25 25)'/%3E%3Cellipse cx='25' cy='11' rx='7' ry='11' transform='rotate(144 25 25)'/%3E%3Cellipse cx='25' cy='11' rx='7' ry='11' transform='rotate(216 25 25)'/%3E%3Cellipse cx='25' cy='11' rx='7' ry='11' transform='rotate(288 25 25)'/%3E%3C/g%3E%3Ccircle cx='25' cy='25' r='5.5' fill='%23ffd35e'/%3E%3C/svg%3E";
const CONFETTI_SVGS = [HEART_SVG, FLOWER_SVG, STAR_SVG, SPARKLE_SVG, BOW_SVG];

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
  const wrongSound = document.getElementById("pinWrongSound");
  const correctSound = document.getElementById("pinCorrectSound");
  if (!pinScreen || !dotsWrap || !keypad) return;

  let entered = "";

  function playSound(el, startAt) {
    if (!el) return;
    try {
      el.currentTime = startAt || 0;
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    } catch (e) {}
  }

  function renderDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < PIN_CODE.length; i++) {
      const slot = document.createElement("span");
      slot.className = "pin-heart-slot" + (i < entered.length ? " filled" : "");
      dotsWrap.appendChild(slot);
    }
  }

  function showError() {
    // sound + text fire together, in the same synchronous tick
    playSound(wrongSound);
    errorEl.hidden = false;
    dotsWrap.classList.add("shake");
    setTimeout(() => {
      dotsWrap.classList.remove("shake");
      entered = "";
      renderDots();
    }, 450);
  }

  function unlockSite() {
    // start 0.1s into the clip so it feels snappier / less laggy
    playSound(correctSound, 0.1);
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
    // check immediately (same click/gesture tick) so the sound effect
    // is allowed to play reliably on every attempt, not just the first
    if (entered.length === PIN_CODE.length) {
      checkPin();
    }
  });

  renderDots();
}

// ================= COVER / GIFT BOX OPEN =================
function buildGiftBurstPieces() {
  const burst = document.getElementById("giftBurst");
  if (!burst) return;
  burst.innerHTML = "";
  const total = 22;
  for (let i = 0; i < total; i++) {
    const piece = document.createElement("span");
    piece.className = "burst-piece";
    const svg = CONFETTI_SVGS[i % CONFETTI_SVGS.length];
    piece.style.backgroundImage = `url("${svg}")`;
    piece.style.backgroundSize = "contain";
    piece.style.backgroundRepeat = "no-repeat";
    const size = 12 + Math.random() * 10;
    piece.style.width = size + "px";
    piece.style.height = size + "px";
    const angle = (i / total) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const dist = 90 + Math.random() * 80;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    piece.style.setProperty("--tx", `calc(-50% + ${tx}px)`);
    piece.style.setProperty("--ty", `calc(-50% + ${ty}px)`);
    piece.style.animationDelay = Math.random() * 0.15 + "s";
    burst.appendChild(piece);
  }
}

function buildFullScreenFlowerBurst() {
  const overlay = document.getElementById("giftFlowerOverlay");
  if (!overlay) return;
  overlay.innerHTML = "";
  const variants = [FLOWER_SVG, FLOWER2_SVG];
  const total = 26;
  for (let i = 0; i < total; i++) {
    const el = document.createElement("span");
    const fromLeft = i % 2 === 0;
    el.className = "gift-flower-piece " + (fromLeft ? "from-left" : "from-right");
    const svg = variants[i % variants.length];
    el.style.backgroundImage = `url("${svg}")`;
    const size = 30 + Math.random() * 34;
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.top = 4 + Math.random() * 88 + "%";
    const travel = 38 + Math.random() * 34;
    el.style.setProperty("--travel", travel + "vw");
    const rot = (Math.random() * 70 - 35).toFixed(0);
    el.style.setProperty("--rot", rot + "deg");
    el.style.animationDelay = Math.random() * 0.4 + "s";
    overlay.appendChild(el);
  }
  setTimeout(() => {
    overlay.innerHTML = "";
  }, 2400);
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
    buildFullScreenFlowerBurst();
    giftBox.classList.add("opening");

    setTimeout(() => {
      cover.classList.add("hide");
    }, 600);

    setTimeout(() => {
      cover.style.display = "none";
      main.hidden = false;
      main.classList.add("reveal");
      document.body.style.overflow = "auto";
      initScrollReveal();
      // try to autoplay music softly after user gesture
      playMusic();
    }, 1500);
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

  const width = field.clientWidth || 340;
  const height = field.clientHeight || 340;
  const base = { x: width / 2, y: height - 18 };
  const count = 10;
  const messages = [...BOUQUET_MESSAGES];

  // SVG layer for stems (drawn first, sits behind flowers)
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "bouquet-stem-svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  field.appendChild(svg);

  const positions = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const angleDeg = -65 + t * 130; // fan spread
    const rad = (angleDeg * Math.PI) / 180;
    const radius = 118 + Math.abs(i - (count - 1) / 2) * 11 + (i % 2 === 0 ? 6 : 0);
    const x = base.x + radius * Math.sin(rad);
    const y = base.y - radius * Math.cos(rad) - 26;
    positions.push({ x, y, angleDeg });
  }

  positions.forEach((pos) => {
    const midX = (base.x + pos.x) / 2 + (Math.random() - 0.5) * 12;
    const midY = (base.y + pos.y) / 2;
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      `M ${base.x} ${base.y} Q ${midX} ${midY} ${pos.x} ${pos.y}`
    );
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#3c8a4c");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-linecap", "round");
    svg.appendChild(path);
  });

  // paper wrap around the base of the stems (like real bouquet wrapping)
  const paper = document.createElement("div");
  paper.className = "bouquet-paper-wrap";
  paper.style.left = base.x + "px";
  paper.style.top = base.y - 58 + "px";
  field.appendChild(paper);

  // bow tying the stems at the base
  const bow = document.createElement("div");
  bow.className = "bouquet-bow";
  bow.style.left = base.x + "px";
  bow.style.top = base.y - 8 + "px";
  field.appendChild(bow);

  let index = 0;
  positions.forEach((pos) => {
    const flower = document.createElement("div");
    flower.className = "bouquet-flower";
    flower.style.left = pos.x + "px";
    flower.style.top = pos.y + "px";
    flower.style.animationDelay = Math.random() * 2 + "s";
    const msg = messages[index % messages.length];
    index++;
    flower.addEventListener("click", () => {
      noteText.textContent = msg;
      note.hidden = false;
      flower.classList.remove("plucked");
      // restart the pluck animation every click so it can be reopened repeatedly
      void flower.offsetWidth;
      flower.classList.add("plucked");
    });
    flower.addEventListener("animationend", (e) => {
      if (e.animationName === "flowerPluck") flower.classList.remove("plucked");
    });
    field.appendChild(flower);
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
