import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import styled from 'styled-components';

import { month } from './../lib/date_helpers';
import Day from './Day';
import Shifts from './Shifts';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;
const CalendarContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(7, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-template-areas:"weekdays weekdays weekdays weekdays weekdays weekdays weekdays "
   "days days days days days days days ";
   grid-gap:0.2rem 0.2rem;
   height: 50%;
  text-align: center;
`;

const InnerCalendarContainer = styled.div`
  width: 100%;
  height: 7rem;
`;

const WeekDay = styled.div`
  display: grid;
  grid-area: weekdays
  background-color: skyBlue;
`;

const Title = styled.h1`
  color: skyblue;
  text-align: center;
`;
const daysOfWeek = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const weeksInAMonth = [0, 1, 2, 3, 4];

class Calendar extends Component {
  render() {
    const { currentMonth } = this.props.pending;
    return (
      <PageLayout>
        <Title>{month}</Title>
        <CalendarContainer>
          {daysOfWeek.map((day, dayIndex) => (
            <InnerCalendarContainer key={uuid()}>
              <WeekDay>{day}</WeekDay>
              {weeksInAMonth.map((week, weekIndex) => {
                let dayOfMonth = dayIndex + 1 + weekIndex * 7;
                return (
                  <Day {...currentMonth} dayOfMonth={dayOfMonth} key={uuid()} />
                );
              })}
            </InnerCalendarContainer>
          ))}
        </CalendarContainer>
        {this.props.showShifts && <Shifts />}
      </PageLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    pending: state.pending,
    showShifts: state.shiftsToggle.showShifts,
  };
}

export default connect(mapStateToProps)(Calendar);