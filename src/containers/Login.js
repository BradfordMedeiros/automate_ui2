import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import LoginComponent from '../components/login_screen/LoginScreen';
import { setLoggedIn, setLoggedOut } from './module';

const WithAccounts = WithData.polling.WithAccounts;
const LoginWithToken = WithData.requests.loginWithToken;

class Login extends Component {
  state = {
    selectedAccountIndex : -1,
    errorText: undefined,
    showLoginScreen: false,
  };
  onIncorrectPassword = () => {
    this.setState({
      errorText: 'incorrect password',
    })
  };
  tryLoginWithToken = async() => {
    if (this.props.token){
      const newToken = await LoginWithToken(this.props.token);
      this.props.onToken(newToken);
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

    return (
      <WithAccounts>
        {({
          users,
          createUser,
          loginWithPassword,
          isAccountCreationAdminOnly,
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
                onToken(token);
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
  onToken: PropTypes.func,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  token: state.getIn(['reducer', 'token']),
});

export const container = connect(mapStateToProps)(Login);
