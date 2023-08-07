//Creando la clase de productos

class Producto {
  constructor(id, nombre, img, stock, precio) {
    this.id = id;
    this.nombre = nombre;
    this.img = img;
    this.stock = stock;
    this.precio = precio;
  }
}
//Creando los objetos de productos
let producto1 = new Producto(1, "Gomitas", "./img/mogul-acidas.jpg", 10, 120);
let producto2 = new Producto(2, "Alfajor Jorgito", "./img/alfajor-jorgito.jpg", 2, 300);
let producto3 = new Producto(3, "Cerveza", "./img/imperial-golde.jpg", 5, 3000);
let producto4 = new Producto(4, "Sprite", "./img/sprite.jpg", 10, 1050);
let producto5 = new Producto(5, "Alfajor Block", "./img/alfajor-block.jpg", 25, 320);
let producto6 = new Producto(6, "Pack Imperial Ipa", "./img/pack-imperial-ipa.jpg", 35, 100);
let producto7 = new Producto(7, "Mogul Acidas Tira", "./img/mogul-acidas-tira.jpg", 25, 270);
let producto8 = new Producto(8, "Kinder Sorpresa", "./img/kinder-sorpresa.png", 50, 200);

//Creando el array de la lista de productos y pusheandolos al interior
const productos = [];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);


localStorage.setItem("Lista de productos", JSON.stringify(productos));
