// Selecciona el menú hamburguesa y la barra lateral
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Añade un evento para abrir/cerrar el menú
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
