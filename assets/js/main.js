"use strict";

// Carrusel
const slides = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
let idx = 0;

function updateSlide() {
  slides.forEach((s, i) => s.classList.toggle("active", i === idx));
}

prev.addEventListener("click", () => {
  idx = (idx - 1 + slides.length) % slides.length;
  updateSlide();
});

next.addEventListener("click", () => {
  idx = (idx + 1) % slides.length;
  updateSlide();
});

// Automático cada 5s
setInterval(() => {
  idx = (idx + 1) % slides.length;
  updateSlide();
}, 5000);

// Sparkles dinámicos alrededor de MIKAN
const sparklesContainer = document.querySelector(".sparkles");
const sparkCount = 50;
const w = window.innerWidth;
const h = window.innerHeight;
for (let i = 0; i < sparkCount; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * w + "px";
  s.style.top = Math.random() * h + "px";
  s.style.width = s.style.height = Math.random() * 2 + 1 + "px";
  s.style.opacity = Math.random();
  s.style.animationDuration = 0.8 + Math.random() * 1 + "s"; // más rápido
  s.style.animationDelay = Math.random() * 0.5 + "s";
  sparklesContainer.appendChild(s);
}
