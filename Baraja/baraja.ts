export abstract class Baraja {
  //Declaracion de variables
  public numeros: number[];
  public palo: string[];
  public baraja: string[];
  //Constructor
  constructor(numeros: number[], palo: string[]) {
    this.numeros = numeros;
    this.palo = palo;
    this.baraja = this.crearBaraja();
  }

  //Metodos
  abstract crearBaraja(): string[];

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
  darCartas(numero: number) {
    let cartas = "";
    if (numero > this.baraja.length) {
      console.log("Cartas insuficientes");
    } else {
      for (let i = 1; i <= numero; i++) {
        cartas += this.baraja.pop() + ", ";
      }
    }
    return cartas;
  }
  cartasMonton() {
    if (this.baraja.length == this.crearBaraja().length) {
      return "No ha salido ninguna carta";
    }
    let cartas = this.crearBaraja().filter(
      (carta) => !this.baraja.includes(carta)
    );
    return cartas;
  }
  mostrarBaraja() {
    console.log(this.baraja);
  }
}
