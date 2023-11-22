/*CONDICIONALES*/

/*let respuesta = prompt("Hola, ¿Buscas ropa de niña?");

if (respuesta === "si") {
  alert("Estas en el lugar indicado");
} else {
  alert("No estas en el lugar indicado");
}
*/
let productosInfantiles = [
  {
    nombre: "Conjunto de niña con poleron y buzo",
    categoria: "conjuntos",
    precio: 14990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/conjunto-1.webp",
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 15990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/conjunto-2.webp",
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 12990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 13990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Polera de niña con mangas",
    categoria: "poleras",
    precio: 8990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Polera de niña con osito",
    categoria: "poleras",
    precio: 10990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Polera de niña con flores",
    categoria: "poleras",
    precio: 7990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Polera de niña con bordado",
    categoria: "poleras",
    precio: 9990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Vestido de niña con rayas",
    categoria: "vestidos",
    precio: 13990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Vestido de niña con cuello",
    categoria: "vestidos",
    precio: 13990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Vestido de niña con rayas",
    categoria: "vestidos",
    precio: 12990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Vestido de niña con cinturon",
    categoria: "vestidos",
    precio: 15990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Chaqueta de niña con flores",
    categoria: "chaquetas",
    precio: 17990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Chaqueta de niña rosa",
    categoria: "chaquetas",
    precio: 15990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Chaqueta de niña denim",
    categoria: "chaquetas",
    precio: 16990,
    tallas: ["s", "m", "l", "xl"],
  },
  {
    nombre: "Chaqueta de niña con botones",
    categoria: "chaquetas",
    precio: 18990,
    tallas: ["s", "m", "l", "xl"],
  },
];

//filtrar productos por categoria y talla

let carrito = [];

let prenda = prompt("¿Qué tipo de prenda buscas?");
let talla = prompt("Ingrese la talla deseada") || "no especificada";

function agregarProductosAlCarrito() {
  let productoAComprar = prompt(
    "Escribe el nombre del producto que deseas agregar al carrito (o escribe 'finalizar' para completar la compra):"
  );
  if (productoAComprar === "finalizar") {
    finalizarCompra();
  } else {
    let productoEncontrado = productosInfantiles.find(
      (producto) => producto.nombre.toLocaleLowerCase() === productoAComprar
    );
    if (productoEncontrado) {
      carrito.push(productoEncontrado);
      console.log(
        productoAComprar +
          " de la talla " +
          talla +
          " ha sido agregado al carrito."
      );
      agregarProductosAlCarrito();
    } else {
      console.log("Te invitamos a explorar toda nuestra colección");
    }
  }
}

function mostrarProductos(productos) {
  productos.forEach((producto) =>
    console.log(
      producto.nombre + " - $" + producto.precio + " + iva" + " Talla: " + talla
    )
  );
  agregarProductosAlCarrito();
}

function finalizarCompra() {
  let totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );
  totalCarrito *= 1.19;
  const totalCarritoRedondeado = Math.round(totalCarrito);
  console.log("El total de su compra es de $ " + totalCarritoRedondeado);
}

function filtrarProductos() {
  const resultado = productosInfantiles
    .filter(filtrarPrenda)
    .filter(filtrarTalla);

  if (resultado.length > 0) {
    mostrarProductos(resultado);

    agregarProductosAlCarrito();
  } else {
    alert("El producto no está disponible, revisa toda nuestra colección");
  }
}

function filtrarPrenda(producto) {
  if (prenda) {
    return producto.categoria === prenda;
  }
  return true;
}

function filtrarTalla(producto) {
  if (talla) {
    return producto.tallas.includes(talla);
  }
  return true;
}

filtrarProductos();

//SELECTOR DE TALLAS EN CADA CARD EN LA PAGINA DE PRODUCTOS

let tallaSeleccionada = null;

function seleccionarTalla(elemento) {
  const tallas = document.querySelectorAll(".contenedor__talla");
  tallas.forEach((talla) => talla.classList.remove("seleccionada"));

  elemento.classList.add("seleccionada");

  tallaSeleccionada = elemento.innerText;

  console.log("Talla seleccionada:", tallaSeleccionada);
}

//AGREGAR PRODUCTOS AL CARRITO Y ESCOGER TALLA MEDIANTE EL BOTON DE LAS CARDS (pantalla de productos)

function agregarAlCarrito(index) {
  const producto = productosInfantiles[index];

  if (producto) {
    if (tallaSeleccionada) {
      carrito.push({ producto, talla: tallaSeleccionada });
      console.log(
        producto.nombre +
          " de la talla " +
          tallaSeleccionada +
          " ha sido agregado al carrito."
      );

      tallaSeleccionada = null;
      //llamamos a la funcion para actualizar carrito
      actualizarCarrito();
    } else {
      console.log(
        "Por favor, selecciona una talla antes de agregar tu producto al carrito"
      );
    }
  } else {
    console.log("Producto no encontrado");
  }
}

function actualizarCarrito() {
  const cartContainer = document.getElementById("cart-container");
  const productosEnCarritoHTML = carrito.map((item) => {
    return `
    <div>
      <img src="${item.producto.imagen}" alt="Imagen del producto" class="cart-product-img">
      <p>${item.producto.nombre} - Talla: ${item.talla}</p>
    </div>
  `;
  });
  cartContainer.innerHTML = `
  <div>
    ${productosEnCarritoHTML.join("")}
  </div>
  <button class="cart-close" id="close-cart">
    <i class="fa-solid fa-xmark"></i>
  </button>
`;

  asignarEventoCerrarCarrito();
}

function cerrarCarrito() {
  cartContainer.classList.remove("cart-container--visible");
}

function asignarEventoCerrarCarrito() {
  const closeCartBtn = document.getElementById("close-cart");
  closeCartBtn.addEventListener("click", cerrarCarrito);
}

// FILTRAR POR NOMBRE DE PRODUCTO EN EL INPUT DE BUSQUEDA DEL HEADER

function filtrarProductosPorNombre(termino) {
  return productosInfantiles.filter((producto) =>
    producto.nombre.toLowerCase().includes(termino.toLowerCase())
  );
}

function mostrarProductos(productos) {
  console.clear();
  6;
  productos.forEach((producto) =>
    console.log(
      producto.nombre + " - $" + producto.precio + " + iva" + " Talla: " + talla
    )
  );
}
function manejarCambioInput() {
  const input = document.getElementById("inputPrenda");
  const termino = input.value.trim();

  const productosFiltrados = filtrarProductosPorNombre(termino);

  mostrarProductos(
    productosFiltrados.length > 0 ? productosFiltrados : productosInfantiles
  );
}

document
  .getElementById("inputPrenda")
  .addEventListener("input", manejarCambioInput);

//EVENTO PARA VISUALIZAR Y CERRAR LA PESTAÑA DEL CARRITO

let cartContainer;

document.addEventListener("DOMContentLoaded", function () {
  let cartOpenButton = document.querySelector(".navbar__toggler");
  let cartCloseButton = document.querySelector(".cart-close");
  cartContainer = document.querySelector(".cart-container");

  asignarEventoCerrarCarrito();

  cartOpenButton.addEventListener("click", function () {
    cartContainer.classList.add("cart-container--visible");
  });

  cartCloseButton.addEventListener("click", function () {
    cartContainer.classList.remove("cart-container--visible");
  });
});
