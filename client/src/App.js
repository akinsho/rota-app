import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import styled, { injectGlobal } from 'styled-components';
import PrivateRoute from './components/PrivateRoute';
import { PropsRoute } from './components/RouterHelpers';
import Calendar from './components/Calendar';
import Home from './components/Home';
import Nav from './components/Nav';
import WeeksShifts from './components/WeeksShifts';
import Login from './components/Login';
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

  //background-color: #E3F2FD;
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
    const { users } = this.props.data;
    const { loggedIn } = this.props.session;
    return (
      <Router>
        <AppContainer>
          <Nav users={users} loggedIn={loggedIn} />
          <PropsRoute exact path="/" component={Home} users={users} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            loggedIn={loggedIn}
            users={users}
            path="/calendar"
            component={Calendar}
          />
          <PrivateRoute
            path="/weeks-rota"
            users={users}
            loggedIn={loggedIn}
            component={WeeksShifts}
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

export default compose(graphql(userQuery), connect(mapStateToProps))(App);
