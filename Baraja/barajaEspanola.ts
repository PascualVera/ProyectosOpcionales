import { Baraja } from "./baraja";
export class BarajaEspañola extends Baraja {
  //Variables
  tipoMazo: boolean;
  //Constructor
  constructor(
    tipoMazo: boolean,
    numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
    palo: string[] = ["Espadas", "Bastos", "Oros", "Copas"]
  ) {
    super(
      (numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]),
      (palo = ["Espadas", "Bastos", "Oros", "Copas"])
    );

    this.palo = this.palo;
    this.numeros = this.numeros;
    this.baraja = this.crearBaraja();
    this.tipoMazo = tipoMazo;
    if (this.tipoMazo) {
      for (let i = 0; i < this.palo.length; i++) {
        this.baraja.push("8 " + this.palo[i], "9 " + this.palo[i]);
      }
    }
  }

  crearBaraja(): string[] {
    let baraja = [];
    for (let i = 0; i < this.palo.length; i++) {
      for (let x = 0; x < this.numeros.length; x++) {
        if (x == 0) {
          baraja.push("As de " + this.palo[i]);
        } else if (x == 7) {
          baraja.push("Sota de " + this.palo[i]);
        } else if (x == 8) {
          baraja.push("Caballo de " + this.palo[i]);
        } else if (x == 9) {
          baraja.push("Rey de " + this.palo[i]);
        } else {
          baraja.push(this.numeros[x] + " " + this.palo[i]);
        }
      }
    }
    return baraja;
  }
}
