import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    { ...rest }
    loggedIn={loggedIn}
    render={props =>
      props.LoggedIn
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/calendar',
              state: { from: props.location },
            }}
          />}
  />
);

PrivateRoute.defaultProps = {};

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool,
  component: PropTypes.object
};

export default PrivateRoute;
