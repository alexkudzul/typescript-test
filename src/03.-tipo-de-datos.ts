// String
let cadena:string = "Alex Ku Dzul";

// Number
let numero:number = 2;

// Boolean
let bool:boolean = true;

// Any
let cualquiera:any = "Permite agregar cualquier cosa, y sobre escribir la variable";
cualquiera = 22;

// Arrays
let lenguajes:Array<string> = ["JS", "TS", "PHP", "PYTHON"];
let years: number[] = [2,2,3,4];

// Multiples tipos de datos 
let cadenaConNumero:string | number = "Cadena";
cadenaConNumero = 22;

// Personalizacion de tipos de datos
type alfanumerico = string | number;
let letraynumero:alfanumerico = "Alfa numerico " + 2;

// let vs var
var numero1=10;
var numero2=11;

    if(numero1==10){
        let numero1=20;
        let numero2=21;
        console.log(numero1, numero2);
    }

console.log(numero1, numero2);
console.log(cadena, numero, bool, cualquiera, lenguajes, years, cadenaConNumero, letraynumero);