import {
  TOGGLE_SHIFTS,
  ADD_SHIFT,
  LOG_IN,
} from './../constants';
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

export function logIn(firstname) {
  return {
    type: LOG_IN,
    firstname,
  }
};
