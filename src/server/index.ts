'use strict';

import { emitElevatorState, requestFloorByBuilding, requestFloorByElevator } from './Elevator';
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
  emitElevatorState(elevators[0], io);

  socket.on('request_from_elevator', (floor: number) => {
    requestFloorByElevator(elevators[0], io, floor);
  })

  socket.on('request_from_building', (floor: number) => {
    requestFloorByBuilding(elevators[0], io, floor);
  })
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
