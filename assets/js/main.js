// Light/Dark Mode
const modeBtn = document.getElementById("darkModeBtn");
let dark = false;

modeBtn.addEventListener("click", () => {
  dark = !dark;
  if (dark) {
    document.body.style.background = "#111";
    modeBtn.textContent = "Light Mode";
  } else {
    document.body.style.background = "#f5f5f5";
    modeBtn.textContent = "Dark Mode";
  }
});

// Carrusel funcional
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

// automatico cada 5s
setInterval(() => {
  idx = (idx + 1) % slides.length;
  updateSlide();
}, 5000);
