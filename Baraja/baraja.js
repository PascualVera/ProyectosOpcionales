"use strict";
exports.__esModule = true;
exports.Baraja = void 0;
var Baraja = /** @class */ (function () {
    //Constructor
    function Baraja(numeros, palo) {
        this.numeros = numeros;
        this.palo = palo;
        this.baraja = this.crearBaraja();
    }
    Baraja.prototype.barajar = function () {
        this.baraja = this.baraja.sort(function () {
            return Math.random() - 0.5;
        });
    };
    Baraja.prototype.siguienteCarta = function () {
        return this.baraja.pop();
    };
    Baraja.prototype.cartasDisponibles = function () {
        console.log(this.baraja.length);
    };
    Baraja.prototype.darCartas = function (numero) {
        var cartas = "";
        if (numero > this.baraja.length) {
            console.log("Cartas insuficientes");
        }
        else {
            for (var i = 1; i <= numero; i++) {
                cartas += this.baraja.pop() + ", ";
            }
        }
        return cartas;
    };
    Baraja.prototype.cartasMonton = function () {
        var _this = this;
        if (this.baraja.length == this.crearBaraja().length) {
            return "No ha salido ninguna carta";
        }
        var cartas = this.crearBaraja().filter(function (carta) { return !_this.baraja.includes(carta); });
        return cartas;
    };
    Baraja.prototype.mostrarBaraja = function () {
        console.log(this.baraja);
    };
    return Baraja;
}());
exports.Baraja = Baraja;
