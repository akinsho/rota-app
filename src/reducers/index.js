import { combineReducers } from 'redux';
import shifts from './shiftsReducer';

export default combineReducers(
  {
    //reducers here
    pending:shifts,
  }
);
