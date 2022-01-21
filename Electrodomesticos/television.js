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
exports.Television = void 0;
var electrodomesticos_1 = require("./electrodomesticos");
//Television
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    //Constructor
    function Television(pantalla, tdt, price, color, efficiency, peso) {
        if (pantalla === void 0) { pantalla = 20; }
        if (tdt === void 0) { tdt = true; }
        var _this = _super.call(this, color, efficiency) || this;
        //
        _this.pantalla = pantalla;
        _this.tdt = tdt;
        _this.price = price;
        _this.color = color;
        _this.efficiency = efficiency;
        _this.peso = peso;
        return _this;
    }
    //getters and settersç
    Television.prototype.getPantalla = function () {
        return this.pantalla;
    };
    Television.prototype.getTDT = function () {
        return this.tdt;
    };
    Television.prototype.setPantalla = function (pulgadas) {
        this.pantalla = pulgadas;
    };
    Television.prototype.setTDT = function (tdt) {
        this.tdt = tdt;
    };
    //Metodo Publico
    Television.prototype.precioFinal = function () {
        var incremento = 0;
        if (this.pantalla > 40) {
            incremento += this.price * 0.3;
        }
        if ((this.tdt = true)) {
            incremento += 50;
        }
        return incremento + _super.prototype.precioFinal.call(this);
    };
    return Television;
}(electrodomesticos_1.Electrodomestico));
exports.Television = Television;
