'use strict'

// LocalStorage
// Comprobar disponibilidad
if (typeof(Storage) !== 'undefined') {
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con localstorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Javascript");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo", );

// Guardar objeto
let usuario = {
    nombre: "Ignacio",
    apellido: "Aracena",
    email: "nacho_ch3@hotmail.com"
};

localStorage.setItem("usuario", JSON.stringfy(usuario));

// Recuperar objeto
let userjs = JSON.parse(console.log(localStorage.getItem("usuario")));

console.log(userjs);
document.querySelector("#peliculas").append("  " + userjs.web + " - " + userjs.nombre);