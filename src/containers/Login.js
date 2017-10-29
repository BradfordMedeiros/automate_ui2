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
    window.props = this.props;
    return (
      <WithAccounts>
        {({ users, createUser, loginWithPassword }) => (
          <LoginComponent
            {...this.props}
            users={users}
            onLoginWithPassword={async (username, password) => {
              try {
                await loginWithPassword(username, password);
                this.props.onSetLoggedIn();
              }catch(err){
                console.warn('Invalid credentials');
              }
            }}
            onCreateAccount={({ username, password }) => {
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
