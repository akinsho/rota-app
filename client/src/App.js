import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import styled, { injectGlobal } from 'styled-components';
import PrivateRoute from './components/PrivateRoute';

import Calendar from './components/Calendar';
import Nav from './components/Nav';
import WeeksShifts from './components/WeeksShifts';
import Login from './components/Login';
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
    //console.log('databaseInfo', this.props.data);
    const { users } = this.props.data;
    return (
      <Router>
        <AppContainer>
          <Nav showShifts={this.props.showShifts} users={users} />
          <Route exact path="/" component={Login} />
          <PrivateRoute
            loggedIn={this.props.loggedIn}
            path="/calendar"
            render={() => <Calendar users={users} />}
          />
          <PrivateRoute
            path="/weeks-rota"
            loggedIn={this.props.loggedIn}
            render={() => <WeeksShifts users={users} />}
          />
        </AppContainer>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.session,
  };
};

export default compose(
  graphql(userQuery),
  connect(mapStateToProps, { showShifts })
)(App);
