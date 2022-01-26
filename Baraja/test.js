"use strict";
exports.__esModule = true;
var barajaEspanola_1 = require("./barajaEspanola");
var barajaFrancesa_1 = require("./barajaFrancesa");
//Creacion de barajas
var barajaEsp = new barajaEspanola_1.BarajaEspañola(false);
var barajaFr = new barajaFrancesa_1.BarajaFrancesa();
//Tests Baraja Española
//Barajar
//barajaEsp.barajar();
//
//console.log(barajaEsp.siguienteCarta());
//barajaEsp.cartasDisponibles();
//console.log(barajaEsp.darCartas(10));
//console.log(barajaEsp.cartasMonton());
//barajaEsp.mostrarBaraja();
//Test Baraja Francesa
//Barajar
barajaFr.barajar();
console.log(barajaFr.siguienteCarta());
barajaFr.cartasDisponibles();
console.log(barajaFr.darCartas(10));
console.log(barajaFr.cartasMonton());
barajaFr.mostrarBaraja();
