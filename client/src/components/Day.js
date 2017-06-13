import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLink } from './styled';

import uuid from 'uuid/v4';
import { daysInCurrentMonth } from './../lib/DateHelpers';

const DayContainer = styled.div`
  display: grid;
  grid-area: days
  border: 1px solid skyBlue;
  width:100%;
  height:100%;
  overflow: scroll;
`;

const Day = ({ dayOfMonth, shifts, month }) => {
  return (
    <DayContainer>
      {dayOfMonth > Number(daysInCurrentMonth) ? null : dayOfMonth}
      {shifts &&
        shifts.map(
          shift =>
            shift.day === dayOfMonth
              ? <StyledLink key={uuid()} to="/weeks-rota">
                  <div>
                    <p>{shift.time}</p>
                    <p>Dr. {shift.firstname + ' ' + shift.surname}</p>
                  </div>
                </StyledLink>
              : null
        )}
    </DayContainer>
  );
};

Day.propTypes = {
  shifts: PropTypes.array,
  dayOfMonth: PropTypes.number,
  month: PropTypes.number
};

export default Day;
