import { Electrodomestico } from "./electrodomesticos";

//Television
export class Television extends Electrodomestico {
  private pantalla: number;
  private tdt: boolean;
  //Constructor
  constructor(
    pantalla: number = 20,
    tdt: boolean = true,
    price: number,
    color: string,
    efficiency: string,
    peso: number
  ) {
    super(color, efficiency);

    //
    this.pantalla = pantalla;
    this.tdt = tdt;
    this.price = price;
    this.color = color;
    this.efficiency = efficiency;
    this.peso = peso;
  }

  //getters and settersç
  getPantalla(): number {
    return this.pantalla;
  }
  getTDT(): boolean {
    return this.tdt;
  }
  setPantalla(pulgadas: number) {
    this.pantalla = pulgadas;
  }
  setTDT(tdt: boolean) {
    this.tdt = tdt;
  }

  //Metodo Publico
  precioFinal(): number {
    let incremento = 0;
    if (this.pantalla > 40) {
      incremento += this.price * 0.3;
    }
    if ((this.tdt = true)) {
      incremento += 50;
    }
    return incremento + super.precioFinal();
  }
}
