import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.LoggedIn
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />}
  />
);

PrivateRoute.defaultProps = {};

PrivateRoute.propTypes = {};

export default PrivateRoute;
