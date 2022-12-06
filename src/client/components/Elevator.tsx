'use strict';

import BuildingPanel from './BuildingPanel';
import ElevatorPanel from './ElevatorPanel';
import ElevatorState, { getDefaultElevatorState } from '../../shared/ElevatorState';
import useSocket from '../socket';
import '../../../css/main.css';

import React, { useEffect, useState } from 'react';

interface ElevatorProps {
  elevatorID: number;
};

export default ({ elevatorID }: ElevatorProps) => {
  const [state, setState] = useState(getDefaultElevatorState(elevatorID));
  const socket = useSocket();

  useEffect(() => {
    socket.on('elevator', (newState: ElevatorState) => {
      if (newState.id == state.id)
        setState(newState);
    });

    return () => {
      socket.off('elevator');
    };
  }, []);

  return (
    <div className='flex-h elevator'>
      <ElevatorPanel state={state} />
      <BuildingPanel state={state} />
    </div>
  );
}
