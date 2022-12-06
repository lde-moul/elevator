'use strict';

import { defaultElevatorState } from './ElevatorState';
import Elevator from './Elevator';

import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState(defaultElevatorState);

  return (
    <div>
      <Elevator state={state} />
      <Elevator state={state} />
    </div>
  );
}
