import { Sala } from "./sala";
import { Pelicula } from "./pelicula";
import { Espectador } from "./espectador";
//Sala
let sala = new Sala();
sala.price = 12;
sala.columnas = 5;
sala.filas = 4;

//Pelicula
let pelicula = new Pelicula();
pelicula.director = "Benny Chan";
pelicula.duracion = 123;
pelicula.minAge = 16;
pelicula.titulo = "New Police Story";
//Espectadores
let jackie = new Espectador("Jackie Chan", 67, 3.5 * 10 ** 8);
let donnie = new Espectador("Donnie Yeng", 58, 120);
let pablo = new Espectador("Pablo Iglesias", 43, 2);
let greta = new Espectador("Greta Thunberg", 19, 20);
let sofia = new Espectador("Sofia de Borbon", 15, 450);

let array = [jackie, donnie, pablo, greta, sofia];

console.log(sala.assignSeat(sala.checkCustomers(pelicula, array)));
