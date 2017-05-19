import { TOGGLE_SHIFTS, LOG_IN } from './../constants';

export function sessionState(
  state = { loggedIn: false, showShifts: false },
  action
) {
  switch (action.type) {
    case TOGGLE_SHIFTS:
      return {
        ...state,
        shiftsToggle: !state.shiftsToggle,
      };
    case LOG_IN:
      return {
        ...state,
        loggedIn: !state.loggedIn,
      };
    default:
      return state;
  }
}
