/*CONDICIONALES*/

let respuesta = prompt("Hola, ¿Buscas ropa de niña?");

if (respuesta === "si") {
  alert("Estas en el lugar indicado");
} else {
  alert("No estas en el lugar indicado");
}

let productosInfantiles = [
  {
    nombre: "Conjunto de niña con poleron y buzo",
    categoria: "conjuntos",
    precio: 13990,
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 15990,
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 15990,
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 13990,
  },
  { nombre: "Polera de niña con mangas", categoria: "poleras", precio: 4990 },
  { nombre: "Polera de niña con osito", categoria: "poleras", precio: 8990 },
  { nombre: "Polera de niña con flores", categoria: "poleras", precio: 5990 },
  { nombre: "Polera de niña con bordado", categoria: "poleras", precio: 7990 },
  { nombre: "Vestido de niña con rayas", categoria: "vestidos", precio: 16990 },
  {
    nombre: "Vestido de niña con cuello",
    categoria: "vestidos",
    precio: 14990,
  },
  { nombre: "Vestido de niña con rayas", categoria: "vestidos", precio: 11990 },
  {
    nombre: "Vestido de niña con cinturon",
    categoria: "vestidos",
    precio: 10990,
  },
  {
    nombre: "Chaqueta de niña con flores",
    categoria: "chaquetas",
    precio: 18990,
  },
  { nombre: "Chaqueta de niña rosa", categoria: "chaquetas", precio: 17990 },
  { nombre: "Chaqueta de niña denim", categoria: "chaquetas", precio: 20990 },
  {
    nombre: "Chaqueta de niña con botones",
    categoria: "chaquetas",
    precio: 15990,
  },
];

/*CONDICIONAL ANIDADA */

let carrito = [];

let prenda = prompt("¿Que prenda buscas?");

if (prenda == "conjuntos") {
  console.log("Productos disponibles en la categoria de Conjuntos: ");
  mostrarProductos();
} else if (prenda == "poleras") {
  console.log("Productos disponibles en la categoria de Poleras: ");
  mostrarProductos();
} else if (prenda == "vestidos") {
  console.log("Productos disponibles en la categoria de Vestidos: ");
  mostrarProductos();
} else if (prenda == "chaquetas") {
  console.log("Productos disponibles en la categoria de Chaquetas: ");
  mostrarProductos();
} else {
  console.log("te invitamos a explorar toda nuestra colección");
}
/* FUNCTION MOSTRAR PRODUCTOS */

function mostrarProductos() {
  for (let i = 0; i < productosInfantiles.length; i += 1) {
    let producto = productosInfantiles[i];
    if (producto.categoria === prenda) {
      console.log(producto.nombre + " $" + producto.precio);
    }
  }
  agregarProductosAlCarrito();
}
/* FUNCTION FINALIZAR COMPRA */

function finalizarCompra() {
  let totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );
  totalCarrito *= 1.19;
  const totalCarritoRedondeado = Math.round(totalCarrito);
  console.log("El total de su compra es de $" + totalCarritoRedondeado);
}

/*FUNCTION AGREGAR PRODUCTOS AL CARRITO */

function agregarProductosAlCarrito() {
  let productoAComprar = prompt(
    "Escribe el nombre del producto que deseas agregar al carrito (o escribe 'finalizar' para completar la compra):"
  );
  if (productoAComprar.toLowerCase() === "finalizar") {
    finalizarCompra();
  } else {
    let productoEncontrado = productosInfantiles.find(
      (producto) => producto.nombre === productoAComprar
    );
    if (productoEncontrado) {
      carrito.push(productoEncontrado);
      console.log(productoAComprar + " ha sido agregado al carrito.");
      agregarProductosAlCarrito();
    } else {
      console.log("Producto no encontrado. Inténtalo de nuevo.");
      agregarProductosAlCarrito();
    }
  }
}
