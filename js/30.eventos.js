'use strict'

// Eventos del raton
window.addEventListener('load', () => {

    function cambiarColor() {
        //en vez de usar: var bg = boton.style.background;
        var bg = boton.style.backgroundColor; //Hay que poner Color

        //después ya puedes seguir como en el vídeo
        if (bg === "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "3px solid #a5ef8f";

        return true;
    }

    var boton = document.querySelector('#boton');

    boton.addEventListener('click', function () {
        cambiarColor();
    });

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("[focus]Estas dentro de input");
    });


    // Blur
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('blur', function () {
        console.log("[Blur]Estas fuera de input");
    });


    // Keydown
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keydown', function (event) {
        console.log("[Keydown]Estas pulsando la tecla ", String.fromCharCode(event.keyCode));
    });


    // Keypress
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keypress', function (event) {
        console.log("[Keypress]Tecla presionada ", String.fromCharCode(event.keyCode));
    });


    // Keyup
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('keyup', function (event) {
        console.log("[Keyup]Tecla soltada ", String.fromCharCode(event.keyCode));
    });
});