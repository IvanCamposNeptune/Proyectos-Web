//  This en JavaScript


const reservacion = {
    nombre: 'Ivan',
    apellido: 'Campos',
    total: 5000,
    pagado: false,
    informacion: function(){ //Asi tiene que estar declarada la funcion, los arrow functions hacen referencia a la ventana global. por lo tanto this no funciona con ellas.
        // console.log(`El Cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`); //This hace referencia al objeto sobre el cual se esta mandando a llamar esta funcion
    }
}

console.log(reservacion.informacion());



//Una variable global
var window,nombre = 'Alejandra';


const reservacion2 = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function(){ 
        // console.log(`El Cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`); //This hace referencia al objeto sobre el cual se esta mandando a llamar esta funcion
    },

    informacion2: ()=>{
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`); //This hace referencia al objeto sobre el cual se esta mandando a llamar esta funcion
    }
}

console.log(reservacion2.informacion());

console.log(reservacion2.informacion2());  //Aqui se utiliza un arrow function para demostrar
