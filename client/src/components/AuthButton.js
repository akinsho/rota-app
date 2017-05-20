import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const AuthButton = withRouter(({ history }) => (
  <div>
    Stuff
  </div>
));

AuthButton.defaultProps = {
};

AuthButton.propTypes = {
};

export default AuthButton;
