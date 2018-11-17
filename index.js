const net = require('net');
const HOST = '127.0.0.1';
var  PORT = 1234;
const index = require('./js/main')
let data = "Hola";

//Se crea el servidor
const server = net.createServer(function(sock) {

  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

  var sockets = [];

  sock.on('data', function(data) {
     console.log("DATA: "+data);
  });

  sock.on('close', function(data){
    console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
  });

}).listen(PORT, HOST, function(){
    console.log("listening on port: "+PORT+" and host: "+HOST);
});

//Una vez que escucha el servidor TCP se crea el servidor Web
server.addListener('listening', ()=>{
    index.server.listen(port = 3000, () => {
        console.log(`Server running in http://localhost:${port}`)
     });
    
    index.io.on('connection', function(socket){
        console.log(`client: ${socket.id}`)
       
        setInterval(function(){
            socket.emit('sending', data);
        }, 1000);
          
        //Reciviendo algo del cliente
        socket.on('evento', (num) => {
          console.log(num);
        });
    
    });
});




    


