import * as actions from './../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.ADD_SHIFT:
      return {
        ...state,
        [action.month]: {
          shifts: [...state[action.month].shifts, action.shift],
        },
      };
    default:
      return state;
  }
}
