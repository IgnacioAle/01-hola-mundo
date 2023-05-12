'use strict'

window.addEventListener('load', function () {
    function intervalo() {
        let tiempo = setInterval(function () {
            console.log("Set interval ejecutado");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;

    }

    // Timer

    var tiempo = intervalo();

    let start = querySelector("#start");
    start.addEventListener("click", function () {
        alert("Has iniciado el intervalo");
        intervalo();
    });

    let stop = querySelector("#stop");
    stop.addEventListener("click", function () {
        alert("Has detenido el intervalo");
        clearInterval(tiempo);
    });
});