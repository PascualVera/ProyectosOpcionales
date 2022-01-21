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
exports.Lavadora = void 0;
var electrodomesticos_1 = require("./electrodomesticos");
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    //Constructor
    function Lavadora(carga, price, color, efficiency, peso) {
        var _this = _super.call(this, color, efficiency) || this;
        _this.carga = 5;
        _this.price = price;
        _this.color = _super.prototype.comprobarColor.call(_this, color);
        _this.efficiency = _super.prototype.comprobarConsumoEnergetico.call(_this, efficiency);
        _this.peso = peso;
        return _this;
    }
    //setters and getters
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    Lavadora.prototype.setCarga = function (carga) {
        this.carga = carga;
    };
    //Metodos publicos
    Lavadora.prototype.precioFinal = function () {
        var incremento = 0;
        if (this.carga > 30) {
            incremento += 50;
        }
        return _super.prototype.precioFinal.call(this) + incremento;
    };
    return Lavadora;
}(electrodomesticos_1.Electrodomestico));
exports.Lavadora = Lavadora;
