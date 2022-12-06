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
  processing: boolean;
};

export const getDefaultElevatorState = (): ElevatorState => ({
  floor: 3,
  open: true,
  direction: Direction.Static,
  processing: false,
  elevatorRequestedFloors: getFilledArray(10, false),
  buildingRequestedFloors: getFilledArray(10, false)
});
