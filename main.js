/*CONDICIONALES*/

let respuesta = prompt("Hola, ¿Buscas ropa de niña?");

if (respuesta === "si") {
  alert("Estas en el lugar indicado");
} else {
  alert("No estas en el lugar indicado");
}

/*CONDICIONAL ANIDADA */

let edad = prompt("¿Que talla buscas?");

if (edad >= 1 && edad <= 3) {
  console.log("Consigue las mejores prendas para tu niña de 0 a 3 meses");
} else if (edad >= 3 && edad <= 6) {
  console.log("Consigue las mejores prendas para tu niña de 3 a 6 meses");
} else if (edad >= 6 && edad <= 9) {
  console.log("Consigue las mejores prendas para tu bebe de 6 a 9 meses");
} else if (edad >= 9 && edad <= 12) {
  console.log("Consigue las mejores prendas para tu pequeña caminante");
} else if (edad >= 12 && edad <= 24) {
  console.log("Consigue las mejores prendas para tu pequeña toddler");
} else {
  console.log("Te invitamos a explorar toda la colección de Helena Clothes");
}

/*ALGORITMO CICLO*/

let productosInfantiles = [
  { nombre: "Poleras para niña", categoria: "Niña" },
  { nombre: "Conjuntos para niña", categoria: "Niña" },
  { nombre: "Polerones para bebe", categoria: "Bebe" },
  { nombre: "Chaquetas para bebe", categoria: "Bebe" },
];
let categoriaFiltrada = "Niña";

console.log("Productos de la categoria " + categoriaFiltrada + ":");

for (let i = 0; i < productosInfantiles.length; i++) {
  let producto = productosInfantiles[i];
  if (producto.categoria === categoriaFiltrada) {
    console.log(producto.nombre);
  }
}
