'use strict';

import useSocket, { initializeSocket } from '../socket';

import React from 'react';

interface AppProps {
};

export default ({}: AppProps) => {
  if (!useSocket())
    initializeSocket();

  return <div></div>;
};
