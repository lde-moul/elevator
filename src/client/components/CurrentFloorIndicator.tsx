'use strict';

import React from 'react';
import '../../../css/main.css';

interface CurrentFloorIndicatorProps {
  active: boolean;
};

export default ({ active }: CurrentFloorIndicatorProps) => {
  const className = 'square indicator current-floor-indicator-' + (active ? 'on' : 'off');

  return (
    <div className={className}>
    </div>
  );
}
