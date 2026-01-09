"use strict";

// ESTRELLAS DINÁMICAS PARA WORKS Y CONTACT
function generateStars(containerSelector, starCount = 80) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");
    star.style.left = Math.random() * container.offsetWidth + "px";
    star.style.top = Math.random() * container.offsetHeight + "px";
    const size = Math.random() * 2 + 1;
    star.style.width = star.style.height = size + "px";
    star.style.opacity = 0.5 + Math.random() * 0.5;
    star.style.position = "absolute";
    star.style.background = "#fff";
    star.style.borderRadius = "50%";
    star.style.animation = `starFloat ${
      1 + Math.random() * 2
    }s linear infinite`;
    container.appendChild(star);
  }
}

// Animación CSS para estrellas
const style = document.createElement("style");
style.innerHTML = `
@keyframes starFloat {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}`;
document.head.appendChild(style);

// Generar estrellas
generateStars(".hero-works .stars-container");
generateStars(".hero-contact .stars-container");
