//Objetos

// const nombreProducto = "Monitor de 20 Pulgadas";
// const precio = 300;
// const disponible = true;

//Se caracteriza por el = y las {}, se le sigue con : para asignar a las variables.
const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto); //Aqui puedes ver todos los atributos del objeto

console.log(producto.precio);  //Esta es la forma más común y facil de usar

console.log(producto["precio"]); //Esta es otra forma, no tan utilizada.

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';


//Eliminar propiedades
delete producto.disponible;

console.log(producto);