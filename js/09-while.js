'use strict'

//Buble while

var year = 2018;

while (year <= 2051) {
    console.log("Estamos en el anio " + year);

    if (year == 2000) {
        break;
    }

    year--;

}

//Do while
var years = 20;

do {
    alert("Solo cuando sea diferente a 20");
    year = 20;
} while (year != 20);