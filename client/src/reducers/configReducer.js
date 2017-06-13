import { TOGGLE_SHIFTS, LOG_IN } from './../constants';

export function sessionState(
  state = { username: '', loggedIn: false, showShifts: false },
  action
) {
  switch (action.type) {
    case TOGGLE_SHIFTS:
      return {
        ...state,
        shiftsToggle: !state.shiftsToggle
      };
    case LOG_IN:
      return {
        ...state,
        loggedIn: !state.loggedIn,
        username: action.username
      };
    default:
      return state;
  }
}
