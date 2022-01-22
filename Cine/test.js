"use strict";
exports.__esModule = true;
var sala_1 = require("./sala");
var pelicula_1 = require("./pelicula");
var espectador_1 = require("./espectador");
//Sala
var sala = new sala_1.Sala();
sala.price = 12;
sala.columnas = 5;
sala.filas = 4;
//Pelicula
var pelicula = new pelicula_1.Pelicula();
pelicula.director = "Benny Chan";
pelicula.duracion = 123;
pelicula.minAge = 16;
pelicula.titulo = "New Police Story";
//Espectadores
var jackie = new espectador_1.Espectador(
  "Jackie Chan",
  67,
  3.5 * Math.pow(10, 8)
);
var donnie = new espectador_1.Espectador("Donnie Yeng", 58, 120);
var pablo = new espectador_1.Espectador("Pablo Iglesias", 43, 2);
var greta = new espectador_1.Espectador("Greta Thunberg", 19, 20);
var sofia = new espectador_1.Espectador("Sofia de Borbon", 15, 450);
var array = [jackie, donnie, pablo, greta, sofia];
console.table(sala.assignSeat(sala.checkCustomers(pelicula, array)));
