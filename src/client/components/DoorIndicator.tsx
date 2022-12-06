'use strict';

import React from 'react';

interface DoorIndicatorProps {
  open: boolean;
};

export default ({ open }: DoorIndicatorProps) => {
  const className = 'square indicator door-indicator-' + (open ? 'on' : 'off');

  return (
    <div className={className}>
    </div>
  );
}
