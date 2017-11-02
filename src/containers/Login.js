import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import LoginComponent from '../components/login_screen/LoginScreen';
import { setLoggedIn, setLoggedOut } from './module';

const WithAccounts = WithData.polling.WithAccounts;

class Login extends Component {
  state = {
    selectedAccountIndex : -1,
    errorText: undefined,
  };
  onIncorrectPassword = () => {
    this.setState({
      errorText: 'incorrect password',
    });
  };
  render() {
    return (
      <WithAccounts>
        {({
          users,
          createUser,
          loginWithPassword,
          isAccountCreationAdminOnly,
          onToken,
        }) => (
          <LoginComponent
            {...this.props}
            users={users}
            errorText={this.state.errorText}
            showCreateAccount={isAccountCreationAdminOnly === false}
            onPasswordTextChange={() => {
              this.setState({
                errorText: undefined,
              })
            }}
            onLoginWithPassword={async (user, password) => {
              try {
                const username = user.username;
                const token = await loginWithPassword(username, password);
                console.log('token: ', token);
                this.props.onSetLoggedIn(username);
                // probably set the log into local storage here and redux
              }catch(err){
                console.warn('Invalid credentials');
                console.warn(err);
                this.onIncorrectPassword();
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
  onToken: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSetLoggedIn: username => dispatch(setLoggedIn({ username })),
});

export const container = connect(undefined, mapDispatchToProps)(Login);
