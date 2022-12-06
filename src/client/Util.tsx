'use strict';


export const getFilledArray = (length: number, value: any): Array<any> =>
  new Array(length).fill(value);

export const getFloorName = (floor: number): string =>
  (floor !== 0) ? floor.toString() : 'RDC';
