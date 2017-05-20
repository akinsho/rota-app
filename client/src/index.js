import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import defaultState from './defaultState';
import shifts from './reducers/shiftsReducer';
import { sessionState } from './reducers/configReducer';

import App from './App';
// import { Provider } from 'react-redux';
// import reducer from './reducers/';


const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3005/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const rootReducer = combineReducers({
  pending: shifts,
  session: sessionState,
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
