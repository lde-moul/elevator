'use strict';

import useSocket from '../socket';
import '../../../css/main.css';

import React from 'react';

interface CallButtonProps {
  active: boolean;
  floor: number;
  elevatorID: number;
};

export default ({ active, floor, elevatorID }: CallButtonProps) => {
  const socket = useSocket();

  const handlePress = () =>
    socket.emit('request_from_building', elevatorID, floor);

  const className = 'square call-button-' + (active ? 'on' : 'off');

  return (
    <button type="button" onClick={handlePress} className={className}>
    </button>
  );
}
