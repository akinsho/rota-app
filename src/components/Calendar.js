import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import styled from 'styled-components';

import { daysInCurrentMonth, getMonth } from './../lib/date_helpers';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CalendarContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(7, 5rem)
   grid-template-rows: repeat(7, 5rem)
   grid-template-areas:"weekdays weekdays weekdays weekdays weekdays weekdays weekdays "
   "days days days days days days days ";
   grid-gap:0.2rem 0.2rem;
   width: 50%;
   height: 50%;
  text-align: center;
`;

const WeekDay = styled.div`
  display: grid;
  grid-area: weekdays
  background-color: skyBlue;
`;

const Day = styled.div`
  display: grid;
  grid-area: days
  border: 1px solid skyBlue;
  width: 5rem;
  height: 5rem;
`;

const Title = styled.h1`
  color: skyblue;
  text-align: center;
`;
const daysOfWeek = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const weeksInAMonth = [0, 1, 2, 3, 4];

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageLayout>
        <Title>Calendar</Title>
        <CalendarContainer>
          {daysOfWeek.map((day, dayIndex) => (
            <div key={uuid()}>
              <WeekDay>{day}</WeekDay>
              {weeksInAMonth.map((week, weekIndex) => {
                let dayOfMonth = dayIndex + 1 + weekIndex * 7;
                return (
                  <Day key={uuid()}>
                    {dayOfMonth > daysInCurrentMonth ? null : dayOfMonth}
                  </Day>
                );
              })}
            </div>
          ))}
        </CalendarContainer>
      </PageLayout>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Calendar);
