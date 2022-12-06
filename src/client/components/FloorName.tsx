'use strict';

import { getFloorName } from '../../shared/Util';
import '../../../css/main.css';

import React from 'react';

interface FloorNameProps {
  floor: number;
};

export default ({ floor }: FloorNameProps) => {
  return (
    <div className='square floor-name'>
      {getFloorName(floor)}
    </div>
  );
}
