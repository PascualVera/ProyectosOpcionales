"use strict";
exports.__esModule = true;
exports.Sala = void 0;
var Sala = /** @class */ (function () {
    //Constructor
    function Sala() {
        this.filas = 5;
        this.columnas = 5;
        this.price;
        this.pelicula;
    }
    //Metodos
    Sala.prototype.crearSala = function () {
        var sala = [];
        for (var i = 0; i < this.filas; i++) {
            sala[i] = [];
            for (var x = 0; x < this.columnas; x++) {
                var char = String.fromCharCode(65 + x);
                sala[i][x] = [this.filas - i];
                sala[i][x] += char;
            }
        }
        return sala;
    };
    //Comprobar clientes
    Sala.prototype.checkCustomers = function (pelicula, espectadores) {
        var validCostumers = [];
        for (var _i = 0, espectadores_1 = espectadores; _i < espectadores_1.length; _i++) {
            var espectador = espectadores_1[_i];
            if (espectador.getEdad() >= pelicula.minAge &&
                espectador.getDinero() >= this.price) {
                validCostumers.push(espectador);
            }
        }
        return validCostumers;
    };
    //Asignar asiento
    Sala.prototype.assignSeat = function (espectadores) {
        var asientosDisponibles = new Sala().crearSala();
        var salaFinal = new Sala().crearSala();
        for (var i = 0; i < espectadores.length; i++) {
            var row = Math.round(Math.random() * (asientosDisponibles.length - 1));
            var col = Math.round(Math.random() * (asientosDisponibles[row].length - 1));
            var x = asientosDisponibles[row][col];
            var seat = salaFinal[row].indexOf(x);
            console.log(seat);
            salaFinal[row][seat] = espectadores[i].getNombre();
            asientosDisponibles[row].splice(col, 1);
        }
        console.log(asientosDisponibles);
        return salaFinal;
    };
    return Sala;
}());
exports.Sala = Sala;
