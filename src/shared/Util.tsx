'use strict';

export const getFilledArray = (length: number, value: any): Array<any> =>
  new Array(length).fill(value);

export const getFloorName = (floor: number): string =>
  (floor !== 0) ? floor.toString() : 'RDC';

export const elevatorProperties = [
  {
    bottom: 0,
    top: 9,
    condition: () => true
  },
  {
    bottom: -5,
    top: 9,
    condition: (floor) => floor < 0 || floor > 8 || floor % 2 === 0
  },
];
