import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLink, Button } from './styled';

const NavBar = styled.header`
  width: 100%;
  height: 3em;
  background-color: #2196F3;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  position: fixed;
  top: 0;
`;

const CompanyLogo = styled.h1`
  margin: 0;
`;

const Nav = ({ users, loggedIn }) => {
  return (
    <NavBar>
      <div>
        <Button><StyledLink to="/">Home</StyledLink></Button>
        <Button><StyledLink to="/calendar">Calendar</StyledLink></Button>
      </div>
      <CompanyLogo>Rota App</CompanyLogo>
      {users && loggedIn && <span>Welcome {users[0].firstname}</span>}
    </NavBar>
  );
};
Nav.defaultProps = {
  showShifts: false,
};

Nav.propTypes = {
  users: PropTypes.array,
};

export default Nav;
