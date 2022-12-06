'use strict';

import React from 'react';

interface FloorButtonProps {
  floor: number;
  active: boolean;
};

export default ({ floor, active }: FloorButtonProps) => {
  return (
    <button>
      {active ? `< ${floor} >` : floor}
    </button>
  );
}
