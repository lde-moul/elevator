'use strict';

import { getDefaultElevatorState } from '../shared/ElevatorState';

import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT;

let elevators = [ getDefaultElevatorState(), getDefaultElevatorState() ];

const sendFile = (res, path) => {
  res.sendFile(path, { root: __dirname + '/../..' });
};

app.get('/bundle.js', (req, res) => {
  sendFile(res, 'dist/bundle.js');
});

app.get('*', (req, res) => {
  sendFile(res, 'index.html');
});

io.on('connection', (socket: Socket) => {
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
