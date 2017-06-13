import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter, Redirect } from 'react-router-dom';
//import cuid from 'cuid';
import { logIn } from './../actions/index';
import { graphql, compose } from 'react-apollo';
import { AddUserMutation } from './Mutations';
import { userQuery } from './Queries.js';
import LoginForm from './LoginForm';
import { PageLayout, Button, Form, media } from './styled';

const LoginPage = styled(PageLayout)`
  height: 100vh;
`;

const ReturningUser = styled(Button)`
  width: 60%;
  background-color: #42A5F5;
  height: 4rem;
  padding: 0.3em;
  ${media.handheld`
      width: 80%;
  `}
`;

class Login extends Component {
  state = {
    fields: {
      firstname: '',
      surname: '',
      grade: '',
      username: '',
      password: ''
    },
    returning: false,
    redirectToReferrer: false
  };

  handleReturningUser = () =>
    this.setState({ returning: !this.state.returning });

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, surname, grade, password, username } = this.state.fields;
    !this.state.returning
      ? this.addNewUser(firstname, surname, grade, password, username)
      : this.findRegisteredUser(username, password);
    this.props.logIn(username);
  };

  findRegisteredUser = (username, password) => {
    const registeredUser = this.props.data.users.filter(user => {
      return user.username === username && user.password === password;
    });
    //FIXME checks db res for sensitive data need to fix actual db query
    if (registeredUser.length === 1) {
      console.log('in user block');
      this.setState({ redirectToReferrer: true });
    } else {
      alert('you have not previously registered with us');
    }
  };

  addNewUser = (firstname, surname, grade, password, username) => {
    this.props.mutate({
      variables: {
        firstname,
        surname,
        grade,
        password,
        username
      },
      refetchQueries: [{ query: userQuery }]
    });
    this.setState({ redirectToReferrer: true });
  };

  handleChange = e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    /*TODO cuid and uuid not working on this input so reliant on index....*/
    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }
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
    loggedIn: state.session.loggedIn
  };
}

export default compose(
  graphql(AddUserMutation),
  graphql(userQuery),
  connect(mapStateToProps, { logIn })
)(withRouter(Login));
