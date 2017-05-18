import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import styled, { injectGlobal } from 'styled-components';

import Calendar from './components/Calendar';
import Nav from './components/Nav';
import WeeksShifts from './components/WeeksShifts';
import { showShifts } from './actions';
import { userQuery } from './components/Queries';

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
   font-family: 'Helvetica', sans-serif;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

class App extends Component {
  render() {
    console.log('users', this.props.data);
    const { users } = this.props.data;
    return (
      <Router>
        <AppContainer>
          <Nav showShifts={this.props.showShifts} users={users} />
          <Route exact path="/" render={() => <Calendar users={users} />} />
          <Route
            path="/weeks-rota"
            render={() => <WeeksShifts users={users} />}
          />
        </AppContainer>
      </Router>
    );
  }
}

export default compose(graphql(userQuery), connect(null, { showShifts }))(App);
