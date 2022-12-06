'use strict';

import useSocket from '../socket';
import { getFloorName } from '../../shared/Util';
import '../../../css/main.css';

import React from 'react';

interface FloorButtonProps {
  floor: number;
  active: boolean;
  elevatorID: number;
};

export default ({ floor, active, elevatorID }: FloorButtonProps) => {
  const socket = useSocket();

  const handlePress = () => {
    if (!active)
      socket.emit('request_from_elevator', elevatorID, floor);
  };

  const name = getFloorName(floor);
  const className = 'square floor-button-' + (active ? 'on' : 'off');

  return (
    <button type="button" onClick={handlePress} className={className}>
      {name}
    </button>
  );
}
