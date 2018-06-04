import React from 'react';
import LoginScreenComponent from '../../components/special/loginScreen/LoginScreen';

const LoginScreen = () => (
    <LoginScreenComponent
        users={[{
          username: 'some user',
          imageURL: '',
          remote: false,
        }]}
        onCreateAccount={() => { }}
        showCreateAccount
        onSelectAccount={() => { }}
        selectedAccountIndex={0}
        onLoginWithPassword={() => { }}
        onSendResetEmail={() => { }}
        onSetPassword={() => { }}
        onPasswordTextChange={() => { }}
        resetErrorText="fucked up"
        errorText="some error wow"
    />
);

export default LoginScreen;