'use strict';

import FloorName from './FloorName';

import React from 'react';

export default () => {
  const names = [
    <FloorName floor={9} />,
    <FloorName floor={8} />,
    <FloorName floor={7} />,
    <FloorName floor={6} />,
    <FloorName floor={5} />,
    <FloorName floor={4} />,
    <FloorName floor={3} />,
    <FloorName floor={2} />,
    <FloorName floor={1} />,
    <FloorName floor={0} />,
  ]

  return (
    <div>
      {names}
    </div>
  );
}
