'use strict'

// Parametros REAST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
 console.log("Fruta 1: " + fruta1);
 console.log("Fruta 2: " + fruta2);
 console.log(restoDeFrutas);

}

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");