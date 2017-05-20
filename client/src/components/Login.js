import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
//import cuid from 'cuid';
import { logIn } from './../actions/index';
import { graphql, compose } from 'react-apollo';
import { AddUserMutation } from './Mutations';
import { userQuery } from './Queries.js';
import LoginForm from './LoginForm';
import { PageLayout, Button, Form } from './styled';

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
      firstname: '',
      surname: '',
      grade: '',
      username: '',
      password: '',
    },
    returning: false,
  };

  handleReturningUser = () =>
    this.setState({ returning: !this.state.returning });

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, surname, grade } = this.state.fields;
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
    const fields = Object.keys(this.state.fields);
    return (
      <LoginPage>
        <ReturningUser onClick={this.handleReturningUser}>
          {!this.state.returning
            ? 'If you are already registered click here to login'
            : 'Click here to register'}
        </ReturningUser>
        <Form onSubmit={this.handleSubmit}>
          {!this.state.returning
            ? <LoginForm fields={fields} handleChange={this.handleChange} />
            : <LoginForm
                fields={fields.slice(-2)}
                handleChange={this.handleChange}
              />}
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
