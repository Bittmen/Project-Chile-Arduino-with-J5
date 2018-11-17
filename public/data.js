'use strict'
window.addEventListener('load', function(){

    var socket = io();

    socket.on('sending', function(data){
        console.log(data);
        var datos = document.querySelector('#datos');
        datos.append(data);
    });
});