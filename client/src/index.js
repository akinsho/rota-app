import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import shifts from './reducers/shiftsReducer';
import shiftsToggle from './reducers/configReducer';

import App from './App';
// import reducer from './reducers/';

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

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3005/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const rootReducer = combineReducers({
  pending: shifts,
  shiftsToggle,
  apollo: client.reducer(),
});
const store = createStore(
  rootReducer,
  defaultState,
  devToolsEnhancer(),
  compose(applyMiddleware(client.middleware()))
);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
