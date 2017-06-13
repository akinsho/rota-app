import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { compose, graphql } from 'react-apollo';
import { month, daysOfWeek, weeksInAMonth } from './../lib/DateHelpers';
import Day from './Day';
import { showShifts } from './../actions';
import Shifts from './Shifts';
import { PageLayout, Button } from './styled';
import { userQuery } from './Queries';

const CalendarContainer = styled.div`
   width: 85%;
   margin: 1em;
   display: grid;
   grid-template-columns: repeat(7, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-template-areas:
   "title title title title title title title "
   "weekdays weekdays weekdays weekdays weekdays weekdays weekdays "
   "days days days days days days days ";
   grid-gap:0.2rem;
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
  background-color: ${props => props.theme.light};
`;

const Title = styled.h1`
  color: ${props => props.theme.light};
  text-align: center;
  grid-area: title;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShowShifts = styled(Button)`
  width: 8em;
`;
const CalendarDetails = styled.div`
  
`;

class Calendar extends Component {
  render() {
    const { currentMonth } = this.props.pending;
    const { data } = this.props;
    return (
      <PageLayout>
        <CalendarContainer>
          <Title>
            {month}
            <ShowShifts onClick={this.props.showShifts}>
              Show My Shifts
            </ShowShifts>
          </Title>
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
        {this.props.shiftsToggle && <Shifts />}
      </PageLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    pending: state.pending,
    shiftsToggle: state.session.shiftsToggle
  };
}

export default compose(
  graphql(userQuery, { options: { pollInterval: 5000 } }),
  connect(mapStateToProps, { showShifts })
)(Calendar);
