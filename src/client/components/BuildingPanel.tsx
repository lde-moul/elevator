'use strict';

import CallButton from './CallButton';
import CurrentFloorIndicator from './CurrentFloorIndicator';
import ElevatorState from '../../shared/ElevatorState';
import FloorName from './FloorName';
import '../../../css/main.css';

import React from 'react';

interface BuildingPanelProps {
  state: ElevatorState;
};

export default ({ state }: BuildingPanelProps) => {
  const cells = state.buildingRequestedFloors.map((requested, floor) =>
    [
      <FloorName floor={floor} />,
      <CurrentFloorIndicator active={requested} />,
      <CallButton floor={floor} />,
    ]
  ).reverse();

  return (
    <div className='building-panel'>
      {cells}
    </div>
  );
}
