"use strict";

// --------------------
// CARRUSEL
// --------------------
const slides = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
let idx = 0;

// Función para actualizar slide con fade smooth
function updateSlide() {
  slides.forEach((s, i) => {
    if (i === idx) {
      s.style.opacity = 1;
      s.style.zIndex = 2;
    } else {
      s.style.opacity = 0;
      s.style.zIndex = 1;
    }
  });
}

// Flechas manuales
prev.addEventListener("click", () => {
  idx = (idx - 1 + slides.length) % slides.length;
  updateSlide();
});
next.addEventListener("click", () => {
  idx = (idx + 1) % slides.length;
  updateSlide();
});

// Carrusel automático cada 5 segundos
setInterval(() => {
  idx = (idx + 1) % slides.length;
  updateSlide();
}, 5000);

// --------------------
// SPARKLES alrededor del MIKAN
// --------------------
const sparklesContainer = document.querySelector(".sparkles");
const sparkCount = 50;
const wSpark = window.innerWidth;
const hSpark = window.innerHeight;

for (let i = 0; i < sparkCount; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * wSpark + "px";
  s.style.top = Math.random() * hSpark + "px";
  s.style.width = s.style.height = Math.random() * 2 + 1 + "px";
  s.style.opacity = Math.random();
  s.style.animationDuration = 1.5 + Math.random() * 2 + "s"; // más lento y suave
  s.style.animationDelay = Math.random() * 2 + "s";
  sparklesContainer.appendChild(s);
}

// Inicializar el primer slide visible
updateSlide();
