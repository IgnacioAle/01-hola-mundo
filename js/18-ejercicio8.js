'use strict'

// Crear una calculadora que pida dos numeros por pantalla
// SDI ingresamos un numero mal, que lo vuelva a solicitar
// En el cuerpo de la pagina en una alerta mostrar esas dos cifras

var numero1 = parseInt(prompt("ingresar el primer numero", 0));
var numero2 = parseInt(prompt("Ingresar el segundo numero", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("ingresar el primer numero", 0));
    numero2 = parseInt(prompt("Ingresar el segundo numero", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
                "La resta es: " + (numero1 - numero2) + "<br/>" +
                "La multiplicacion es: " + (numero1 * numero2) + "<br/>" +
                "La division es: " + (numero1 / numero2) + "<br/>";

var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" +
                "La resta es: " + (numero1 - numero2) + "\n" +
                "La multiplicacion es: " + (numero1 * numero2) + "\n" +
                "La division es: " + (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);