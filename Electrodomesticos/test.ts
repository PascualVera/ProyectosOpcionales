import { Television } from "./television";
import { Lavadora } from "./lavadora";
import { Electrodomestico } from "./electrodomesticos";
//Objetos
let lav1 = new Lavadora(15, 150, "blanca", "f", 40);
let lav2 = new Lavadora(30, 200, "rojo", "a", 80);
let lav3 = new Lavadora(8, 50, "gris", "b", 10);
let tele1 = new Television(200, true, 7000, "negro", "f", 80);
let tele2 = new Television(55, false, 600, "gris", "c", 20);
let tele3 = new Television(22, true, 30, "beige", "a", 8);
let tele4 = new Television(75, false, 1200, "negro", "a", 35);
let Electrodomestico1 = new Electrodomestico("azul", "e");
Electrodomestico1.setPeso(2);
Electrodomestico1.setPrice(20);
let Electrodomestico2 = new Electrodomestico("lila", "a");
Electrodomestico2.setPeso(100);
Electrodomestico2.setPrice(180);
let Electrodomestico3 = new Electrodomestico("blanco", "b");
Electrodomestico3.setPeso(5);
Electrodomestico3.setPrice(45);

let arrayArticulos: Electrodomestico[];
arrayArticulos = [
  tele1,
  tele2,
  tele3,
  tele4,
  lav1,
  lav2,
  lav3,
  Electrodomestico1,
  Electrodomestico2,
  Electrodomestico3,
];
let printAll = (arr) => {
  let precioTelevisiones = 0;
  let precioLavadoras = 0;
  let precioElectrodomesticos = 0;
  for (const articulo of arr) {
    if (articulo instanceof Television) {
      precioTelevisiones += articulo.getPrice();
    } else if (articulo instanceof Lavadora) {
      precioLavadoras += articulo.getPrice();
    } else if (articulo instanceof Electrodomestico) {
      precioElectrodomesticos += articulo.getPrice();
    }
  }
  console.log(`El precio de las televisiones es de ${precioTelevisiones} rupias,
el precio de las lavadoras es de ${precioLavadoras} rupias y
el precio total de electrodomesticos es de ${
    precioTelevisiones + precioLavadoras + precioElectrodomesticos
  }`);
};
console.log(tele1.precioFinal());

printAll(arrayArticulos);
