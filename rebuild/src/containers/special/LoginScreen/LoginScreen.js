import React, { Component } from 'react';
import MainLogin from '../../../components/special/loginScreen/MainLogin/MainLogin';
import SetNewPasswordScreen from '../../../components/special/loginScreen/SetNewPassword/SetNewPasswordScreen';
import ForgotPasswordScreen from '../../../components/special/loginScreen/ForgotPasswordScreen';
import CreateAccountScreen from '../../../components/special/loginScreen/CreateAccountScreen/CreateAccountScreen';

class LoginScreen extends Component{
  state = {
    selectedAccountIndex: 0,
    errorText : null,
    screen: 'main',
  };
  render() {
    return (
        <div style={{ display: 'flex', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'grey' }}>
          {this.state.screen === 'main' && (
              <MainLogin
                users={[{
                  username: 'user 1',
                  imageUrl: undefined,
                  remote: false,
                }, {
                    username: 'user 2',
                    imageUrl: undefined,
                    remote: false,
                  }, {
                    username: 'user 3',
                    imageUrl: undefined,
                    remote: false,
                  }]}
                selectedAccountIndex={this.state.selectedAccountIndex}
                onSelectAccount={(_,selectedAccountIndex) => {
                  this.setState({
                    selectedAccountIndex,
                  })
                }}
                showCreateAccount={true}
                onCreateAccount={() => {
                  this.setState({
                    screen: 'create',
                  })
                }}
                onLoginWithPassword={(user, password) => {
                  console.log('login: ', user);
                  console.log('password: ', password);
                  this.setState({
                    errorText: 'invalid',
                  })
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
            />
          )}
          {this.state.screen === 'create' && (
              <CreateAccountScreen
                onClickBack={() => {
                  this.setState({
                    screen: 'main',
                  })
                }}
                onCreateAccount={account => {
                  console.log('create account: ', account);
                }}
            />
          )}
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
        </div>
    )
  }
}


export default LoginScreen;