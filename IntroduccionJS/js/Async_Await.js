//Async / Await


function descargarNuevosClientes(){ //Primer funcion
    return new Promise( resolve =>{
        console.log('Descargando clientes... espere...')


        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000); //Este tiempo de espera es en milisegundos

    });
}


function descargarUltimosPedidos(){ //Segunda funcion
    return new Promise( resolve =>{
        console.log('Descargando pedidos... espere...')


        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000); //Este tiempo de espera es en milisegundos

    });
}


function app(){
    console.log('app lista');
}

async function app(){
    try{
        // const clientes = await descargarNuevosClientes(); //Se coloca await antes del promise
        // const pedidos = await descargarUltimosPedidos(); //Otro promise 
        // console.log(clientes);

        const resultado =  await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); //Este arreglo hace que se ejecuten al mismo tiempo, el arreglo contiene los promises.
        console.log(resultado[0]);
        console.log(resultado[1]);

    }catch(error){
        console.log(error);
    }
}

app();