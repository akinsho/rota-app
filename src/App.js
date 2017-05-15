import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Calendar from './components/Calendar';
import Shifts from './components/Shifts';

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

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Calendar />
        <Shifts />
      </AppContainer>
    );
  }
}

export default App;
