import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { daysOfWeek } from './../lib/DateHelpers';
import uuid from 'uuid';

const WeekGrid = styled.div`
  display: flex;
  box-shadow: 0 1px 1px grey;
`;

const WeekContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const WeekDay = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 8rem;
  border: 0.4px solid black;
  text-align: center;
  padding: 0;
  background-color: whitesmoke;
`;

const WeekDayTitle = styled.h2`
  height: 2rem;
  border-bottom: 0.5px solid black;
  background-color: ${props => props.theme.light};
  margin: 0;
`;

const WeeksShifts = ({ users }) => (
  <WeekContainer>
    <WeekGrid>
      {daysOfWeek.map(weekday => (
        <WeekDay key={uuid()}>
          <WeekDayTitle>{weekday}</WeekDayTitle>
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
