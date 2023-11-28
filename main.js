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
    imagen: "../img/conjunto-3.webp",
  },
  {
    nombre: "Conjunto de niña con vestido y calza",
    categoria: "conjuntos",
    precio: 13990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/conjunto-4.webp",
  },
  {
    nombre: "Polera de niña con mangas",
    categoria: "poleras",
    precio: 8990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/polera-1.webp",
  },
  {
    nombre: "Polera de niña con osito",
    categoria: "poleras",
    precio: 10990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/polera-2.webp",
  },
  {
    nombre: "Polera de niña con flores",
    categoria: "poleras",
    precio: 7990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/polera-3.webp",
  },
  {
    nombre: "Polera de niña con bordado",
    categoria: "poleras",
    precio: 9990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/polera-4.webp",
  },
  {
    nombre: "Vestido de niña con rayas",
    categoria: "vestidos",
    precio: 13990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/vestido-1.webp",
  },
  {
    nombre: "Vestido de niña con cuello",
    categoria: "vestidos",
    precio: 13990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/vestido-2.webp",
  },
  {
    nombre: "Vestido de niña con rayas",
    categoria: "vestidos",
    precio: 12990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/vestido-3.webp",
  },
  {
    nombre: "Vestido de niña con cinturon",
    categoria: "vestidos",
    precio: 15990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/vestido-4.webp",
  },
  {
    nombre: "Chaqueta de niña con flores",
    categoria: "chaquetas",
    precio: 17990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/chaqueta-1.webp",
  },
  {
    nombre: "Chaqueta de niña rosa",
    categoria: "chaquetas",
    precio: 15990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/chaqueta-2.webp",
  },
  {
    nombre: "Chaqueta de niña denim",
    categoria: "chaquetas",
    precio: 16990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/chaqueta-3.webp",
  },
  {
    nombre: "Chaqueta de niña con botones",
    categoria: "chaquetas",
    precio: 18990,
    tallas: ["s", "m", "l", "xl"],
    imagen: "../img/chaqueta-4.webp",
  },
];

//SELECTOR DE TALLAS EN CADA CARD EN LA PAGINA DE PRODUCTOS

let carrito = [];

let tallaSeleccionada = null;

function seleccionarTalla(elemento) {
  const tallas = document.querySelectorAll(".contenedor__talla");
  tallas.forEach((talla) => talla.classList.remove("seleccionada"));

  elemento.classList.add("seleccionada");

  tallaSeleccionada = elemento.innerText;
}

//AGREGAR PRODUCTOS AL CARRITO Y ESCOGER TALLA MEDIANTE EL BOTON DE LAS CARDS (pantalla de productos)

function agregarAlCarrito(index) {
  const producto = productosInfantiles[index];
  const botonAgregar = document.getElementById(`boton-agregar-${index}`);

  if (producto && tallaSeleccionada) {
    const productoSeleccionado = {
      producto: {
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio,
      },
      talla: tallaSeleccionada,
      cantidad: 1,
    };

    carrito.push(productoSeleccionado);
    actualizarCarrito();
    if (botonAgregar) {
      botonAgregar.innerText = "Producto agregado al carrito";
    }

    tallaSeleccionada = null;
    setTimeout(() => {
      if (botonAgregar) {
        botonAgregar.innerText = "Agregar al carrito";
      }
    }, 2000);
  } else {
    if (botonAgregar) {
      botonAgregar.innerText = "Selecciona tu talla";
    }
  }
}

// funcion para que el carrito se actualice

function actualizarCarrito() {
  const cartContainer = document.getElementById("cart-container");

  const productosEnCarritoHTML = carrito.map((item, index) => {
    const cantidad =
      item.cantidad !== undefined && !isNaN(item.cantidad) ? item.cantidad : 1;

    return `
      <div class="cart-act">
      <div class="cart-img">
        <img src="${item.producto.imagen}" alt="Imagen del producto" class="cart-product-img">
        </div>
        <div class="cart-descripcion">
        <h3 class="cart-titulo">${item.producto.nombre}</h3>
        <p class="cart-text">Helena Clothes</p>
        <p class="cart-text">Talla: ${item.talla}</p>
        <p class="cart-titulo">$ ${item.producto.precio}</p>
            <button class="cart-btn" onclick="eliminarProducto(${index})"><i class="cart-icon fa-solid fa-trash-can"></i></button>
            <input class="cart-input" type="number" value="${item.cantidad}" min="1" id="input-cantidad-${index}" oninput="actualizarCantidad(${index}, this.value)">
            <button class="cart-btn" onclick="duplicarProducto(${index})"><i class="cart-icon fa-solid fa-plus"></i></button>
        </div>
        <div class="cont-finalizar"><button class="cart-finalizar-compra" onclick="finalizarCompra()">Finalizar Compra</button></div>
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

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
}
// BOTONES PARA ELIMINAR Y AGREGAR PRODUCTO

function eliminarProducto(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad -= 1;
  } else {
    carrito.splice(index, 1);
  }

  actualizarCarrito();
}
function duplicarProducto(index) {
  const productoDuplicado = {
    ...carrito[index],
    cantidad: (carrito[index].cantidad || 1) + 1,
  };

  const indiceExistente = carrito.findIndex(
    (item) =>
      item.producto.imagen === productoDuplicado.producto.imagen &&
      item.talla === productoDuplicado.talla
  );

  if (indiceExistente !== -1) {
    carrito[indiceExistente].cantidad += 1;
  } else {
    carrito.push(productoDuplicado);
  }

  actualizarCarrito();
}
// FUNCION QUE VA ACTUALIZANDO LA CANTIDAD

function actualizarCantidad(index, nuevaCantidad) {
  carrito[index].cantidad = parseInt(nuevaCantidad, 10) || 1;
  actualizarCarrito();
}

function cerrarCarrito() {
  cartContainer.classList.remove("cart-container--visible");
}

function asignarEventoCerrarCarrito() {
  const closeCartBtn = document.getElementById("close-cart");
  closeCartBtn.addEventListener("click", cerrarCarrito);
}

// FUNCION PARA GUARDAR CARRITO EN EL LOCAL STORAGE

document.addEventListener("DOMContentLoaded", () => {
  const carritoGuardado = localStorage.getItem("carrito");

  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }
});

//FUNCION QUE ACTUALIZA LA CANTIDAD DEL ICONO DEL NAVBAR

function actualizarContadorCarrito() {
  const contadorCarrito = document.getElementById("contador-carrito");
  if (contadorCarrito) {
    const totalCantidades = carrito.reduce(
      (total, item) => total + (item.cantidad || 1),
      0
    );
    contadorCarrito.innerText = totalCantidades.toString();
  }
}
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

//Funcion para finalizar compra

function finalizarCompra() {
  if (verificarCantidadProductos()) {
    const totalCarrito = carrito.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
    const totalCarritoConIVA = totalCarrito * 1.19;
    const totalCarritoRedondeado = Math.round(totalCarritoConIVA);

    const mensajeCompra = `
      <p class="finalizar-text">¡Tu compra ha sido realizada con exito!</p>
      <p class="finalizar-total">Total: $${totalCarritoRedondeado}</p>
      <p class="finalizar-text">Gracias por tu compra, te esperamos pronto en Helena Clothes.</p>
    `;

    const cartContainer = document.getElementById("cart-container");

    setTimeout(() => {
      cartContainer.innerHTML = mensajeCompra;
    }, 100);

    setTimeout(() => {
      carrito = [];
      actualizarCarrito();
    }, 5000);
  } else {
    alert(
      "La cantidad de algún producto en el carrito es inválida. Verifica y vuelve a intentarlo."
    );
  }
}

function verificarCantidadProductos() {
  for (let i = 0; i < carrito.length; i++) {
    const cantidadInput = document.getElementById(`input-cantidad-${i}`);
    const nuevaCantidad = parseInt(cantidadInput.value, 10);

    if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
      return false;
    }
  }

  return true;
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

/*agregar cantidad en el icono de carrito. agregaton boton finalizar en el carrito, mostrar en el dom lo que se busque en el input de busqueda*/
