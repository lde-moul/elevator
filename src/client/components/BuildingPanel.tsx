'use strict';

import CurrentFloorIndicator from './CurrentFloorIndicator';
import FloorName from './FloorName';

import React from 'react';

export default () => {
  const cells = [
    <FloorName floor={9} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={8} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={7} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={6} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={5} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={4} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={3} />,
    <CurrentFloorIndicator active={true} />,

    <FloorName floor={2} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={1} />,
    <CurrentFloorIndicator active={false} />,

    <FloorName floor={0} />,
    <CurrentFloorIndicator active={false} />,
  ]

  return (
    <div>
      {cells}
    </div>
  );
}
