'use strict';

import FloorButton from './FloorButton';

import React from 'react';

export default () => {
  const buttons = [
    <FloorButton floor={9} active={false} />,
    <FloorButton floor={8} active={false} />,
    <FloorButton floor={7} active={false} />,
    <FloorButton floor={6} active={false} />,
    <FloorButton floor={5} active={false} />,
    <FloorButton floor={4} active={false} />,
    <FloorButton floor={3} active={true} />,
    <FloorButton floor={2} active={false} />,
    <FloorButton floor={1} active={false} />,
    <FloorButton floor={0} active={false} />,
  ]

  return (
    <div>
      {buttons}
    </div>
  );
}
