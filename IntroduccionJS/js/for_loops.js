//For Loops

for(let i = 0; i<10; i++){ //Detecta si el numero del 1 al 10 es par o impar
    if(i%2===0){
        console.log(`El  numero  ${i} es PAR`);
    }
    else{
        console.log(`El  numero  ${i} es IMPAR`);
    }
}

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

for(let i=0; i < carrito.length; i++){ //Este for recorre los elementos del carrito
    console.log(carrito[i].nombre);
}



// While Loop, primero evalua la condicion y luego lo hace

let i = 0; //Indice

while (i < 10) { //Condicion
  console.log(i);
  i++; //Incremento
}
// Output: 0 1 2 3 4 5 6 7 8 9



// Do While Loop, primero lo hace y luego evalua

i = 100; 

do{
    console.log(i);
    i++
}while(i<10); //Como vale 100, solo se ejecuta una vez


