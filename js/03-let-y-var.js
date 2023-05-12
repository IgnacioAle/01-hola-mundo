'use strict'
// Pruebas con let y var}

// PRUEBA CON VAR
var numero = 40;
console.log(numero); //valor 40

if (true){  
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero);


// PRUEBA CON LET
var texto = "Curso de JavaScript de Ignacio Chavez";
console.log(texto);

if (true) {
    let texto = "Curso Laravel 5";
    console.log(texto);
}

console.log(texto);