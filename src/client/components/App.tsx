'use strict';

import ElevatorPage from './ElevatorPage';
import useSocket, { initializeSocket } from '../socket';

import React from 'react';

interface AppProps {
};

export default ({}: AppProps) => {
  if (!useSocket())
    initializeSocket();

  return <ElevatorPage />;
};
