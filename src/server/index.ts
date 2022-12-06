'use strict';

import { emitElevatorState, requestFloorByBuilding, requestFloorByElevator } from './Elevator';
import { getDefaultElevatorState } from '../shared/ElevatorState';
import { elevatorProperties } from '../shared/Util';

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

const history = new MongoClient('mongodb://127.0.0.1')
  .db('elevator')
  .collection('history');

const logFloorRequest = async (elevatorID: number, floor: number) => {
  history.insertOne({
    order: await history.countDocuments(),
    elevatorID,
    floor
  });
};

const emitRecentHistory = async (socket: Socket) => {
  const recentEntries = await history.aggregate([
    { $sort: { order: -1 } },
    { $limit: 5 }
  ]).toArray();

  socket.emit('history', recentEntries);
};

io.on('connection', (socket: Socket) => {
  elevators.forEach(elevator =>
    emitElevatorState(elevator, io)
  );

  socket.on('request_from_elevator', (id: number, floor: number) => {
    if (id < 0 || id > elevatorProperties.length)
      return;

    logFloorRequest(id, floor);
    requestFloorByElevator(elevators[id], io, floor);
  })

  socket.on('request_from_building', (id: number, floor: number) => {
    if (id < 0 || id > elevatorProperties.length)
      return;

    logFloorRequest(id, floor);
    requestFloorByBuilding(elevators[id], io, floor);
  })

  socket.on('request_history', async () => {
    await emitRecentHistory(socket);
  })
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
