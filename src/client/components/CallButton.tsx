'use strict';

import useSocket from '../socket';

import React from 'react';

interface CallButtonProps {
  floor: number;
  elevatorID: number;
};

export default ({ floor, elevatorID }: CallButtonProps) => {
  const socket = useSocket();

  const handlePress = () =>
    socket.emit('request_from_building', elevatorID, floor);

  return (
    <button type="button" onClick={handlePress}>
      CALL
    </button>
  );
}
