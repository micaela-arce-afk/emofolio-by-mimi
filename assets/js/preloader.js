// Generar estrellas dinámicas
const preloaderStars = document.querySelector(".preloader-stars");
const starCount = 80;
const w = window.innerWidth;
const h = window.innerHeight;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("span");
  star.style.left = Math.random() * w + "px";
  star.style.top = Math.random() * h + "px";
  star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
  star.style.opacity = Math.random();
  star.style.animationDuration = 0.5 + Math.random() * 1 + "s"; // más rápido
  star.style.animationDelay = Math.random() * 0.5 + "s";
  preloaderStars.appendChild(star);
}

// Ocultar preloader después de 2.5s
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 2500);
});
