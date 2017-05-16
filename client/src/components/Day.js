import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import daysInCurrentMonth from './../lib/date_helpers';

const DayContainer = styled.div`
  display: grid;
  grid-area: days
  border: 1px solid skyBlue;
  width:100%;
  height:100%;
`;

const Day = ({ dayOfMonth, time, assigned, shifts }) => (
  <DayContainer>
    {dayOfMonth > Number(daysInCurrentMonth) ? null : dayOfMonth}
    {shifts.map(shift => {
      if (shift.date === dayOfMonth) {
        return (
          <div key={uuid()}>
            <p>{shift.time}</p>
            <p>{shift.assigned}</p>
          </div>
        );
      }
    })}
  </DayContainer>
);

Day.defaultProps = {};

Day.propTypes = {
  time: PropTypes.string,
  assigned: PropTypes.string,
  shifts: PropTypes.array,
  dayOfMonth: PropTypes.number,
};

export default Day;
