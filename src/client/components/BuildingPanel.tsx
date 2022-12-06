'use strict';

import CallButton from './CallButton';
import CurrentFloorIndicator from './CurrentFloorIndicator';
import ElevatorState from '../../shared/ElevatorState';
import { mapFlexibleArray } from '../../shared/Util';
import FloorName from './FloorName';
import '../../../css/main.css';

import React from 'react';

interface BuildingPanelProps {
  state: ElevatorState;
};

export default ({ state }: BuildingPanelProps) => {
  const cells = mapFlexibleArray(state.buildingRequestedFloors, (requested, floor) =>
    [
      <FloorName floor={floor} />,
      <CurrentFloorIndicator active={floor == state.floor} />,
      <CallButton active={requested} floor={floor} elevatorID={state.id}/>,
    ]
  ).reverse();

  return (
    <div className='building-panel'>
      {cells}
    </div>
  );
}
