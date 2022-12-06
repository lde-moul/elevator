'use strict';

import { getFloorName } from '../../shared/Util';

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
