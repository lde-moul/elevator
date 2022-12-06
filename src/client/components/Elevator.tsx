'use strict';

import BuildingPanel from './BuildingPanel';
import ElevatorPanel from './ElevatorPanel';
import { getDefaultElevatorState } from '../../shared/ElevatorState';
import useSocket from '../socket';

import React, { useEffect, useState } from 'react';

export default () => {
  const [state, setState] = useState(getDefaultElevatorState());
  const socket = useSocket();

  useEffect(() => {
    socket.on('elevator', setState);

    return () => {
      socket.off('elevator');
    };
  }, []);

  return (
    <div>
      <ElevatorPanel state={state} />
      <BuildingPanel state={state} />
    </div>
  );
}
