import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLink, Button } from './styled';

const NavBar = styled.header`
  width: 100%;
  height: 3em;
  background-color: skyblue;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;

const CompanyLogo = styled.h1`
  margin: 0;
`;

const Nav = ({ showShifts, users }) => {
  return (
    <NavBar>
      <div>
        <Button onClick={showShifts}>Show My Shifts</Button>
        <Button><StyledLink to="/">Home</StyledLink></Button>
      </div>
      <CompanyLogo>Rota App</CompanyLogo>
      {users && <span>Welcome {users[0].firstname}</span>}
    </NavBar>
  );
};
Nav.defaultProps = {
  showShifts: false,
};

Nav.propTypes = {
  showShifts: PropTypes.func,
  users: PropTypes.array,
};

export default Nav;
