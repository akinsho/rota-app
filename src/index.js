import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import App from './App';
import reducer from './reducers/';

const defaultState = {
  shiftsToggle: false,
  pending: {
    speciality: 'A&E',
    currentMonth: {
      month: 5,
      year: 2017,
      staff: [
        {
          name: 'Dr Example',
          grade: 'SHO',
          allotedLeave: 12,
        },
      ],
      shifts: [
        {
          date: 22,
          time: '1000-2200',
          grade: 'SHO',
          assigned: 'Dr Example',
        },
        {
          date: 12,
          time: '1600-0200',
          assigned: 'Dr Example',
        },
      ],
    },
  },
};
const store = createStore(reducer, defaultState, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
