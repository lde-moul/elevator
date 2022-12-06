'use strict';

export const getFloorName = (floor: number): string =>
  (floor !== 0) ? floor.toString() : 'RDC';

export const mapFlexibleArray = (array: Object, callback: Function) => {
  let mappedArray = [];

  Object.keys(array)
    .map(i => Number(i))
    .sort((a, b) => a - b)
    .forEach((i) =>
      mappedArray.push(callback(array[i], i))
    );

  return mappedArray;
};

export const filterFlexibleArray = (array: Object, callback: Function) => {
  let filteredArray = [];

  Object.keys(array)
    .map(i => Number(i))
    .forEach((i) => {
      if (callback(array[i], i))
        filteredArray[i] = array[i]
    });

  return filteredArray;
};

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
