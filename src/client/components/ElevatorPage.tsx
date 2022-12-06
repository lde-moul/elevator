'use strict';

import Elevator from './Elevator';

import React from 'react';

export default () => {
  return (
    <div className='flex-h'>
      <Elevator elevatorID={0} />
      <Elevator elevatorID={1} />
    </div>
  );
}
