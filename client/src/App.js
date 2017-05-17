import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { graphql, gql, compose } from 'react-apollo';
import styled, { injectGlobal } from 'styled-components';

import Calendar from './components/Calendar';
import Nav from './components/Nav';
import { showShifts } from './actions';

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
`;

class App extends Component {
  render() {
    console.log('users', this.props.data);
    return (
      <Router>
        <AppContainer>
          <Nav
            showShifts={this.props.showShifts}
            users={this.props.data.users}
          />
          <Route
            exact
            path="/"
            render={() => <Calendar users={this.props.data.users} />}
          />
        </AppContainer>
      </Router>
    );
  }
}
const userQuery = gql`
  query UserQuery {
    users {
      id
      firstname
      surname
    }
  }
`;

export default compose(graphql(userQuery), connect(null, { showShifts }))(App);
