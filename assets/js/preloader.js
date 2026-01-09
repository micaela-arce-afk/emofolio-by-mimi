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
  star.style.animationDuration = 2 + Math.random() * 2 + "s"; // más lento
  star.style.animationDelay = Math.random() * 2 + "s";
  preloaderStars.appendChild(star);
}

// Ocultar preloader después de 2.5s
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 2500);
});
