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
exports.BarajaEspañola = void 0;
var baraja_1 = require("./baraja");
var BarajaEspañola = /** @class */ (function (_super) {
    __extends(BarajaEspañola, _super);
    //Constructor
    function BarajaEspañola(tipoMazo, numeros, palo) {
        if (numeros === void 0) { numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]; }
        if (palo === void 0) { palo = ["Espadas", "Bastos", "Oros", "Copas"]; }
        var _this = _super.call(this, (numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]), (palo = ["Espadas", "Bastos", "Oros", "Copas"])) || this;
        _this.palo = _this.palo;
        _this.numeros = _this.numeros;
        _this.baraja = _this.crearBaraja();
        _this.tipoMazo = tipoMazo;
        if (_this.tipoMazo) {
            for (var i = 0; i < _this.palo.length; i++) {
                _this.baraja.push("8 " + _this.palo[i], "9 " + _this.palo[i]);
            }
        }
        return _this;
    }
    BarajaEspañola.prototype.crearBaraja = function () {
        var baraja = [];
        for (var i = 0; i < this.palo.length; i++) {
            for (var x = 0; x < this.numeros.length; x++) {
                if (x == 0) {
                    baraja.push("As de " + this.palo[i]);
                }
                else if (x == 7) {
                    baraja.push("Sota de " + this.palo[i]);
                }
                else if (x == 8) {
                    baraja.push("Caballo de " + this.palo[i]);
                }
                else if (x == 9) {
                    baraja.push("Rey de " + this.palo[i]);
                }
                else {
                    baraja.push(this.numeros[x] + " " + this.palo[i]);
                }
            }
        }
        return baraja;
    };
    return BarajaEspañola;
}(baraja_1.Baraja));
exports.BarajaEspañola = BarajaEspañola;
