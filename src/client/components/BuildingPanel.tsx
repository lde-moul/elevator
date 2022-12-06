'use strict';

import CallButton from './CallButton';
import CurrentFloorIndicator from './CurrentFloorIndicator';
import ElevatorState from '../../shared/ElevatorState';
import { elevatorProperties, filterFlexibleArray, mapFlexibleArray } from '../../shared/Util';
import FloorName from './FloorName';
import '../../../css/main.css';

import React from 'react';

interface BuildingPanelProps {
  state: ElevatorState;
};

export default ({ state }: BuildingPanelProps) => {
  const filteredFloors = filterFlexibleArray(state.buildingRequestedFloors, (_, floor) =>
    elevatorProperties[state.id].condition(floor)
  );
  const cells = mapFlexibleArray(filteredFloors, (requested, floor) =>
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
