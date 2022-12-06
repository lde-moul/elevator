'use strict';

import ElevatorState from './ElevatorState';

import React from 'react';

interface CallButtonProps {
  floor: number;
};

export default ({ floor }: CallButtonProps) => {
  return (
    <button>
      CALL
    </button>
  );
}
