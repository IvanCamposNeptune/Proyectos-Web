//Arrow Functions, practicamente solo es poner => en vez de function pero hace más limpio el codigo

const sumar2 = (n1,n2) => console.log(n1 + n2);  //Aqui se necesitan parentesis para los parametros por que son 2 valores
sumar2 (5,10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) //Aqui el paraentesis es opcional ya que solo es un parametro
aprendiendo('JavaScript');


//Transformando array methods en array functions, del ejercico 15

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


//forEach, en forma de arrow function
meses.forEach( mes => { //Para comprobar si Marzo existe en el arreglo
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});


let resultado; 

//Some, es ideal para arreglo de objetos, en forma de arrow function, el return es opcional
resultado = carrito.some(producto => producto.nombre === 'Celular PRO');
console.log(resultado);


//Reduce, toma los numeros y entrega un resultado
resultado = carrito.reduce((total,producto) => total + producto.precio, 0); //Empieza desde 0 y hace la suma del precio de los productos
console.log(resultado);


//Filter, es el más útil
//Condición de precio
resultado = carrito.filter(producto =>  producto.precio > 400);//Extrae productos que cuestan más de 400, son 4.
console.log(resultado);

// Solo 1
resultado = carrito.filter(producto => producto.nombre === 'Celular');//Extrae productos que se llaman Celular, solo es 1.
console.log(resultado);
