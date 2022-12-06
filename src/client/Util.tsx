'use strict';


export const getFloorName = (floor: number): string =>
  (floor !== 0) ? floor.toString() : 'RDC';
