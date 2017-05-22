import shifts from './shiftsReducer';
import { sessionState } from './configReducer';

export default {
  //reducers here
  pending: shifts,
  session: sessionState,
};
