'use strict';

import BuildingPanel from './BuildingPanel';
import ElevatorPanel from './ElevatorPanel';
import { getDefaultElevatorState } from '../../shared/ElevatorState';

import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState(getDefaultElevatorState());

  return (
    <div>
      <ElevatorPanel state={state} />
      <BuildingPanel state={state} />
    </div>
  );
}
