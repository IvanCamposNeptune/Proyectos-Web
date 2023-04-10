// Strings o cadenas de texto

//Pueden ser comillas simples o comillas dobles es igual
const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 30 pulgadas");
const producto3 = new String("Monitor de 50 pulgadas");

console.log(producto);
console.log(producto2);
console.log(producto3);

// Se puede saber el tipo de dato tiene una variable anteponiendo typeof
console.log(typeof producto2);
console.log(typeof producto3);



//Metodos sobre strings

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto4 = 'Monitor HD';

//Lenght es para la extensión
console.log(producto.length); //La longitud de la cadena
console.log(producto4);

//IndexOf, cuando en consola sale 0 o mayor significa que lo encontró. Si es -1 no encontro lo que se buscaba.
console.log(tweet.indexOf('JavaScript'));
console.log(producto4.indexOf('Tablet'));

// Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto4.includes('Tablet'));


