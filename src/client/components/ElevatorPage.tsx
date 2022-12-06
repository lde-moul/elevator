'use strict';

import { getDefaultElevatorState } from '../../shared/ElevatorState';
import Elevator from './Elevator';

import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState(getDefaultElevatorState());

  return (
    <div>
      <Elevator state={state} />
      <Elevator state={state} />
    </div>
  );
}
