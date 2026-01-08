const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

/* Botón modo oscuro */
const toggleDark = document.querySelector("#toggle-dark");

toggleDark.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
