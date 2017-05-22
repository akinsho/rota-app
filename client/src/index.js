import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import defaultState from './defaultState';
import reducer from './reducers/';
import theme from './theme';
import App from './App';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3005/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const rootReducer = combineReducers({
  ...reducer,
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
    <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
