import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { renderMergedProps } from './RouterHelpers';

//TODO a clear hack to be fixed by trolling through the docs
let loggedInRoute;
const PrivateRoute = ({ component, loggedIn, ...rest }) => {
  loggedInRoute = loggedIn;
  return (
    <Route
      {...rest}
      render={props => {
        return loggedInRoute
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
