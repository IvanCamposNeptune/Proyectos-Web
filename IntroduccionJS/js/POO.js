// POO, esta es la forma anterior

//Se utiliza con prototypes, son funciones que estan asociadas a un tipo de objeto

//Object Constructor
function Producto(nombre, precio){ //La clase empieza con mayuscula
    this.nombre = nombre;
    this.precio = precio;
}

//Prototype, nos premite crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

// //Object literal
// const producto = {
//     nombre: 'Tablet',
//     precio: 500
// }

// function formatearProducto(producto){ //Esto tiene un problema por que nos haria crear muchas funciones
//     return `El producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
// }

//Objetos
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

//Utilizando los prototypes
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());




//Object Constructor
function Cliente(nombre, apellido){ //La clase empieza con mayuscula
    this.nombre = nombre;
    this.apellido = apellido;
}

//Prototype
Cliente.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

//Objeto
const cliente = new Cliente('Ivan','Campos');
const cliente2 = new Cliente('Ale','Garcia');

//Utilizando Prototype
console.log(cliente.formatearCliente());
console.log(cliente2.formatearCliente());















