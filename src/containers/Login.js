import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from  'react-router';
import WithData from '../data/WithData';
import LoginComponent from '../components/login_screen/LoginScreen';

const WithAccounts = WithData.polling.WithAccounts;
const LoginWithToken = WithData.requests.loginWithToken;

class Login extends Component {
  state = {
    selectedAccountIndex : -1,
    errorText: undefined,
    showLoginScreen: false,
    resetErrorText: undefined,
  };
  onIncorrectPassword = () => {
    this.setState({
      errorText: 'incorrect password',
    })
  };
  tryLoginWithToken = async() => {
    if (this.props.token){
      try{
        const newToken = await LoginWithToken(this.props.token);
        this.props.onToken(newToken);
      }catch(err){
        this.props.onClearToken();
        this.setState({
          showLoginScreen: true,
        });
      }
    }else{
      this.setState({
        showLoginScreen: true,
      })
    }
  };
  componentWillMount() {
    this.tryLoginWithToken();
  }
  render() {
    if (!this.state.showLoginScreen){
      return null;
    }

    const { onToken } = this.props;
    const params =  new URLSearchParams(window.location.search)
    const resetToken = params.get('reset_token');
    return (
      <WithAccounts>
        {({
          users,
          isAccountCreationAdminOnly,
          createUser,
          loginWithPassword,
          requestResetPassword,
          confirmResetPassword,
        }) => {
          return (
            <LoginComponent
              {...this.props}
              users={users}
              errorText={this.state.errorText}
              resetToken={resetToken}
              showCreateAccount={isAccountCreationAdminOnly === false}
              onPasswordTextChange={() => {
                this.setState({
                  errorText: undefined,
                })
              }}
              onLoginWithPassword={async (user, password) => {
                try {
                  const email = user.email;
                  const token = await loginWithPassword(email, password);
                  onToken(token);
                }catch(err){
                  this.onIncorrectPassword();
                }
              }}
              onCreateAccount={({ email, password,  alias}) => {
                createUser(email, password, alias);
              }}
              onSendResetEmail={({ email }) => {
                requestResetPassword(email);
              }}
              resetErrorText={this.state.resetErrorText}
              onSetPassword={async newPassword => {
                try {
                  await confirmResetPassword(resetToken, newPassword);
                  browserHistory.push('/');  // would be nice to show state to the main screen w/ password already entered
                }catch(err){
                  this.setState({
                    resetErrorText: 'Link Expired or Already Used',
                  })
                }

              }}
              selectedAccountIndex={this.state.selectedAccountIndex}
              onSelectAccount={selectedAccountIndex => {
                this.setState({
                  selectedAccountIndex,
                })
              }}
            />
          )
        }}
      </WithAccounts>
    )
  }
}

Login.propTypes = {
  onToken: PropTypes.func,
  onClearToken: PropTypes.func,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  token: state.getIn(['reducer', 'token']),
});

export const container = connect(mapStateToProps)(Login);
