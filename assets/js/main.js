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

// SPARKLES HERO (GSAP animado)
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
  sparklesContainer.appendChild(s);

  // Animación GSAP de parpadeo
  gsap.to(s, {
    opacity: Math.random() * 0.8 + 0.2,
    duration: 1.5 + Math.random() * 2,
    repeat: -1,
    yoyo: true,
    delay: Math.random() * 2,
  });
}

// PARALLAX FOTO ABOUT
window.addEventListener("scroll", () => {
  const photo = document.querySelector(".about-photo");
  if (photo) {
    const y = window.scrollY;
    photo.style.transform = `translateY(${y * 0.08}px)`;
  }
});

// ESTRELLAS OPCIONALES EN ABOUT (GSAP)
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
    starsContainer.appendChild(star);

    gsap.to(star, {
      opacity: Math.random() * 0.8 + 0.2,
      duration: 1.5 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 2,
    });
  }
}

// CLICK LOGO NAV
const navLogo = document.querySelector(".logo");
if (navLogo) {
  navLogo.addEventListener("click", () => {
    window.location.reload();
  });
}

// ANIMACIONES GSAP ADICIONALES (opcional)
gsap.from(".about-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});
gsap.from(".about-text", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});
// MENU HAMBURGUESA
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("open");
  });
}
const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
