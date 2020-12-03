"use strict";
// String
var cadena = "Alex Ku Dzul";
// Number
var numero = 2;
// Boolean
var bool = true;
// Any
var cualquiera = "Permite agregar cualquier cosa, y sobre escribir la variable";
cualquiera = 22;
// Arrays
var lenguajes = ["JS", "TS", "PHP", "PYTHON"];
var years = [2, 2, 3, 4];
// Multiples tipos de datos 
var cadenaConNumero = "Cadena";
cadenaConNumero = 22;
var letraynumero = "Alfa numerico " + 2;
// let vs var
var numero1 = 10;
var numero2 = 11;
if (numero1 == 10) {
    var numero1_1 = 20;
    var numero2_1 = 21;
    console.log(numero1_1, numero2_1);
}
console.log(numero1, numero2);
console.log(cadena, numero, bool, cualquiera, lenguajes, years, cadenaConNumero, letraynumero);
