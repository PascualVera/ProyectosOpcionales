"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Baraja = void 0;
class Baraja {
    //Constructor
    constructor() {
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
        this.palo = ["Espadas", "Bastos", "Copas", "Oros"];
        this.baraja = this.crearBaraja();
    }
    //Metodos
    crearBaraja() {
        let baraja = [];
        for (let i = 0; i < this.palo.length; i++) {
            for (let x = 0; x < this.numeros.length; x++) {
                baraja.push(this.numeros[x] + " " + this.palo[i]);
            }
        }
        return baraja;
    }
    barajar() {
        this.baraja = this.baraja.sort(() => {
            return Math.random() - 0.5;
        });
    }
    siguienteCarta() {
        return this.baraja.pop();
    }
    cartasDisponibles() {
        console.log(this.baraja.length);
    }
    darCartas(numero) {
        let cartas = "";
        if (numero > this.baraja.length) {
            console.log("Cartas insuficientes");
        }
        else {
            for (let i = 1; i <= numero; i++) {
                cartas += this.baraja.pop() + ", ";
            }
        }
        return cartas;
    }
    cartasMonton() {
        return this.baraja.filter((carta) => !this.crearBaraja().includes(carta));
    }
}
exports.Baraja = Baraja;
let baraja = new Baraja();
baraja.barajar();
console.log(baraja.siguienteCarta());
console.log(baraja.darCartas(5));
console.log(baraja.baraja);
console.log(baraja.cartasMonton());
//# sourceMappingURL=baraja.js.map