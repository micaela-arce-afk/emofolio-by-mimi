"use strict";

// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Carrusel automático + botones
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
let currentIndex = 0;

// Función mostrar siguiente
function showNext() {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
}

// Función mostrar anterior
function showPrev() {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
}

// Cambio automático cada 3 segundos
setInterval(showNext, 3000);

// Botones Next / Prev
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
