'use strict';

import { getFilledArray } from "../shared/Util";

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
  elevatorRequestedFloors: boolean[];
  buildingRequestedFloors: boolean[];
  processing: boolean;
};

export const getDefaultElevatorState = (id: number): ElevatorState => ({
  id,
  floor: 3,
  open: true,
  direction: Direction.Static,
  processing: false,
  elevatorRequestedFloors: getFilledArray(10, false),
  buildingRequestedFloors: getFilledArray(10, false)
});
