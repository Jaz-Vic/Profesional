// MENSAJE AL CARGAR EL CV
window.addEventListener("load", () => {
    console.log("El CV se cargó correctamente");
});

// EFECTO EN EL NOMBRE
const nombre = document.getElementById("nombre");

nombre.addEventListener("mouseover", () => {
    nombre.style.color = "#d16ba5";
    nombre.style.transition = "0.3s";
});

nombre.addEventListener("mouseout", () => {
    nombre.style.color = "#8b5fbf";
});

// MENSAJE AL HACER CLICK EN LA FOTO
const foto = document.querySelector(".foto img");

foto.addEventListener("click", () => {
    alert("Hola 😊 Soy Dulce Garduño");
});
