import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import LoginComponent from '../components/login_screen/LoginScreen';
import { setLoggedIn, setLoggedOut } from './module';

const WithAccounts = WithData.polling.WithAccounts;

class Login extends Component {
  state = {
    selectedAccountIndex : -1,
  }
  render() {
    return (
      <WithAccounts>
        {({ users, createUser }) => (
          <LoginComponent
            {...this.props}
            users={users}
            onLoginWithPassword={(userInfo, password) => {
              console.log('trying to log in: ', userInfo);
              console.log('with password: ', password);
              this.props.onSetLoggedIn();
            }}
            onCreateAccount={({ username, password }) => {
              console.log('username: ', username);
              console.log('password: ', password);
              createUser(username, password);
            }}
            selectedAccountIndex={this.state.selectedAccountIndex}
            onSelectAccount={selectedAccountIndex => {
              this.setState({
                selectedAccountIndex,
              })
            }}
          />
        )}
      </WithAccounts>
    )
  }
}

Login.propTypes = {
  onSetLoggedIn: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSetLoggedIn: () => dispatch(setLoggedIn()),
});

export const container = connect(undefined, mapDispatchToProps)(Login);
