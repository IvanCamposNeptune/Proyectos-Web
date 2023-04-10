"use strict"; //Corre JavaScript en modo estricto

//Objetos

const producto = { //Cuando es un objeto, no importa que tenga const (se puede modificar) para solucionar eso tenemos que usar Object.freeze()
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}


Object.freeze(producto); //Se congela para que no se agregen,eliminen o modifiquen las propiedades al objeto
// producto.imagen = 'imagen.jpg'; //Crea el objeto, que no se puede hacer ya que está congelado

console.log(Object.isFrozen(producto)); //Verifica si el objeto esta congelado.

console.log(producto);


//Tambien está seal, la diferencia es que este si te permite modificar los existentes.