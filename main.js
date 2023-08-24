const carrito = [];

// const listaProductos = JSON.parse(localStorage.getItem("Lista de productos"));
// console.log(listaProductos);

function totalCarrito() {
  return carrito.reduce(
    (acumulador, carritoPrecio) => acumulador + carritoPrecio.precio,
    0
  );
}

function mostrarCartas(contenedorMostrarCartas) {
  fetch("./data.json")
    .then((respuesta) => respuesta.json())
    .then((lista) => {
      console.log(lista);

      lista.forEach((producto) => {
        contenedorMostrarCartas.innerHTML += `<div class="card"">
	<img class="card-img-top" src=${producto.img}  alt="Card image cap">
	 <div class="card-body">
	   <h5 class="card-title">${producto.nombre}</h5>
	   <p class="card-text">$${producto.precio}</p>
	   <button id=${producto.id} class="btn btn-primary boton-compra">Añadir al carrito</button>
	 </div>
	 </div>`;
      });
    });

  // for (const producto of listaProductos) {
  //   contenedorMostrarCartas.innerHTML += `<div class="card"">
  // <img class="card-img-top" src=${producto.img}  alt="Card image cap">
  // <div class="card-body">
  //   <h5 class="card-title">${producto.nombre}</h5>
  //   <p class="card-text">$${producto.precio}</p>
  //   <button id=${producto.id} class="btn btn-primary boton-compra">Añadir al carrito</button>
  // </div>
  // </div>`;
  // }
}

function mostrarCarrito() {
  document.getElementById("cuerpo-tabla").innerHTML = "";
  for (const producto of carrito) {
    document.getElementById("cuerpo-tabla").innerHTML += `
    <tr>
        <th>${producto.nombre}</th>
        <th>$${producto.precio}</th>
    </tr> 
    `;
  }
}

function agregarProducto() {
  fetch("./data.json")
    .then((respuesta) => respuesta.json())

    .then((lista) => {
      lista.forEach((producto) => {
        document
          .getElementById(`${producto.id}`)
          .addEventListener("click", () => {
            Toastify({
              text: "Añadiste un objeto al carrito",
              duration: 1000,
              gravity: "bottom",
              position: "right",
            }).showToast();
            carrito.push(producto);
            mostrarCarrito();
          });
      });
    });
}

document.getElementById("limpiar-carrito").addEventListener("click", () => {
  carrito.length = 0;
  document.getElementById("cuerpo-tabla").innerHTML = "";
  document.getElementById("mostrar-total").innerText = "";
});

mostrarCartas(document.getElementById("contenedor"));
agregarProducto();
document.getElementById("total-carrito").addEventListener("click", () => {
  carrito.length == 0
    ? (document.getElementById("mostrar-total").innerText =
        "Tu carrito esta vacio!")
    : (document.getElementById(
        "mostrar-total"
      ).innerText = `El total de tu carrito es: $${totalCarrito()}`);
});
