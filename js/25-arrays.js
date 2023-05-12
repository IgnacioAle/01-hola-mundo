'use strict'

// Arrays

var nombre = "Ignacio Chavez";
var nombres = ["Ignacio Chavez", "Yasna Fernandez", "Pamela Morales", "Jose Nahuelan"];

const lenguajes = new Array("PHP", "JavaScript", "C++", "Java");
console.log(nombre.length);

/*
const elemento = parseInt(prompt("Que elemento de array desea seleccionar?", 0));
if (elemento >= nombres.length) {
    alert("Ingresar numero menor que " + nombres.length);
} else {
    alert("El usuario seleccionado es " + nombre[elemento]);
    
}
*/

document.writeln("<h1>Lenguajes de programacion del 2018</h1>")
document.write("<ul>");

/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[0]+"</li>");
}
*/

lenguajes.forEach(elemento, index, data => {
    document.write("<li>"+elemento+"</li>");    
});
// Usar forEach de manera mas sencilla para recorrer un array.

for (const lenguaje in lenguajes) {
    if (Object.hasOwnProperty.call(object, key)) {
        document.write("<li>" +lenguajes [lenguaje] +"</li>");
        
    }
}

document.write("</ul>");

// Busquedas
let busqueda = lenguajes.find(function(lenguaje) {
    return lenguaje =="PHP";
})

console.log(busqueda);