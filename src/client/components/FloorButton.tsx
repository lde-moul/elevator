'use strict';

import useSocket from '../socket';
import { getFloorName } from '../../shared/Util';

import React from 'react';

interface FloorButtonProps {
  floor: number;
  active: boolean;
};

export default ({ floor, active }: FloorButtonProps) => {
  const socket = useSocket();

  const handlePress = () => {
    if (!active)
      socket.emit('request_from_elevator', floor);
  };

  const name = getFloorName(floor);

  return (
    <button type="button" onClick={handlePress}>
      {active ? `< ${name} >` : name}
    </button>
  );
}
