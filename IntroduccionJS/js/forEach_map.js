//forEach y map

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
carrito.forEach( producto => console.log('Una vez por cada elemento') ); //Para iterar sobre un arreglo o simplemente enviarlo a la pantalla se recomienda


//map
carrito.map( producto => console.log('Una vez por cada elemento') ); //Para crear un nuevo arreglo


//Diferencia entre ambos
const arreglo1 = carrito.forEach( producto => producto.nombre); //El foreach esta hecho solo para iterar
const arreglo2 = carrito.map( producto => producto.nombre); //Este si sirve para crear un nuevo arreglo

console.log(arreglo1); //Undefined
console.log(arreglo2); //Si contiene arreglo
