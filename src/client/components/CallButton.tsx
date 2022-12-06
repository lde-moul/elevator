'use strict';

import ElevatorState from '../../shared/ElevatorState';

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
