import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';

const ShiftContainer = styled.section`
  width: 100%;
  height: auto;
  display: column;
  left:0%;
`;

const UserCard = styled.article`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.light};
`;

const ShiftDay = styled.article`
  width: 100%;
  background-color: whitesmoke;
  padding: 0.5rem;
`;

const ShiftDetail = styled.p`
  font-weight: 800;
`;

class Shifts extends Component {
  render() {
    return (
      <ShiftContainer>
        <UserCard />
        {this.props.currentMonth.shifts.map(shift => (
          <ShiftDay key={uuid()}>
            <ShiftDetail>
              Date:
              {`${shift.date}/0${this.props.currentMonth.month}/${this.props.currentMonth.year}`}
            </ShiftDetail>
            <ShiftDetail>Assigned: {shift.assigned}</ShiftDetail>
            <ShiftDetail>Time: {shift.time}</ShiftDetail>
            <ShiftDetail>Grade: {shift.grade}</ShiftDetail>
          </ShiftDay>
        ))}
      </ShiftContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMonth: state.pending.currentMonth
  };
}

export default connect(mapStateToProps)(Shifts);
