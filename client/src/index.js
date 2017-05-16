import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

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

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3005/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
