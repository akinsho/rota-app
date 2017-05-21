import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { renderMergedProps } from './RouterHelpers';

const PrivateRoute = ({ component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn
          ? renderMergedProps(component, props, rest)
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />;
      }}
    />
  );
};

PrivateRoute.defaultProps = {};

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool,
  component: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    loggedIn: state.session.loggedIn,
  };
};

export default PrivateRoute;
