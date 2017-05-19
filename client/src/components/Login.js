import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
//import cuid from 'cuid';
import { logIn } from './../actions/index';
import { graphql, compose } from 'react-apollo';
import { AddUserMutation } from './Mutations';
import { userQuery } from './Queries.js';
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

const ReturningUser = styled(Button)`
  width: 60%;
  background-color: palevioletred;
  height: 4rem;
`;

class Login extends Component {
  state = {
    fields: {
      username: '',
      firstname: '',
      surname: '',
      grade: '',
      password: '',
    },
    returning: false,
  };

  handleReturningUser = () =>
    this.setState({ returning: !this.state.returning });

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, surname, grade } = this.state;
    this.props.mutate({
      variables: {
        firstname,
        surname,
        grade,
      },
      refetchQueries: [{ query: userQuery }],
    });
    this.props.history.push('/calendar');
    this.props.logIn();
  };

  handleChange = e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    /*TODO cuid and uuid not working on this input so reliant on index....*/
    return (
      <LoginPage>
        <ReturningUser onClick={this.handleReturningUser}>
          If you are already registered click here to login
        </ReturningUser>
        <Form onSubmit={this.handleSubmit}>
          {!this.state.returning &&
            Object.keys(this.state.fields).map((field, index) => (
              <Input
                type="text"
                required
                name={field}
                placeholder={field}
                value={this.state.fields[field]}
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
  return {
    loggedIn: state.loggedIn,
  };
}

export default compose(
  graphql(AddUserMutation),
  connect(mapStateToProps, { logIn })
)(withRouter(Login));
