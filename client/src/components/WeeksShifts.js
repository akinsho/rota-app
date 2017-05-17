import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { PageLayout } from './styled';
import { daysOfWeek } from './../lib/date_helpers';
import uuid from 'uuid';

const WeekGrid = styled.div`
  display: flex;
`;

const WeekContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`;

const WeekDay = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 8rem;
  border: 0.4px solid black;
  text-align: center;
  padding: 0.5rem;
`;

const Shift = styled.div`
  width: 100%;
`;

const WeeksShifts = ({ users }) => (
  <WeekContainer>
    <WeekGrid>
      {daysOfWeek.map(weekday => (
        <WeekDay key={uuid()}>
          {weekday}
          {/*<p>{users.map(user => user.)}</p>*/}
        </WeekDay>
      ))}
    </WeekGrid>
  </WeekContainer>
);

WeeksShifts.defaultProps = {
  users: [],
};

WeeksShifts.propTypes = {
  users: PropTypes.array,
};

export default WeeksShifts;
