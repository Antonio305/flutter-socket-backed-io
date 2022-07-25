


const express = require('express');
const { SocketAddress } = require('net');
// creamos una pp express
const app = express();

// path 
const path = require('path');
// difinios nuestro path publico , apunta ata esta donde sea el servidor , apuntamos al caprte publica
const publicPath = path.resolve(__dirname, 'public');
require('dotenv').config();

// como parametro le pasamos el app de express la cual es compatible y pasa la configuracion 

const server = require('http').createServer(app);


 // hacemos la exportacion del io

module.exports.io = require('socket.io')(server);
// un cliene es unacomptadora que se acaba de conectar al servidor 



// para emiittr un  memsjae 




// ke digamos que use este path 
app.use(express.static(publicPath));

// app.get('/', (req, res) =>
//     res.send('Hello word'));

// retornamos un calllback la cual es un error
server.listen(process.env.PORT, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log(` servidor corrient en el:` + process.env.PORT);

    // creo que esto es lo mas loco que he hecho asta por el momento 
}
)
