import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
//import cuid from 'cuid';
import { graphql, compose } from 'react-apollo';
import { AddUserMutation } from './Mutations';
import { UserQuery } from './Queries.js';

import { PageLayout, Button } from './styled';

const Form = styled.form`
  background-color: grey;
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  border: none;
  width: 80%;
  margin: 1rem 0;
  height: 2rem;
  padding-left: 1rem;
`;
const LoginPage = styled(PageLayout)`
  height: 100vh;
`;

console.log('userQuery', UserQuery);
class Login extends Component {
  state = {
    username: '',
    firstname: '',
    surname: '',
    grade: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, surname, grade } = this.state;
    this.props.mutate({
      variables: {
        firstname,
        surname,
        grade,
      },
      refetchQueries: [{ query: UserQuery }],
    });
    this.props.history.push('/calendar');
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    /*TODO cuid and uuid not working on this input so reliant on index....*/
    return (
      <LoginPage>
        <Form onSubmit={this.handleSubmit}>
          {Object.keys(this.state).map((field, index) => (
            <Input
              type="text"
              required
              name={field}
              placeholder={field}
              value={this.state[field]}
              key={index}
              onChange={this.handleChange}
            />
          ))}
          <Button>Submit</Button>
        </Form>
      </LoginPage>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default compose(graphql(AddUserMutation), connect(mapStateToProps))(
  withRouter(Login)
);
