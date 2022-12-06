'use strict';

import BuildingPanel from './BuildingPanel';
import ElevatorPanel from './ElevatorPanel';
import ElevatorState from './ElevatorState';

import React from 'react';

interface ElevatorProps {
  state: ElevatorState;
};

export default ({ state }: ElevatorProps) => {
  return (
    <div>
      <ElevatorPanel state={state} />
      <BuildingPanel />
    </div>
  );
}
