const carrito = [];

function aplicarDescuento(debito){
	if(debito == "debito"){
		return calcularTotalCarrito()*0.9;	
	}else{
		return calcularTotalCarrito();
	}
}

function calcularTotalCarrito(){
	return carrito.reduce((acumulador,producto) => acumulador + producto.precio,0);
}

function filtrarPorStrock(){

	return productos.filter((producto) => producto.stock > 0);

}

function productoEsta(id){

	return productosConStock.some((producto) => producto.id == id);
}

function mostrarListaProductos(lista) {
	for (const producto of lista) {
		console.log(
			`Codigo: ${producto.id} Nombre: ${producto.nombre}, Valor : $${producto.precio}, Cantidad disponible: ${producto.stock}`
		);
	}
}
const productosConStock = filtrarPorStrock(productos);

mostrarListaProductos(productosConStock);




let productoElegido = parseFloat(prompt("Ingrese el id del producto deseado para añadir al carrito, cuando no desee añadir mas productos ingrese 0"));
do {
	
	if(isNaN(productoElegido) || (productoElegido <0) ){
		productoElegido = parseFloat(prompt("El id del producto que eligio es invalido, por favor ingrese un numero de id valido"))
	}else if(productoEsta(productoElegido)){
		carrito.push(productosConStock.find((producto)=> producto.id == productoElegido));
		productoElegido = parseFloat(prompt("Ingrese el id del producto deseado para añadir al carrito, cuando no desee añadir mas productos ingrese 0"));		
	}else{
		if(productoElegido == 0){
			break;
		}
		productoElegido = parseFloat(prompt("El id seleccionado no pertenece a una objeto valido"));
	}

} while (productoElegido != 0);


if(carrito.length >0){
	console.table(carrito);
let formaPago = prompt("Ingrese debito o credito como forma de pago, recordar que con debito tenes un 10% de descuento");
console.log(aplicarDescuento(formaPago.toLocaleLowerCase()));
}else{
	console.log("No añado ningun producto al carrito");
}




