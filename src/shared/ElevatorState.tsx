'use strict';

import { getFilledArray } from "../shared/Util";

export enum Direction {
  Up,
  Static,
  Down,
}

export default interface ElevatorState {
  floor: number;
  open: boolean;
  direction: Direction;
  elevatorRequestedFloors: boolean[];
  buildingRequestedFloors: boolean[];
};

export const defaultElevatorState: ElevatorState = {
  floor: 3,
  open: false,
  direction: Direction.Static,
  elevatorRequestedFloors: getFilledArray(10, false),
  buildingRequestedFloors: getFilledArray(10, false)
};
