"use strict";

/* =========================
   CARRUSEL
========================= */
const slides = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
let idx = 0;

function updateSlide() {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === idx);
    s.style.zIndex = i === idx ? 2 : 1;
  });
}

if (prev && next) {
  prev.addEventListener("click", () => {
    idx = (idx - 1 + slides.length) % slides.length;
    updateSlide();
  });

  next.addEventListener("click", () => {
    idx = (idx + 1) % slides.length;
    updateSlide();
  });
}

setInterval(() => {
  idx = (idx + 1) % slides.length;
  updateSlide();
}, 5000);

updateSlide();

/* =========================
   MENÚ HAMBURGUESA (FIX REAL)
========================= */
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("open");
    });
  });
}

/* =========================
   DESACTIVAR SPARKLES EN MÓVIL
========================= */
const isMobile = window.matchMedia("(max-width: 428px)").matches;
const sparklesContainer = document.querySelector(".sparkles");

if (sparklesContainer && !isMobile) {
  const sparkCount = 40;
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let i = 0; i < sparkCount; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * w + "px";
    s.style.top = Math.random() * h + "px";
    sparklesContainer.appendChild(s);

    gsap.to(s, {
      opacity: Math.random(),
      duration: 1.5 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
    });
  }
}

/* =========================
   LOGO → RELOAD
========================= */
const navLogo = document.querySelector(".logo");
if (navLogo) {
  navLogo.addEventListener("click", () => {
    window.location.reload();
  });
}
