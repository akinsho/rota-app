import { ADD_SHIFT } from './../constants';
export function addShift(day, shift) {
  return {
    type: ADD_SHIFT,
    day,
    shift,
  };
}
