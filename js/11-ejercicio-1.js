'use strict'

/*
Crear un programa que nos pida dos numeros y que nos diga cual es mayor,
el menor y si son iguales.
Hacer una sentencia si el usuario ingresa otro tipo de dato, que ingrese valor nuevamente

*/

var num1 = parseInt (prompt('Ingresar primer numero: ', 0));
var num2 = parseInt (prompt('Ingresar segundo numero ', 0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    var num1 = parseInt (prompt('Ingresar primer numero: ', 0));
    var num2 = parseInt (prompt('Ingresar segundo numero ', 0));
}

if (num1 == num2) {
    alert("Los numeros son iguales");
}else if (num1 > num2) {
    alert("El numero " + num1 + " es el mayor");
    alert("El numero " + num2 + " es el menor");
}else if (num2 > num1) {
    alert("El numero " + num1 + " es el menor");
    alert("El numero " + num2 + " es el mayor");
}else{
    alert("Introduce un numero correcto");
}