'use strict';

import { getFloorName } from '../Util';

import React from 'react';

interface FloorNameProps {
  floor: number;
};

export default ({ floor }: FloorNameProps) => {
  return (
    <div>
      {getFloorName(floor)}
    </div>
  );
}
