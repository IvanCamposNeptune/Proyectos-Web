//Arreglos o Arrays

const numeros = [10,20,30,40,50]; //Los corchetes son para arreglos
console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
console.table(meses);

//Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

//Conocer la extensión de un arreglo
// console.log(meses.length);

//ForEach
// numeros.forEach(function(numero){ //Propio de JavaScript
//     console.log(numero);
// })


//Agregar 
numeros[5] = 60; //como no existe, lo crea, aunque esto no es muy comun.
console.table(numeros);

numeros.push(60,70,80); //Agrega al final del arreglo
console.table(numeros);

numeros.unshift(-10,-20,-30); //Agrega al principio del arreglo
console.table(numeros);


//Eliminar

const meses2 = ['Enero','Febrero','Marzo','Abril','Mayo'];

meses2.pop(); //Quita el ultimo elemento del arreglo
console.table(meses2);

meses2.splice(2,1); //Elimina apartir de un indice un numero determinado de elementos (donde empieza, cuantos más borra).
console.table(meses2);


//Ahora por buenas practicas se recomienda no modificar los arreglos originales.
//Se recomienda no modificar los arreglos originales y en su lugar crear un nuevo arreglo.

const nuevoArreglo = [...meses2, "Junio"]; //Agrega las propiedades de meses al nuevo arreglo y le agrega Junio.
console.table(nuevoArreglo);