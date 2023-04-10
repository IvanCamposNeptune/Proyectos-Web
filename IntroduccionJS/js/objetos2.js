//Objetos

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// //Forma anterior de sacar de los objeto, primero crea la variable y luego extrae el valor.

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);




//Destructuring

//Esto hace lo anterior pero en un solo paso
// const {precio} = producto;
// const {nombreProducto} = producto;

//Se puede hacer esto en una sola linea también
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);