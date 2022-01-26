import { Baraja } from "./baraja";
import { BarajaEspañola } from "./barajaEspanola";
import { BarajaFrancesa } from "./barajaFrancesa";

//Creacion de barajas

let barajaEsp = new BarajaEspañola(false);
let barajaFr = new BarajaFrancesa();

//Barajar

barajaEsp.barajar();
barajaFr.barajar();

//Tests Baraja Española

console.log(barajaEsp.siguienteCarta());
barajaEsp.cartasDisponibles();
console.log(barajaEsp.darCartas(10));
console.log(barajaEsp.cartasMonton());
barajaEsp.mostrarBaraja();

//Test Baraja Francesa

console.log(barajaFr.siguienteCarta());
barajaFr.cartasDisponibles();
console.log(barajaFr.darCartas(10));
console.log(barajaFr.cartasMonton());
barajaFr.mostrarBaraja();
