import { combineReducers } from 'redux';
import shifts from './shiftsReducer';
import shiftsToggle from './configReducer';

export default combineReducers({
  //reducers here
  pending: shifts,
  shiftsToggle,
});
