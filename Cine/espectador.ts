import { Pelicula } from "./pelicula";
import { Sala } from "./sala";
export class Espectador extends Sala {
  //Atributos
  private nombre: string;
  private edad: number;
  private dinero: number;
  //Constructor
  constructor(nombre: string, edad: number, dinero: number) {
    super();
    this.nombre = nombre;
    this.edad = edad;
    this.dinero = dinero;
  }
  //getters and setters
  getNombre(): string {
    return this.nombre;
  }
  getEdad(): number {
    return this.edad;
  }
  getDinero(): number {
    return this.dinero;
  }
}
