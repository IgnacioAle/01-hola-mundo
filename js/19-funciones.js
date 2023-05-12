'use strict'

// Funciones
// Una funcion es una agrupacion reitilizable de un conjunto de instarucciones

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Muliplicacion: " + (numero1*numero2));
    console.log("Divicion: " + (numero1/numero2));
    console.log("****************************************")

}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2) + "br/");
    document.write("Resta: " + (numero1-numero2) + "br/");
    document.write("Muliplicacion: " + (numero1*numero2) + "br/");
    document.write("Divicion: " + (numero1/numero2) + "br/");
    document.write("****************************************" + "br/");

}

// Defino la funcionen
function calculadora(numero1, numero2, mostrar = false){
    // Conjunto de funciones a ejecutar
    if (mostrar == false) {
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

// llamar a la funcion
calculadora(1, 4);
calculadora(2, 5, true);

// for(var i = 1; i<+10: i++){
//     console.log(i);
//     calculadora(i, 8);
// }

