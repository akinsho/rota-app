import { TOGGLE_SHIFTS } from './../constants';

export default function(state = { showShifts: false }, action) {
  switch (action.type) {
    case TOGGLE_SHIFTS:
      return {
        ...state,
        showShifts: !state.showShifts,
      };
    default:
      return state;
  }
}
