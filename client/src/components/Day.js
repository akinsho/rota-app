import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLink } from './styled';

import uuid from 'uuid/v4';
import { daysInCurrentMonth } from './../lib/date_helpers';

const DayContainer = styled.div`
  display: grid;
  grid-area: days
  border: 1px solid skyBlue;
  width:100%;
  height:100%;
`;

const Day = ({ dayOfMonth, time, assigned, shifts, apollo }) => {
  console.log('props', apollo);
  return (
    <DayContainer>
      {dayOfMonth > Number(daysInCurrentMonth) ? null : dayOfMonth}
      {shifts.map(shift => {
        if (shift.date === dayOfMonth) {
          return (
            <StyledLink key={uuid()} to="/weeks-rota">
              <div>
                <p>{shift.time}</p>
                <p>{shift.assigned}</p>
              </div>
            </StyledLink>
          );
        }
        return null;
      })}
    </DayContainer>
  );
};

Day.defaultProps = {};

Day.propTypes = {
  time: PropTypes.string,
  assigned: PropTypes.string,
  shifts: PropTypes.array,
  dayOfMonth: PropTypes.number,
};

export default Day;
