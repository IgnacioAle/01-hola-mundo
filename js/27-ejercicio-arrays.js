'use strict'

// Solicitar al usuario 6 numeros para ordenarlos en un array
// Mostrar el Array completo, en la pagina y en la consola.
// Ordenarlo y mostrarlo
// Invertir el orden
// Mostrar cuantos elementos tienne el array
// Busqueda de un valor introducido por el usuario 

function mostrarArray(elementos, textoCustom) {
    document.write("<h1>Contenido del Array" + textoCustom +"</h1>");
    document.write("<ul>");
    num.forEach((num, index) => {
        document.write("<strong>"+ num +"</strong><br/>");
    });
    document.write("</ul>");
}

const num = new Array[6];

for (let i = 0; i <= 5; i++) {
    num.push(parseInt(prompt("Ingresar un numero: ")));
}


// Mostrar en el cuerpo de la pagina
mostrarArray(num);

// Mostrar en la consola
console.log(num);

// Ordenar y mostrarlo
num.sort(function(a, b){
    return a-b
});
console.log(num, 'ordenado');

// Ordenar y mostrar
numeros.reverse();
console.log(num, 'revertido');

// Cuantos elementos tiene un array
document.write("<h1>El array tiene "+ num.length + " elementos.</h1>");

// Busqueda
let busqueda = parseInt(prompt("Buscar un numero: "));

let posicion = num.findIndex(num => num == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1>Encontrado!</h1>");
    document.write("<h1>La posicion de la busqueda es " + posicion + "</h1>");
}else{
    document.write("<h1>No lo he encontrado :( </h1>");
}


