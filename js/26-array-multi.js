'use strict'

let categorias = ["Accion", "Terror", "Comedia"];
let pelicula = ["La verdad duele", "La vida es bella", "Gran Torino"];

pelicula.reverse();
console.log(pelicula);

let cine = [categorias, pelicula];
console.log(cine[0][1]);
console.log(cine[1][2]);

let elemento = "";

/*
do {
    elemento = prompt("Ingresar una pelicula");
    pelicula.push(elemento);
} while (elemento != "Acabar");
*/

let indice = pelicula.indexOf("Gran Torino");

if (indice > -1) {
    pelicula.indexOf(indice, 1);
}

let pelicula_string = pelicula.join();

let cadena = "texto1, texto2, texto3";
let cadena_array = cadena.split(", ");

console.log(cadena_array);