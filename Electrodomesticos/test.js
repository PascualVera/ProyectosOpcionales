"use strict";
exports.__esModule = true;
var television_1 = require("./television");
var lavadora_1 = require("./lavadora");
var electrodomesticos_1 = require("./electrodomesticos");
//Objetos
var lav1 = new lavadora_1.Lavadora(15, 150, "blanca", "f", 40);
var lav2 = new lavadora_1.Lavadora(30, 200, "rojo", "a", 80);
var lav3 = new lavadora_1.Lavadora(8, 50, "gris", "b", 10);
var tele1 = new television_1.Television(200, true, 7000, "negro", "f", 80);
var tele2 = new television_1.Television(55, false, 600, "gris", "c", 20);
var tele3 = new television_1.Television(22, true, 30, "beige", "a", 8);
var tele4 = new television_1.Television(75, false, 1200, "negro", "a", 35);
var Electrodomestico1 = new electrodomesticos_1.Electrodomestico("azul", "e");
Electrodomestico1.setPeso(2);
Electrodomestico1.setPrice(20);
var Electrodomestico2 = new electrodomesticos_1.Electrodomestico("lila", "a");
Electrodomestico2.setPeso(100);
Electrodomestico2.setPrice(180);
var Electrodomestico3 = new electrodomesticos_1.Electrodomestico("blanco", "b");
Electrodomestico3.setPeso(5);
Electrodomestico3.setPrice(45);
var arrayArticulos;
arrayArticulos = [
    tele1,
    tele2,
    tele3,
    tele4,
    lav1,
    lav2,
    lav3,
    Electrodomestico1,
    Electrodomestico2,
    Electrodomestico3,
];
var printAll = function (arr) {
    var precioTelevisiones = 0;
    var precioLavadoras = 0;
    var precioElectrodomesticos = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var articulo = arr_1[_i];
        if (articulo instanceof television_1.Television) {
            precioTelevisiones += articulo.getPrice();
        }
        else if (articulo instanceof lavadora_1.Lavadora) {
            precioLavadoras += articulo.getPrice();
        }
        else if (articulo instanceof electrodomesticos_1.Electrodomestico) {
            precioElectrodomesticos += articulo.getPrice();
        }
    }
    console.log("El precio de las televisiones es de ".concat(precioTelevisiones, " rupias,\nel precio de las lavadoras es de ").concat(precioLavadoras, " rupias y\nel precio total de electrodomesticos es de ").concat(precioTelevisiones + precioLavadoras + precioElectrodomesticos));
};
console.log(tele1.precioFinal());
printAll(arrayArticulos);
