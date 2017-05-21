import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter /*Redirect*/ } from 'react-router-dom';
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
    !this.state.returning
      ? this.props.mutate({
          variables: {
            firstname,
            surname,
            grade,
          },
          refetchQueries: [{ query: userQuery }],
        })
      : this.findRegisteredUser(firstname, surname);
    //this.props.history.push('/calendar');
    this.props.logIn();
  };

  findRegisteredUser = (firstname, surname) => {
    //TODO currently fields being completed are firstname .., expected fields
    //are password and surname
    const registeredUser = this.props.data.users.filter(user => {
      return user.firstname === firstname && user.surname === surname;
    });
    console.log('registeredUser', registeredUser);
    return registeredUser.length === 1 ? this.props.logIn() : null;
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
    //const { from } = this.props.location.state || { from: { pathname: '/' } };
    //console.log('state', this.state);
    /*TODO cuid and uuid not working on this input so reliant on index....*/
    //if (this.props.loggedIn) {
    //return <Redirect to={from.pathname} />;
    //}
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
    loggedIn: state.session.loggedIn,
  };
}

export default compose(
  graphql(AddUserMutation),
  graphql(userQuery),
  connect(mapStateToProps, { logIn })
)(withRouter(Login));
