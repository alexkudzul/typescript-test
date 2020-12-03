"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador, agrega una funcion extra a una clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Molde del objeto)
// export class Camiseta{
var Camiseta = /** @class */ (function () {
    // Constructor, es el primer metodo que se ejecuta de la clase
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModleo = function () {
        return this.modelo;
    };
    Camiseta = __decorate([
        estampar('Gucci')
    ], Camiseta);
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    // public capucha:boolean;
    function Sudadera(color, modelo, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
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
var camiseta = new Camiseta("rojo", "Manga larga", "Nike", "L", 10);
camiseta.setColor("Rojo");
// camiseta.estampacion();
console.log(camiseta);
var sudadera = new Sudadera("verde", "Manga larga", "LALALA", "L", 23, true);
// sudadera.setCapucha(true);
sudadera.setColor("Azul");
console.log(sudadera);
