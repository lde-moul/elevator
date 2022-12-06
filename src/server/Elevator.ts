'use strict';

import ElevatorState, { Direction } from "../shared/ElevatorState";

import { setTimeout } from "timers/promises";

const isFloorRequested = (floor: number, elevator: ElevatorState): boolean =>
  elevator.elevatorRequestedFloors[floor] || elevator.buildingRequestedFloors[floor];

const forgetCurrentFloor = (elevator: ElevatorState) => {
  elevator.elevatorRequestedFloors[elevator.floor] = false;
  elevator.buildingRequestedFloors[elevator.floor] = false;
}

const getDistanceToRequestedFloorAbove = (elevator: ElevatorState): number => {
  for (let floor = elevator.floor; floor < elevator.elevatorRequestedFloors.length; floor++) {
    if (isFloorRequested(floor, elevator))
      return floor - elevator.floor;
  }
  return Infinity;
};

const getDistanceToRequestedFloorBelow = (elevator: ElevatorState): number => {
  for (let floor = elevator.floor; floor >= 0; floor--) {
    if (isFloorRequested(floor, elevator))
      return elevator.floor - floor;
  }
  return Infinity;
};

const getBestDirection = (elevator: ElevatorState): Direction => {
  const distanceAbove = getDistanceToRequestedFloorAbove(elevator);
  const distanceBelow = getDistanceToRequestedFloorBelow(elevator);

  if (distanceAbove < distanceBelow)
    return Direction.Up;
  else if (distanceBelow < distanceAbove)
    return Direction.Down;
  else
    return Direction.Static;
};

export const moveElevator = async (elevator: ElevatorState) => {
  await setTimeout(1000);

  elevator.floor += [ 1, 0, -1 ][elevator.direction];

  if (isFloorRequested(elevator.floor, elevator)) {
    elevator.direction = Direction.Static;
    elevator.open = true;

    forgetCurrentFloor(elevator);

    await setTimeout(5000);

    await startElevator(elevator);
  } else {
    await moveElevator(elevator);
  }
};

export const startElevator = async (elevator: ElevatorState) => {
  elevator.direction = getBestDirection(elevator);

  if (elevator.direction !== Direction.Static) {
    elevator.open = false;
    await moveElevator(elevator);
  } else {
    elevator.processing = false;
  }
};

export const requestFloorByElevator = async (elevator: ElevatorState, floor: number) => {
  if (floor == elevator.floor)
    return;

  elevator.elevatorRequestedFloors[floor] = true;

  if (!elevator.processing) {
    elevator.processing = true;
    startElevator(elevator);
  }
}
