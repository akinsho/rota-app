import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { injectGlobal } from 'styled-components';

import reducer from './reducers/';
import Calendar from './components/Calendar';

//eslint-disable-next-line
injectGlobal`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  * {
   box-sizing: inherit
  }
`;

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
  }
}

export default App;
