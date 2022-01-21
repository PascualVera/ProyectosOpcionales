"use strict";
exports.__esModule = true;
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    //Constructor
    function Electrodomestico(color, efficiency) {
        this.price = 100;
        this.color = this.comprobarColor(color);
        this.efficiency = this.comprobarConsumoEnergetico(efficiency);
        this.peso = 5;
    }
    //setters y getters
    Electrodomestico.prototype.getPrice = function () {
        return this.price;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.getEfficiency = function () {
        return this.efficiency;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setPrice = function (price) {
        this.price = price;
    };
    Electrodomestico.prototype.setColor = function (color) {
        this.color = color;
    };
    Electrodomestico.prototype.setEfficiency = function (char) {
        this.efficiency = char;
    };
    Electrodomestico.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    //Metodos privados
    Electrodomestico.prototype.comprobarConsumoEnergetico = function (char) {
        var charts = ["a", "b", "c", "d", "e", "f"];
        var consumoFinal = "F";
        for (var i = 0; i < charts.length; i++) {
            if (char.toLowerCase() == charts[i]) {
                consumoFinal = charts[i];
            }
        }
        return consumoFinal;
    };
    Electrodomestico.prototype.comprobarColor = function (color) {
        var coloresDisponibles = ["blanco", "negro", "rojo", "azul", "gris"];
        var colorFinal = "Blanco";
        for (var i = 0; i < coloresDisponibles.length; i++) {
            if (color == coloresDisponibles[i]) {
                colorFinal = coloresDisponibles[i];
            }
        }
        return colorFinal;
    };
    Electrodomestico.prototype.precioFinal = function () {
        var incremento = 0;
        //Incremento por eficiencia
        if (this.getEfficiency().toLowerCase() == "a") {
            incremento += 100;
        }
        else if (this.getEfficiency().toLowerCase() == "b") {
            incremento += 80;
        }
        else if (this.getEfficiency().toLowerCase() == "c") {
            incremento += 60;
        }
        else if (this.getEfficiency().toLowerCase() == "d") {
            incremento += 50;
        }
        else if (this.getEfficiency().toLowerCase() == "e") {
            incremento += 30;
        }
        else if (this.getEfficiency().toLowerCase() == "f") {
            incremento += 10;
        }
        //Incremento por peso
        if (this.peso <= 19) {
            incremento += 10;
        }
        else if (this.peso <= 49) {
            incremento += 50;
        }
        else if (this.peso <= 79) {
            incremento += 80;
        }
        else if (this.peso >= 80) {
            incremento += 100;
        }
        return incremento;
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
