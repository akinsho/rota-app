import * as actions from './../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.ADD_SHIFT:
      return {
        ...state,
        currentMonth: {
          ...state.staff,
          shifts: [...state.currentMonth.shifts, action.shift],
        },
      };
    default:
      return state;
  }
}
