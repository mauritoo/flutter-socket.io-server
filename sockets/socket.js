const { io } = require('../index');


io.on('connection', client => {

    console.log('Cliente conectado');
    
    client.on('disconnect', () => { 
        console.log('Cliente Desconectado');
     });

    client.on('mensaje', (payload) => {
        console.log('Mensaje: ', payload);
        io.emit('mensaje', payload);
    })
});