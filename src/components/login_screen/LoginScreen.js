import React, { PropTypes, Component } from 'react';
import SavedUsers from './components/SavedUsers/SavedUsers';
import CreateAccountScreen from './components/CreateAccountScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import SetNewPasswordScreen from './components/SetNewPasswordScreen';
import PasswordEntry from './components/PasswordEntry/PasswordEntry';
import './style.css';


class LoginScreen extends Component {
  state = {
      loginState: 'login',
  };
  selectUser = selectedIndex => {
    this.props.onSelectAccount(selectedIndex);
  };
  handleCreateAccount = userInfo => {
    this.props.onCreateAccount(userInfo);
    this.goToMainScreen();
  };
  isMainScreen = () => this.state.loginState === 'login'  && !this.isSetNewPasswordScreen();
  isCreateAccountScreen = ()  => this.state.loginState === 'create' && !this.isSetNewPasswordScreen();
  isResetPasswordScreen = () => this.state.loginState === 'reset' && !this.isSetNewPasswordScreen();
  isSetNewPasswordScreen = () => this.props.resetToken != null;
  goToMainScreen = () => {
    this.setState({
      loginState: 'login',
    });
  };
  goToCreateAccountScreen = () => {
    this.setState({
      loginState: 'create',
    });
  };
  goToResetPasswordScreen = () => {
    this.setState({
      loginState: 'reset',
    });
  };
  render() {
    const {
      users,
      selectedAccountIndex,
      onLoginWithPassword,
      onPasswordTextChange,
      onSendResetEmail,
      onSetPassword,
      showCreateAccount,
      resetToken,
      resetErrorText,
      errorText,
      style
    } = this.props;

    return (
      <div style={{
        position: 'absolute',
        color: 'white',
        background: 'black',
        borderTop: '1px solid  rgb(30,30,30)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {this.isCreateAccountScreen() && (
            <CreateAccountScreen
              onCreateAccount={this.handleCreateAccount}
              onClickBack={this.goToMainScreen}
            />
          )}
          {this.isResetPasswordScreen() && (
            <ForgotPasswordScreen
              onSendResetEmail={() => {
                const user = users[selectedAccountIndex];
                onSendResetEmail(user);
              }}
              onClickBack={this.goToMainScreen}
            />
          )}

          {this.isSetNewPasswordScreen() && (
            <SetNewPasswordScreen
              resetErrorText={resetErrorText}
              onSetPassword={onSetPassword}
            />
          )}

          {this.isMainScreen() && <SavedUsers users={users} selectedUserIndex={selectedAccountIndex} onSelectUser={this.selectUser}  />}
          {this.isMainScreen() && (
            <PasswordEntry
              errorText={errorText && <div>{errorText}  <div style={{ cursor: 'pointer'}} onClick={this.goToResetPasswordScreen}>forgot password?</div></div>}
              isHidden={selectedAccountIndex === -1}
              user={users[selectedAccountIndex]}
              onLoginWithPassword={onLoginWithPassword}
              onPasswordTextChange={onPasswordTextChange}
            />
          )}
          {this.isMainScreen() && <div style={{ marginBottom: '2em'}} />}
          {this.isMainScreen() && <div style={{ color: 'whitesmoke', display: 'flex', width: '40%', borderBottom: '1px solid rgb(40,40,40)', fontSize: 24, justifyContent: 'space-evenly' }}>
            {showCreateAccount && <div className="login_selection" onClick={this.goToCreateAccountScreen}>create account</div>}
          </div>}
        </div>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onCreateAccount: PropTypes.func,
  showCreateAccount: PropTypes.bool,
  onSelectAccount: PropTypes.func,
  selectedAccountIndex: PropTypes.number,
  onLoginWithPassword: PropTypes.func,
  onSendResetEmail: PropTypes.func,
  onSetPassword: PropTypes.func,
  onPasswordTextChange: PropTypes.func,
  resetToken: PropTypes.string,
  resetErrorText: PropTypes.string,
  errorText: PropTypes.string,
};

export default LoginScreen;