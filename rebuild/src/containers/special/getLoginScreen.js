import React, { Component } from 'react';
import MainLogin from '../../components/special/loginScreen/MainLogin/MainLogin';
import SetNewPasswordScreen from '../../components/special/loginScreen/SetNewPassword/SetNewPasswordScreen';
import ForgotPasswordScreen from '../../components/special/loginScreen/ForgotPasswordScreen';
import CreateAccountScreen from '../../components/special/loginScreen/CreateAccountScreen/CreateAccountScreen';

const getLoginScreen = WithAccounts => {
  class LoginScreen extends Component{
    state = {
      selectedAccountIndex: 0,
      errorText : null,
      screen: 'main',
    };
    render() {
      const { onLogin } = this.props;

      return (
        <WithAccounts>
          {({ data, addAccount, loginWithPassword }) => {
            const { accounts, isAccountCreationAdminOnly } = data;
            const users = accounts.map(user => ({
              username: user.email || 'no email', 
              imageUrl: 'http://image.ibb.co/cqjRsk/white_omen_tansparent.png',
              remote: false,
            })) 
            return (
            <div style={{ display: 'flex', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'grey' }}>
            {this.state.screen === 'main' && (
              <MainLogin
                users={users}
                selectedAccountIndex={this.state.selectedAccountIndex}
                onSelectAccount={(_,selectedAccountIndex) => {
                  this.setState({
                    selectedAccountIndex,
                  })
                }}
                showCreateAccount={!isAccountCreationAdminOnly}
                onCreateAccount={() => {
                  this.setState({
                    screen: 'create',
                  })
                }}
                onLoginWithPassword={async (user, password) => {
                  const valid_token = await loginWithPassword(user.username, password)
                  if (onLogin){
                    onLogin(valid_token);
                  }
                }}
                onPasswordTextChange={() => {
                  console.log('text changed')
                }}
                errorText={this.state.errorText}
                onForgotPassword={() => {
                  this.setState({
                    screen: 'reset',
                  })
                }}
            />)}
            {this.state.screen === 'create' && (
              <CreateAccountScreen
                onClickBack={() => {
                  this.setState({
                    screen: 'main',
                  })
                }}
                onCreateAccount={account => {
                  const { email, password, alias } = account;
                  try {
                    addAccount(email, password, alias);
                    this.setState({
                      screen: 'main',
                    })
                  }catch(err){

                  }
                 
                }}
            />)}
            {this.state.screen === 'reset' && (
              <ForgotPasswordScreen
                  onClickBack={() => {
                    this.setState({
                      screen: 'main',
                    })
                  }}
                  onSendResetEmail={() => console.log('send reset email')}
                  disableSendReset={false}
              />
            )}
            {this.state.screen === 'confirm' && (
              <SetNewPasswordScreen
                  onSetPassword={() => {

                  }}
                  resetErrorText={null}
              />
            )}
          </div>)}}
        </WithAccounts>
      )
    }
  }
  return LoginScreen;
};

export default getLoginScreen;
