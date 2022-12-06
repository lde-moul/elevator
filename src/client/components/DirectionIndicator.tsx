'use strict';

import React from 'react';

export enum Direction {
  Up,
  Static,
  Down,
}

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
