import { Electrodomestico } from "./electrodomesticos";

export class Lavadora extends Electrodomestico {
  //Atributos
  private carga: number;
  //Constructor
  constructor(
    carga: number,
    price: number,
    color: string,
    efficiency: string,
    peso: number
  ) {
    super(color, efficiency);
    this.carga = 5;
    this.price = price;
    this.color = super.comprobarColor(color);
    this.efficiency = super.comprobarConsumoEnergetico(efficiency);
    this.peso = peso;
  }
  //setters and getters
  getCarga(): number {
    return this.carga;
  }
  setCarga(carga: number) {
    this.carga = carga;
  }
  //Metodos publicos

  precioFinal(): number {
    let incremento = 0;
    if (this.carga > 30) {
      incremento += 50;
    }
    return super.precioFinal() + incremento;
  }
}
