//Array Methods

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//forEach
meses.forEach(function(mes){ //Para comprobar si Marzo existe en el arreglo
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes, hace lo mismo que el forEach de arriba pero más facil, funciona bien en arreglos planos, pero no en un arreglo de objetos
let resultado = meses.includes('Marzo');
console.log(resultado);

//Some, es ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular PRO'
});

console.log(resultado);

//Reduce, toma los numeros y entrega un resultado
resultado = carrito.reduce(function(total,producto){ //Hace la suma de los precios de los productos
    return total + producto.precio
}, 0); //Empieza desde 0

console.log(resultado);

//Filter, es el más útil
//Condición de precio
resultado = carrito.filter(function(producto){ //Extrae productos que cuestan más de 400, son 4.
    return producto.precio > 400
});

console.log(resultado);

// Solo 1
resultado = carrito.filter(function(producto){ //Extrae productos que se llaman Celular, solo es 1.
    return producto.nombre === 'Celular'
});

console.log(resultado);

//Todos menos 1
resultado = carrito.filter(function(producto){ //Extrae productos que NO se llaman Celular, se trae todos menos 1.
    return producto.nombre !== 'Celular'
});

console.log(resultado);