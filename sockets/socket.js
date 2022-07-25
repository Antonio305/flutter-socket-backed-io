

const {io}  =  require('../app');

io.on('connection', client => {
     // client.on('event', data => { /**/ });
     console.log('Cienete conectado');
     client.on('disconnect', () => {
          console.log('cliente desconectado ');
     });
     // on para estar escuchando
     // con el paylod obtenemos el mensaje
     client.on('mensaje', (payload) => {
          console.log(`mensaje!!!! `, payload);
          // con io mamdamos el menaje a todas la notificaciones 
          // emite a todos los clientes
          io.emit('mensaje', { admin: 'nuevo mensaje' });
     });

});