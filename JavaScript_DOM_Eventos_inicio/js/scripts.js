//querySelector
const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 elementos, aqui se pone la clase contenedora para diferenciar el elemento de otros que pueda haber. Otra opcion es usar id
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');

console.log(heading);


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo Texto para enlace'; //Cambia el texto
enlaces[0].href = 'https://www.google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace'); //Como ya sabe que va a recibir clase no es necesario el . para indicarlo


//getElementById, ya es una forma antigua
const heading2 = document.getElementById('heading');
console.log(heading2);



//Crear HTML con createElement
const nuevoEnlace = document.createElement('A'); //H1,DIV,P,A,IMG. Se hace en mayusculas

console.log(nuevoEnlace);

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

console.log(nuevoEnlace); //Mostrando lo que se hizo

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


//Eventos
console.log(1);

window.addEventListener('load', function(){
    console.log(2);
});//Load espera a que JS y los archivos dependientes del HTML estén listos, window es el objeto gobal, incluso es padre de document.

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //Este a diferencia de load, solo espera a que se descargue el html.
    console.log(4);
});

console.log(5);

//También se puede poner la funcion por separado cuando es muy grande
document.addEventListener('DOMContentLoaded', imprimir());

function imprimir(){
    console.log('Impresion');
}

window.onscroll = function(){
    console.log('Scrolling');
};


//Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario'); //En la pestaña de contacto

// btnEnviar.addEventListener('click', function(evento){ //Evento es por default
//     console.log(evento); //Objeto de evento, se puede hacer mucho con el
//     evento.preventDefault(); //Evita que envie el formulario, sirve para validar y luego enviar
//     console.log('Enviando formulario'); //Se recarga la página por que el submit, por default envia la información a un archivo del servidor.
// });



//Eventos de los Inputs y Textarea

const datos = { //Con este objeto validaremos el formulario
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

//Manera por funcion
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Manera uno por uno
// nombre.addEventListener('input', function(e){ //Se ejecuta al instante, change es hasta que sales del objeto.
//     // console.log(e);
//     console.log(e.target.value);
// });

// email.addEventListener('input', function(e){ 
//     console.log(e.target.value);
// });

// mensaje.addEventListener('input', function(e){ 
//     console.log(e.target.value);
// });

function leerTexto(e){

    datos[e.target.id] = e.target.value;

    console.log(datos);
}



//Evento submit

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario
    const {nombre,email,mensaje} = datos; //Desestructurando el objeto global

    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; //Corta la ejecución del código
    }

    //Crear otra alerta de enviar correctamente

    mostrarAlerta('Enviado correctamente');

});


// //Muestra alerta de que se envio correctamente
// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');

//     formulario.appendChild(alerta);
//     //Desapareciendo alerta despues de 5 segundos
//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }


// //Muestra error en pantalla
// function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     console.log(error);
//     error.classList.add('error');
//     formulario.appendChild(error);

//     //Desapareciendo alerta despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);

// }


//Se puede simplificar las funciones de alerta haciendo restructuring, pero lo importante primero es hacerlo funcionar, luego se optimiza
function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desapareciendo alerta despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}

