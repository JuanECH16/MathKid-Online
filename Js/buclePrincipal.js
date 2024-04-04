var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0, // Actualizaciones por segundo (actualizacion del juego)
    fps: 0, // Frames por segundo (veces que se dibuja o muestra el juego)
    iterar: function(registroTemporal){
        // CallBack: Llamar nuevamente a la función iterar hasta el...
        // infinito cada 60 segundos (depende los hz del monitor)
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);   

        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.diujar();

        // Por cada 1000 ms o 1 segundo se actuliza el indicadoor aps y fps
        if(registroTemporal -buclePrincipal.ultimoRegistro > 999){
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: function(){

    },
    actualizar: function(registroTemporal){
        buclePrincipal.aps++;
    },
    diujar: function(registroTemporal){
        buclePrincipal.fps++;
    }
}