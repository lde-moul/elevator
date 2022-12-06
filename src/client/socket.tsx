'use strict';

import io, { Socket } from 'socket.io-client';

let socket: Socket;

export default (): Socket => {
  return socket;
};

export const initializeSocket = () =>
  socket = io();
