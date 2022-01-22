import { Espectador } from "./espectador";
import { Pelicula } from "./pelicula";

export class Sala {
  //Atributos
  public filas: number;
  public columnas: number;
  public pelicula: string;
  public price: number;

  //Constructor
  constructor() {
    this.filas = 5;
    this.columnas = 5;
    this.price;
    this.pelicula;
  }

  //Metodos
  crearSala() {
    let sala = [];
    for (let i = 0; i < this.filas; i++) {
      sala[i] = [];
      for (let x = 0; x < this.columnas; x++) {
        let char = String.fromCharCode(65 + x);
        sala[i][x] = [this.filas - i];
        sala[i][x] += char;
      }
    }
    return sala;
  }

  //Comprobar clientes
  checkCustomers(pelicula: Pelicula, espectadores: Espectador[]): Espectador[] {
    let validCostumers = [];
    for (const espectador of espectadores) {
      if (
        espectador.getEdad() >= pelicula.minAge &&
        espectador.getDinero() >= this.price
      ) {
        validCostumers.push(espectador);
      }
    }
    return validCostumers;
  }
  //Asignar asiento
  assignSeat(espectadores: Espectador[]): string[] {
    let asientosDisponibles = new Sala().crearSala();
    let salaFinal = new Sala().crearSala();

    for (let i = 0; i < espectadores.length; i++) {
      let row = Math.round(Math.random() * (asientosDisponibles.length - 1));
      let col = Math.round(
        Math.random() * (asientosDisponibles[row].length - 1)
      );
      let x = asientosDisponibles[row][col];

      let seat = salaFinal[row].indexOf(x);
      console.log(seat);
      salaFinal[row][seat] = espectadores[i].getNombre();
      asientosDisponibles[row].splice(col, 1);
    }
    console.log(asientosDisponibles);
    return salaFinal;
  }
}
