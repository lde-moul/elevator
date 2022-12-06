'use strict';

import CallButton from './CallButton';
import CurrentFloorIndicator from './CurrentFloorIndicator';
import FloorName from './FloorName';

import React from 'react';

export default () => {
  const cells = [
    <FloorName floor={9} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={8} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={7} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={6} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={5} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={4} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={3} />,
    <CurrentFloorIndicator active={true} />,
    <CallButton />,

    <FloorName floor={2} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={1} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,

    <FloorName floor={0} />,
    <CurrentFloorIndicator active={false} />,
    <CallButton />,
  ]

  return (
    <div>
      {cells}
    </div>
  );
}
