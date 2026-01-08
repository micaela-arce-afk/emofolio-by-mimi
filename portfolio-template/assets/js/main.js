const darkModeBtn = document.querySelector(".btn-dark");

darkModeBtn.addEventListener("click", () => {
  if (darkModeBtn.textContent === "Dark Mode") {
    darkModeBtn.textContent = "Light Mode";
    document.body.style.background = "#222"; // fondo oscuro
    document.body.style.color = "#fff"; // texto claro
  } else {
    darkModeBtn.textContent = "Dark Mode";
    document.body.style.background = "#f5f5f5"; // fondo claro
    document.body.style.color = "#000"; // texto oscuro
  }
});
