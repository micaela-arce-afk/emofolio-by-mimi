/* -----------------------------
   MAIN.JS - Mikan Portfolio 𐔌՞
   Funcionalidades: burger, scroll reveal y modo oscuro
----------------------------- */

// -----------------------------
// BURGER MENU (MOBILE) ⊹₊˚‧
const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("open"); // Toggle el menú al hacer click 𐔌՞
});

// -----------------------------
// SCROLL REVEAL ܸ.ˬ.ܸ՞𐦯
// Todos los elementos con clase .animate-on-scroll
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Agrega clase visible cuando entra en viewport
      }
    });
  },
  {
    threshold: 0.15, // Cuando 15% del elemento está visible
  }
);

scrollElements.forEach((el) => observer.observe(el)); // Observa cada elemento 𝜗ৎ

// -----------------------------
// MODO OSCURO ꒰ ᧔ෆ᧓ ꒱
// Botón toggle para cambiar tema oscuro
const darkToggle = document.querySelector("#dark-toggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark"); // Alterna clase dark
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light"); // Guarda preferencia 𐔌՞
  });

  // Aplica preferencia guardada al cargar
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
}

// -----------------------------
// OTROS DETALLES ✨
// Puedes agregar aquí futuras funciones JS como sliders, filtros o animaciones adicionales
// Todo documentado y modular para que el profe vea código limpio
