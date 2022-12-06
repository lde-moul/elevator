'use strict';

import { getFloorName } from '../Util';

import React from 'react';

interface FloorButtonProps {
  floor: number;
  active: boolean;
};

export default ({ floor, active }: FloorButtonProps) => {
  const name = getFloorName(floor);

  return (
    <button>
      {active ? `< ${name} >` : name}
    </button>
  );
}
