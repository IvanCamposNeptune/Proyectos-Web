//Declaracion de funciones, esta es la mejor forma.
function sumar(){
    console.log(10 * 10);
}

sumar();//Lamando la función



//Expresión de la función, pero esto se considera más como una variable, las funciones se ejecutan en dos vueltas.
const sumar2 = function(){
    console.log(3+3);
}

sumar2();


//IFFE, son funciones que se invocan ellas mismas, no se recomiendan tanto para reutilizarse, son más que nada para proteger que las variables ya que no se pueden mandar llamar desde otro archivo.
(function(){
    console.log('Esto es una función');
})();


console.log(cliente);