import { Baraja } from "./baraja";
export class BarajaFrancesa extends Baraja {
  constructor(
    numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    palo: string[] = ["Picas", "Corazones", "Treboles", "Diamantes"],
    baraja: string[] = ["s"]
  ) {
    super(
      (numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
      (palo = ["Picas", "Corazones", "Treboles", "Diamantes"])
    );
    this.baraja = this.crearBaraja();
  }

  //Metodos
  crearBaraja(): string[] {
    let baraja = [];
    for (let i = 0; i < this.palo.length; i++) {
      for (let x = 0; x < this.numeros.length; x++) {
        if (x == 0) {
          baraja.push("As de " + this.palo[i]);
        } else if (x == 10) {
          baraja.push("Jota de " + this.palo[i]);
        } else if (x == 11) {
          baraja.push("Reina de " + this.palo[i]);
        } else if (x == 12) {
          baraja.push("Rey de " + this.palo[i]);
        } else {
          baraja.push(this.numeros[x] + " " + this.palo[i]);
        }
      }
    }
    return baraja;
  }

  cartaRoja(carta: string): Boolean {
    if (carta.includes("Diamantes") || carta.includes("Corazones")) {
      return true;
    } else {
      return false;
    }
  }
  cartaNegra(carta: string): Boolean {
    if (carta.includes("Picas") || carta.includes("Treboles")) {
      return true;
    } else {
      return false;
    }
  }
}
