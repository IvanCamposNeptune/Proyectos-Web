//Funciones que retornan valores

const sumar = function(n1, n2){
    return n1 + n2;
}

const resultado = sumar(5, 10); //Aqui como la funcion retorna la suma, se asigna a resultado automaticamente

console.log(resultado);



let total = 0;

function agregarCarrito(precio){ //Funcion para acumular precio en carrito
    return total += precio;
}

function calcularImpuesto(total){ //Aqui se suma el 15 porciento con la multiplicación
    return 1.15 * total; 
}


total = agregarCarrito(200); //Va agregando elementos al carrito
total = agregarCarrito(400);
total = agregarCarrito(600);


console.log(total); //Imprime la suma de los articulos

const totalAPagar = calcularImpuesto(total);
// console.log(totalAPagar); //Esta es la forma simple de imprimir
        console.log(`El total a pagar con impuestos es de: ${totalAPagar}`);

        