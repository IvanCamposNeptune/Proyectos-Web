const producto = { 
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas}; //spread operator ... une las propiedades de los dos objetos en un nuevo objeto.

console.log(Producto);
console.log(nuevoProducto);