'use strict';

import { emitElevatorState, requestFloorByBuilding, requestFloorByElevator } from './Elevator';
import { getDefaultElevatorState } from '../shared/ElevatorState';

import express from 'express';
import http from 'http';
import { MongoClient } from 'mongodb';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT;

let elevators = [ getDefaultElevatorState(0), getDefaultElevatorState(1) ];

const sendFile = (res, path) => {
  res.sendFile(path, { root: __dirname + '/../..' });
};

app.get('/bundle.js', (req, res) => {
  sendFile(res, 'dist/bundle.js');
});

app.get('*', (req, res) => {
  sendFile(res, 'index.html');
});

let historyOrder = 0;

const history = new MongoClient('mongodb://127.0.0.1')
  .db('elevator')
  .collection('history');

const logFloorRequest = (elevatorID: number, floor: number) => {
  history.insertOne({
    order: historyOrder,
    elevatorID,
    floor
  });

  historyOrder++;
};

io.on('connection', (socket: Socket) => {
  elevators.forEach(elevator =>
    emitElevatorState(elevator, io)
  );

  socket.on('request_from_elevator', (id: number, floor: number) => {
    logFloorRequest(id, floor);
    requestFloorByElevator(elevators[id], io, floor);
  })

  socket.on('request_from_building', (id: number, floor: number) => {
    logFloorRequest(id, floor);
    requestFloorByBuilding(elevators[id], io, floor);
  })
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
