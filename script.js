document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");
    const comeback = document.getElementById("comeback");

    menuIcon.addEventListener("click", function () {
        // Alterna entre ativado e desativado
        if (sideMenu.classList.contains("inactive")) {
            sideMenu.classList.remove("inactive");
        }
        sideMenu.classList.toggle("active");
    });

    comeback.addEventListener("click", function () {
        if (sideMenu.classList.contains("active")) {
            sideMenu.classList.remove("active"); // Fecha o menu
            sideMenu.classList.add("inactive"); // Marca como desativado
        }
    });
});
