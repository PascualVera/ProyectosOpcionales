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
exports.Espectador = void 0;
var sala_1 = require("./sala");
var Espectador = /** @class */ (function (_super) {
    __extends(Espectador, _super);
    //Constructor
    function Espectador(nombre, edad, dinero) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.dinero = dinero;
        return _this;
    }
    //getters and setters
    Espectador.prototype.getNombre = function () {
        return this.nombre;
    };
    Espectador.prototype.getEdad = function () {
        return this.edad;
    };
    Espectador.prototype.getDinero = function () {
        return this.dinero;
    };
    return Espectador;
}(sala_1.Sala));
exports.Espectador = Espectador;
