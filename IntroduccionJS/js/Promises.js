//Promises en Java Script

//Puede ser que sea ahora, en un futuro o nunca

const usuarioAutenticado = new Promise( (resolve, reject)=>{ //Automaticamente se pasan parametros, resolve y reject
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //EL Promise se cumple
    }else{
        reject('No se puedo iniciar sesión'); //El Promise no se cumple
    }
});

console.log(usuarioAutenticado); //Imprime la estructura del promise

//Imprimiendo el resultado
usuarioAutenticado
    .then( resultado => console.log(resultado) ) //Atrapa el resolve
    .catch (error => console.log(error) ) //Atrapa el reject


//En los Promises existen 3 valores posibles

//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio
//Rejected: Se ha rechazado o no se pudo cumplir