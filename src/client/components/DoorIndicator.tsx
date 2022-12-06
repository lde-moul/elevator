'use strict';

import React from 'react';

interface DoorIndicatorProps {
  open: boolean;
};

export default ({ open }: DoorIndicatorProps) => {
  return (
    <div>
      {open ? 'OPEN' : 'CLOSED'}
    </div>
  );
}
