import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ShiftContainer = styled.section`
  width: 50%;
  height: 40%;
  border: black 2px solid;
`;

class Shifts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShiftContainer>
        Shifts
      </ShiftContainer>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Shifts);
