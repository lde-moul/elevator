'use strict';

import BuildingPanel from './BuildingPanel';
import ElevatorPanel from './ElevatorPanel';

import React from 'react';

export default () => {
  return (
    <div>
      <ElevatorPanel />
      <BuildingPanel />
    </div>
  );
}
