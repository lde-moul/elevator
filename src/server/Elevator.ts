'use strict';

import ElevatorState, { Direction } from "../shared/ElevatorState";

import { setTimeout } from "timers/promises";

const isFloorRequested = (floor: number, elevator: ElevatorState): boolean =>
  elevator.elevatorRequestedFloors[floor] || elevator.buildingRequestedFloors[floor];

const forgetCurrentFloor = (elevator: ElevatorState, io) => {
  elevator.elevatorRequestedFloors[elevator.floor] = false;
  elevator.buildingRequestedFloors[elevator.floor] = false;
  emitElevatorState(elevator, io);
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
  else if (distanceAbove !== 0 && distanceAbove !== Infinity)
    return Direction.Up;
  else
    return Direction.Static;
};

const moveElevator = async (elevator: ElevatorState, io) => {
  await setTimeout(1000);

  elevator.floor += [ 1, 0, -1 ][elevator.direction];
  emitElevatorState(elevator, io);

  if (isFloorRequested(elevator.floor, elevator)) {
    elevator.direction = Direction.Static;
    elevator.open = true;
    emitElevatorState(elevator, io);

    forgetCurrentFloor(elevator, io);

    await setTimeout(5000);

    await startElevator(elevator, io);
  } else {
    await moveElevator(elevator, io);
  }
};

const startElevator = async (elevator: ElevatorState, io) => {
  elevator.direction = getBestDirection(elevator);
  emitElevatorState(elevator, io);

  if (elevator.direction !== Direction.Static) {
    elevator.open = false;
    emitElevatorState(elevator, io);
    await moveElevator(elevator, io);
  } else {
    elevator.processing = false;
  }
};

export const requestFloorByElevator = async (elevator: ElevatorState, io, floor: number) => {
  if (floor == elevator.floor)
    return;

  elevator.elevatorRequestedFloors[floor] = true;
  emitElevatorState(elevator, io);

  if (!elevator.processing) {
    elevator.processing = true;
    startElevator(elevator, io);
  }
}

export const emitElevatorState = (elevator: ElevatorState, io) =>
  io.emit("elevator", elevator);
