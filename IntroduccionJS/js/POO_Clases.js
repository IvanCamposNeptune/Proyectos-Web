//POO Clases en JavaScript

class Producto{
    
    constructor(nombre,precio){ //Toma los parametros por esta funcion reservada
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    ObtenerPrecio(){
        console.log(this.precio);
    }

}

const producto = new Producto(); //Instanciando la clase

//Objetos
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

//Utilizando metodos de la clase
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

console.log(producto2.ObtenerPrecio());


//Herencia, va a heredar los atributos y metodos a la clase hija

class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre, precio); //Esta funcion hace que se herede tambien el constructor de la clase padre, solo lo que existe en ella.
        this.isbn = isbn;
    }

    formatearProducto(){ //Este metodo sobreescribe al de la clase padre para agregar su isbn
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`; //Aqui usamos super en template strings con el return
    }

    ObtenerPrecio(){
        super.ObtenerPrecio(); //Obtiene el precio, usamos el super de otra forma cuando son variables
        console.log('Si hay en existencia');
    }

}

const libro = new Libro('JavaScript la Revolución', 120, '2345987234');

console.log(libro.formatearProducto());
console.log(libro.ObtenerPrecio());