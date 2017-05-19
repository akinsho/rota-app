import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { compose, graphql } from 'react-apollo';
import { month, daysOfWeek, weeksInAMonth } from './../lib/DateHelpers';
import Day from './Day';
import Shifts from './Shifts';
import { PageLayout } from './styled';
import { userQuery } from './Queries';

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

class Calendar extends Component {
  render() {
    const { currentMonth } = this.props.pending;
    const { data } = this.props;
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
                  <Day
                    month={currentMonth.month}
                    shifts={data.shifts}
                    dayOfMonth={dayOfMonth}
                    key={uuid()}
                  />
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
    showShifts: state.session.shiftsToggle,
  };
}

export default compose(
  graphql(userQuery, { options: { pollInterval: 5000 } }),
  connect(mapStateToProps)
)(Calendar);
