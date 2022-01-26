"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BarajaFrancesa = void 0;
var baraja_1 = require("./baraja");
var BarajaFrancesa = /** @class */ (function (_super) {
    __extends(BarajaFrancesa, _super);
    function BarajaFrancesa(numeros, palo, baraja) {
        if (numeros === void 0) { numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; }
        if (palo === void 0) { palo = ["Picas", "Corazones", "Treboles", "Diamantes"]; }
        if (baraja === void 0) { baraja = ["s"]; }
        var _this = _super.call(this, (numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), (palo = ["Picas", "Corazones", "Treboles", "Diamantes"])) || this;
        _this.baraja = _this.crearBaraja();
        return _this;
    }
    //Metodos
    BarajaFrancesa.prototype.crearBaraja = function () {
        var baraja = [];
        for (var i = 0; i < this.palo.length; i++) {
            for (var x = 0; x < this.numeros.length; x++) {
                if (x == 0) {
                    baraja.push("As de " + this.palo[i]);
                }
                else if (x == 10) {
                    baraja.push("Jota de " + this.palo[i]);
                }
                else if (x == 11) {
                    baraja.push("Reina de " + this.palo[i]);
                }
                else if (x == 12) {
                    baraja.push("Rey de " + this.palo[i]);
                }
                else {
                    baraja.push(this.numeros[x] + " " + this.palo[i]);
                }
            }
        }
        return baraja;
    };
    BarajaFrancesa.prototype.cartaRoja = function (carta) {
        if (carta.includes("Diamantes") || carta.includes("Corazones")) {
            return true;
        }
        else {
            return false;
        }
    };
    BarajaFrancesa.prototype.cartaNegra = function (carta) {
        if (carta.includes("Picas") || carta.includes("Treboles")) {
            return true;
        }
        else {
            return false;
        }
    };
    return BarajaFrancesa;
}(baraja_1.Baraja));
exports.BarajaFrancesa = BarajaFrancesa;
