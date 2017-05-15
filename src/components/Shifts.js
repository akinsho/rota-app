import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';

const ShiftContainer = styled.section`
  width: 100%;
  height: 20em;
  border-top: black 1px solid;
  display: flex;
`;

const UserCard = styled.article`
  height: 100%;
  width: 15%;
  background-color: skyblue;
`;

const ShiftDay = styled.article`
  height: 100%;
  width: 14%;
  background-color: whitesmoke;
  border-right:1px solid black;
  padding: 0.5rem;
`;

const ShiftDetail = styled.p`
  font-weight: 800;
`;

class Shifts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShiftContainer>
        <UserCard />
        {this.props.currentMonth.shifts.map(shift => (
          <ShiftDay key={uuid()}>
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
    currentMonth: state.pending.currentMonth,
  };
}

export default connect(mapStateToProps)(Shifts);
