import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLink, Button, media } from './styled';

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
  ${media.handheld`
      height: auto;
      flex-direction: row;
    * {
        font-size: 1em;
      }
  `}
`;

const Container = styled.div`
  width: 33.33%;
  display: flex;
  ${props => (props.row ? 'flex-direction: column' : '')}
  * {
    margin: 0.2em;
   }
`;

const CompanyLogo = styled.h1`
  margin: 0.3em;
`;

const Nav = ({ users, session }) => {
  return (
    <NavBar>
      <Container>
        <Button><StyledLink to="/">Home</StyledLink></Button>
        <Button><StyledLink to="/calendar">Calendar</StyledLink></Button>
      </Container>
      <Container>
        <CompanyLogo>Rota App</CompanyLogo>
        {users && session.loggedIn && <p>Welcome {session.username}</p>}
      </Container>

    </NavBar>
  );
};
Nav.defaultProps = {
  showShifts: false
};

Nav.propTypes = {
  users: PropTypes.array
};

export default Nav;
