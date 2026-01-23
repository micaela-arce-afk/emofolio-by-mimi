"use strict";

/* BURGER */
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* LOGO */
const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

/* STARS */
function generateStars(selector, count = 60) {
  const container = document.querySelector(selector);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.position = "absolute";
    s.style.width = s.style.height = Math.random() * 2 + 1 + "px";
    s.style.background = "#fff";
    s.style.borderRadius = "50%";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    container.appendChild(s);

    gsap.to(s, {
      opacity: Math.random(),
      duration: 1 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
    });
  }
}

generateStars(".hero-works .stars-container");
// Refrescar embeds de TikTok
window.addEventListener("load", () => {
  if (window.tiktokEmbed) {
    window.tiktokEmbed.load();
  }
});
