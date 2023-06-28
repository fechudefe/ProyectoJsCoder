let sumaTotal = 0;
let opcion;
let formaPago;
const formaDePago = (debito, total) => {
	if (debito) {
		return total * 0.9;
	} else {
		return total;
	}
};

alert("Bienvenido a la tienda xxxx");
console.log("Item 1 $1000");
console.log("Item 2 $1500");
console.log("Item 3 $1200");
console.log("Item 4 $5000");
console.log("Item 5 $15000");
console.log("Item 6 $2550");
do {
	opcion = prompt(
		"Ingrese el numero del item que quiere añador al carrito, si quiere salir, ingrese 0"
	);
	while (opcion < 0 || opcion > 6) {
		opcion = prompt(
			"Ingreso un valor invalido, por favor ingrese un valor entre el numero de items y 0"
		);
	}

	switch (opcion) {
		case "1":
			sumaTotal = sumaTotal + 1000;
			break;
		case "2":
			sumaTotal = sumaTotal + 1500;
			break;
		case "3":
			sumaTotal = sumaTotal + 1200;
			break;
		case "4":
			sumaTotal = sumaTotal + 5000;
			break;
		case "5":
			sumaTotal = sumaTotal + 15000;
			break;
		case "6":
			sumaTotal = sumaTotal + 2550;
			break;

		default:
			break;
	}
} while (opcion != "0");

console.log("El total del carrito es:$" + sumaTotal);

formaPago = prompt(
	"Ingrese debito si abonara con debito o credito si abonara con credito, recuerde que si abona con debito tiene un 10% de descuento en el total de la compra "
);

let pago = formaPago == "debito";
console.log("El total a pagar es:$" + formaDePago(pago, sumaTotal));
