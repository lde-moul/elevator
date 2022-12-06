'use strict';

import useSocket from '../socket';

import React from 'react';

interface CallButtonProps {
  floor: number;
};

export default ({ floor }: CallButtonProps) => {
  const socket = useSocket();

  const handlePress = () =>
    socket.emit('request_from_building', floor);

  return (
    <button type="button" onClick={handlePress}>
      CALL
    </button>
  );
}
