'use strict';

import { elevatorProperties } from "../shared/Util";

export enum Direction {
  Up,
  Static,
  Down,
}

export default interface ElevatorState {
  id: number;
  floor: number;
  open: boolean;
  direction: Direction;
  elevatorRequestedFloors: Object;
  buildingRequestedFloors: Object;
  processing: boolean;
};

export const getDefaultElevatorState = (id: number): ElevatorState => {
  let floors = {};
  for (let floor = elevatorProperties[id].bottom; floor <= elevatorProperties[id].top; floor++)
    floors[floor] = false;

  return {
    id,
    floor: 3,
    open: true,
    direction: Direction.Static,
    processing: false,
    elevatorRequestedFloors: { ...floors },
    buildingRequestedFloors: { ...floors }
  }
};
