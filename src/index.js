import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/';

const defaultState = {
  pending: {
    speciality: 'A&E',
    currentMonth: {
      staff: [
        {
          name: 'Dr Example',
          grade: 'SHO',
          allotedLeave: 12,
        },
      ],
      shifts: [
        {
          day: '22/07/2017',
          time: '1000-2200',
          grade: 'SHO',
          assigned: 'Dr Example',
        },
      ],
    },
  },
};
const store = createStore(reducer, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
