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

// Abrir sub-menú
document.addEventListener("DOMContentLoaded", () => {
    const equiposMenuItem = document.querySelector(".menu li:nth-child(3)"); // "Equipos"
    const submenu = equiposMenuItem.querySelector(".submenu");

    equiposMenuItem.addEventListener("click", () => {
        submenu.classList.toggle("open");
    });
});
