// Fetch Api

async function obtenerEmpleados(){

    const archivo = 'js/empleados.json';


    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);




    // fetch(archivo)
    //     .then( resultado => resultado.json()) //En vez de .json igual puede ser .text para verlo como texto
        
    //     .then( datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos;
    //         // console.log(empleados);

    //         empleados.forEach( empleado => {
    //             console.log(empleado);                
    //             console.log(empleado.id);                
    //             console.log(empleado.nombre);                
    //             console.log(empleado.puesto);   
                
    //             document.querySelector('.contenido').textContent = empleado.nombre;

    //         });

    //     })

}

obtenerEmpleados();