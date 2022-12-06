'use strict';

import DirectionIndicator from './DirectionIndicator';
import DoorIndicator from './DoorIndicator';
import ElevatorState from '../../shared/ElevatorState';
import FloorButton from './FloorButton';
import '../../../css/main.css';

import React from 'react';

interface ElevatorPanelProps {
  state: ElevatorState;
};

export default ({ state }: ElevatorPanelProps) => {
  const buttons = state.elevatorRequestedFloors.map((requested, floor) =>
    <FloorButton floor={floor} active={requested} elevatorID={state.id}/>,
  ).reverse();

  return (
    <div className='elevator-panel flex-v'>
      {buttons}
      <DirectionIndicator direction={state.direction} />
      <DoorIndicator open={state.open} />
    </div>
  );
}
