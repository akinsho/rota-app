import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import styled from 'styled-components';

import { month } from './../lib/date_helpers';
import Day from './Day';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;
const CalendarContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(7, 8rem);
   grid-template-rows: repeat(7, 8rem);
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
            <div key={uuid()}>
              <WeekDay>{day}</WeekDay>
              {weeksInAMonth.map((week, weekIndex) => {
                let dayOfMonth = dayIndex + 1 + weekIndex * 7;
                return (
                  <Day {...currentMonth} dayOfMonth={dayOfMonth} key={uuid()} />
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
  return {
    pending: state.pending,
  };
}

export default connect(mapStateToProps)(Calendar);
