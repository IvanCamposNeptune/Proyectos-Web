//Funciones con Parametros y Argumentos

function sumar(numero1, numero2){ //Numero1 y numero2 son parámetros
    console.log(numero1 + numero2);
}

sumar(10,10); //Argumentos o valores reales
sumar(3,3);
sumar(3,6);
sumar(2,3);


const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(5, 10);


//Hay parametros por default cuando no esten los argumentos, esto sirve para que no haya errores

function sumar3(numero1 = 0, numero2 = 0){ //Numero1 y numero2 son parámetros, y el 0 es el parametro por defecto
    console.log(numero1 + numero2);
}

sumar3(10,5); //Argumentos o valores reales
sumar3(3); //Se suma 3 a 0
sumar3(); //Aqui sale 0
sumar3(1); //Se suma 1 a 0