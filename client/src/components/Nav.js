import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBar = styled.header`
  width: 100%;
  height: 3em;
  background-color: skyblue;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  {/*position: fixed; */}
  {/*top: 0; */}
`;

const Toggle = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  box-shadow: 0 1px 1px grey;
`;

const Nav = ({ showShifts, users }) => {
  return (
    <NavBar>
      <Toggle onClick={showShifts}>Show My Shifts</Toggle>
      {users && <span>Welcome {users[0].firstname}</span>}
    </NavBar>
  );
};
Nav.defaultProps = {};

Nav.propTypes = {
  showShifts: PropTypes.func,
  users: PropTypes.array,
};

export default Nav;
