import { ADD_SHIFT } from './../constants';
export function addShift(shift) {
  return {
    type: ADD_SHIFT,
    shift,
  };
}
