import './app/configs/database';
import params from './app/configs/params';
import http from 'http';
import App from './app/app';
import mongoose from 'mongoose';

const server = http.createServer(App());

export const io = require('socket.io')(server);


server.listen(params.apiPort, () => {
    console.log(`Listening ${server.address().port} port.`);
});


