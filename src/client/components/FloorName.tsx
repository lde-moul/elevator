'use strict';

import React from 'react';

interface FloorNameProps {
  floor: number;
};

export default ({ floor }: FloorNameProps) => {
  return (
    <div>
      {floor}
    </div>
  );
}
