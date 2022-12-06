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
      <CurrentFloorIndicator active={floor == state.floor} />,
      <CallButton floor={floor} elevatorID={state.id}/>,
    ]
  ).reverse();

  return (
    <div className='building-panel'>
      {cells}
    </div>
  );
}
