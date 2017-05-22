import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Intro = styled.div`
  width: 50%;
  text-align: center;
`;

const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = ({ users }) => (
  <IntroContainer>
    <h1>Welcome to Rota</h1>
    <Intro>
      This app aims to make rota-by-excel spreadsheets a thing of the past. You can make swaps which are synced across all app users, dynamically see changes to your rota etc [WIP 👍🏾]
    </Intro>
  </IntroContainer>
);

Home.defaultProps = {};

Home.propTypes = {
  users: PropTypes.array,
};

export default Home;
