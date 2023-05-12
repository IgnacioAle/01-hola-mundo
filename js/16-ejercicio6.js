'use strict'

/*
Indicar si un numero es par o impar.
1- Ventana prompt
2- Si no es valido que nos pida el numero nuevamente
*/

var number = parseInt(prompt("Ingresar un numero", 0));

while(isNaN(number)){
    var number = parseInt(prompt("Ingresar un numero", 0));
}

if (number % 2 == 0) {
    alert("Es un numero par");
}else{
    alert("Es impar");
}