'use strict';

import React from 'react';

interface CurrentFloorIndicatorProps {
  active: boolean;
};

export default ({ active }: CurrentFloorIndicatorProps) => {
  return (
    <div>
      {active ? '[o]' : '[ ]'}
    </div>
  );
}
