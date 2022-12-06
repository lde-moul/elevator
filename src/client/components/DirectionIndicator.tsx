'use strict';

import { Direction } from '../../shared/ElevatorState';

import React from 'react';

interface DirectionIndicatorProps {
  direction: Direction;
};

export default ({ direction }: DirectionIndicatorProps) => {
  const directions = {
    [Direction.Up]: '^',
    [Direction.Static]: '-',
    [Direction.Down]: 'v',
  };

  return (
    <div>
      {directions[direction]}
    </div>
  );
}
