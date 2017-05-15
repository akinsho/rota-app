import { TOGGLE_SHIFTS, ADD_SHIFT } from './../constants';
export function addShift(shift) {
  return {
    type: ADD_SHIFT,
    shift,
  };
}

export function showShifts() {
  return {
    type: TOGGLE_SHIFTS,
  };
}
