'use strict'

// Condicional IF
// Si A es igual a B, entonces, haz esto
// var edad1 = 30;
// var edad2 = 12;

// // Si pasa esto
// if (edad1 > edad2) {
//     // Ejecuta esto
//     console.log("Edad uno es mayor que edad dos");
// }else{
//     console.log("La edad es inferior");
// }


var edad = 34;
var nombre = 'Ignacio Chavez';
/*
// Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/
if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años. Es mayor de edad");

    if (edad <= 33) {
        console.log("Todavia eres milenial");
    }else if(edad >= 70){
        console.log("Ya estay harto viejo yapo");
    }

} else {
     // Es menor de edad
     console.log(nombre + " tiene " + edad + " años. Es menor de edad");
}

/*
//OPERADORES LOGICOS
AND (Y): &&
OR (O): ||
NEGACION: !

*/

var year = 2018;
// Negacion
if (year != 2016) {
    console.log("El ano no es 2016, realmente es el anio " + year);
}

// AND
if (year >- 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("Estamos en la era actual");
} else {
    console.log("Anio no egistrado")
}