// una interface = Define los metodos obligatorios que tiene que tener la clase Camiseta
interface CamisetaBase{
    setColor(color:string): any;
    getColor():any;
}

// Decorador, agrega una funcion extra a una clase

function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}


// Clase (Molde del objeto)
// export class Camiseta{
@estampar('Gucci')
class Camiseta implements CamisetaBase{

    // Propiedades (caracteristicas del objeto)
    // Publicas, se puede acceder a sus propiedades desde cualquier punto o herrencia
    // public color:string;
    // public modelo:string;
    // public marca:string;
    // public talla:string;
    // public precio:number;

    // Privadas, solo se puede acceder en la clase misma

    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;

    // Constructor, es el primer metodo que se ejecuta de la clase

    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    // Metodos (funciones o acciones del objeto)
    public setColor(color:string){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
    }

    public getModleo(){
        return this.modelo;
    }

}

class Sudadera extends Camiseta{
    // public capucha:boolean;

    constructor(color: string, modelo:string, marca:string, talla:string, precio: number, public capucha:boolean){
        super(color, modelo, marca, talla, precio);
    }

    public setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    public getCapucha():boolean{
        return this.capucha;
    }
}

// Con propiedades publicas

// let camiseta = new Camiseta();
// camiseta.color= "Rojo";
// camiseta.modelo = "Manga larga";
// camiseta.marca = "Nike";
// camiseta.talla = "L";
// camiseta.precio = 10;

// let playera = new Camiseta();
// playera.color= "Azul";
// playera.modelo = "Manga corta";
// playera.marca = "Nike";
// playera.talla = "L";
// playera.precio = 10;

// Con propiedades privadas
// let camiseta = new Camiseta();
// camiseta.setColor("Rojo");

// console.log(camiseta.getColor(), playera);

// let playera = new Camiseta();
// playera.setColor("Azul");
// console.log(camiseta.getColor(), playera);

// Con constructor

let camiseta = new Camiseta("rojo", "Manga larga","Nike", "L", 10);
camiseta.setColor("Rojo");
// camiseta.estampacion();

console.log(camiseta);

let sudadera = new Sudadera("verde","Manga larga", "LALALA", "L", 23, true);
// sudadera.setCapucha(true);
sudadera.setColor("Azul");
console.log(sudadera);