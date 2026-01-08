// Light/Dark Mode
const btn = document.getElementById("darkModeBtn");
let darkMode = false;

btn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.background = "#111";
    document.body.style.color = "#fff";
    document.querySelector(".nav-top").style.background = "#222";
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => (a.style.color = "#fff"));
    document.querySelector(".logo").style.color = "#fff";
    btn.textContent = "Light Mode";
  } else {
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#000";
    document.querySelector(".nav-top").style.background = "#000";
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => (a.style.color = "#fff"));
    document.querySelector(".logo").style.color = "#fff";
    btn.textContent = "Dark Mode";
  }
});

// Carrusel
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => item.classList.toggle("active", i === index));
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

// Cambio automático cada 5s
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 5000);
