//Metodos de Propiedad

//Mantienen toda la información en un solo objeto, ideal para proyectos grandes.

const reproductor = {
    reproducir: function(){
        console.log("Reproduciendo Canción");
    },
    pausar: function(){
        console.log("Pausando...")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    },
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');