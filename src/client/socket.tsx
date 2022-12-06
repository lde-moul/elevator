'use strict';

import io, { Socket } from 'socket.io-client';

let socket: Socket;

export default (): Socket => {
  if (!socket)
    socket = io();

  return socket;
};
