'use strict'

// DOM - Document Object Model
function cambiaColor(color) {
    caja.style.background = color;
}



// let caja = document.getElementById("miCaja");
let caja = document.querySelector("#miCaja");
caja.innerHTML("Texto en la caja desde JS");
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white;";
caja.className = "hola hola2";

console.log(caja);

// Conseguir elementos por etiquetas
let todosLosDiv = document.getElementsByTagName('div');
// let contenidoEnTexto = todosLosDiv[2];
// contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";

// todosLosDiv.forEach((valor, indice) => {
let valor;
for(valor in todosLosDiv){    
    if (typeof todosLosDiv[valor].textContent == 'string') {
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
// });
seccion.append(hr)

// Conseguir elementos por su clase css
let divRojos = document.getElementsByClassName('rojo');

let div;

for (const div in divRojos) {
    if (divRojos[div].className == 'rojo') {
        divRojos[div].style.background = "red";
        
    }
}