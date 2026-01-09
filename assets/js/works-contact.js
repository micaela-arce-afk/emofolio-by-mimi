"use strict";

// ESTRELLAS DINÁMICAS PARA WORKS Y CONTACT CON GSAP
function generateStars(containerSelector, starCount = 80) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");
    star.style.left = Math.random() * container.offsetWidth + "px";
    star.style.top = Math.random() * container.offsetHeight + "px";
    const size = Math.random() * 2 + 1;
    star.style.width = star.style.height = size + "px";
    star.style.opacity = Math.random() * 0.8 + 0.2;
    star.style.position = "absolute";
    star.style.background = "#fff";
    star.style.borderRadius = "50%";
    container.appendChild(star);

    // Animación GSAP
    gsap.to(star, {
      y: -10 - Math.random() * 10, // movimiento vertical aleatorio
      opacity: Math.random() * 0.5 + 0.3, // parpadeo
      duration: 1 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2,
    });
  }
}

// Generar estrellas en secciones
generateStars(".hero-works .stars-container");
generateStars(".hero-contact .stars-container");
