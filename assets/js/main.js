"use strict";

// CARRUSEL
const slides = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
let idx = 0;

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

prev.addEventListener("click", () => {
  idx = (idx - 1 + slides.length) % slides.length;
  updateSlide();
});
next.addEventListener("click", () => {
  idx = (idx + 1) % slides.length;
  updateSlide();
});

// Auto carrusel
setInterval(() => {
  idx = (idx + 1) % slides.length;
  updateSlide();
}, 5000);

updateSlide();

// SPARKLES HERO
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
  s.style.animationDuration = 1.5 + Math.random() * 2 + "s";
  s.style.animationDelay = Math.random() * 2 + "s";
  sparklesContainer.appendChild(s);
}

// PARALLAX FOTO ABOUT
window.addEventListener("scroll", () => {
  const photo = document.querySelector(".about-photo");
  if (photo) {
    const y = window.scrollY;
    photo.style.transform = `translateY(${y * 0.08}px)`;
  }
});

// BACK TO TOP
const pageTopBtn = document.getElementById("pageTopBtn");
if (pageTopBtn) {
  pageTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// CLICK LOGO NAV
const navLogo = document.querySelector(".logo");
if (navLogo) {
  navLogo.addEventListener("click", (e) => {
    e.preventDefault();
    // Opción 1: recargar la página
    window.location.href = window.location.pathname;

    // Opción 2: scroll suave al Hero (descomenta si prefieres esto)
    // const hero = document.querySelector(".hero");
    // hero.scrollIntoView({ behavior: "smooth" });
  });
}

// ESTRELLAS OPCIONALES EN ABOUT
const aboutSection = document.querySelector(".about-section");
if (aboutSection) {
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("about-stars");
  aboutSection.appendChild(starsContainer);

  const starCountAbout = 50;
  const wAbout = aboutSection.offsetWidth;
  const hAbout = aboutSection.offsetHeight;

  for (let i = 0; i < starCountAbout; i++) {
    const star = document.createElement("span");
    star.style.left = Math.random() * wAbout + "px";
    star.style.top = Math.random() * hAbout + "px";
    star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
    star.style.opacity = Math.random();
    star.style.animationDuration = 1.5 + Math.random() * 2 + "s";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
  }
}
