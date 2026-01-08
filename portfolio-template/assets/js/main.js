"use strict";

// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Carrusel automático
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNext() {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
}

// Cambio automático cada 3 segundos
setInterval(showNext, 3000);
