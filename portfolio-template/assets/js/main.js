"use strict";

// Dark Mode Toggle con transición suave
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Carrusel
const carouselItems = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-btn.next");
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
});
