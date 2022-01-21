export class Electrodomestico {
  //Atributos
  protected price: number;
  protected color: string;
  protected efficiency: string;
  protected peso: number;
  //Constructor
  constructor(color: string, efficiency: string) {
    this.price = 100;
    this.color = this.comprobarColor(color);
    this.efficiency = this.comprobarConsumoEnergetico(efficiency);
    this.peso = 5;
  }
  //setters y getters
  getPrice(): number {
    return this.price;
  }
  getColor(): string {
    return this.color;
  }
  getEfficiency(): string {
    return this.efficiency;
  }
  getPeso(): number {
    return this.peso;
  }
  setPrice(price: number) {
    this.price = price;
  }
  setColor(color: string) {
    this.color = color;
  }
  setEfficiency(char: string) {
    this.efficiency = char;
  }
  setPeso(peso: number) {
    this.peso = peso;
  }
  //Metodos privados
  comprobarConsumoEnergetico(char: string): string {
    let charts = ["a", "b", "c", "d", "e", "f"];
    let consumoFinal = "F";
    for (let i = 0; i < charts.length; i++) {
      if (char.toLowerCase() == charts[i]) {
        consumoFinal = charts[i];
      }
    }
    return consumoFinal;
  }
  comprobarColor(color: string): string {
    let coloresDisponibles = ["blanco", "negro", "rojo", "azul", "gris"];
    let colorFinal = "Blanco";
    for (let i = 0; i < coloresDisponibles.length; i++) {
      if (color == coloresDisponibles[i]) {
        colorFinal = coloresDisponibles[i];
      }
    }
    return colorFinal;
  }
  precioFinal(): number {
    let incremento = 0;

    //Incremento por eficiencia
    if (this.getEfficiency().toLowerCase() == "a") {
      incremento += 100;
    } else if (this.getEfficiency().toLowerCase() == "b") {
      incremento += 80;
    } else if (this.getEfficiency().toLowerCase() == "c") {
      incremento += 60;
    } else if (this.getEfficiency().toLowerCase() == "d") {
      incremento += 50;
    } else if (this.getEfficiency().toLowerCase() == "e") {
      incremento += 30;
    } else if (this.getEfficiency().toLowerCase() == "f") {
      incremento += 10;
    }
    //Incremento por peso
    if (this.peso <= 19) {
      incremento += 10;
    } else if (this.peso <= 49) {
      incremento += 50;
    } else if (this.peso <= 79) {
      incremento += 80;
    } else if (this.peso >= 80) {
      incremento += 100;
    }
    return incremento;
  }
}
