import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SavedUsers from './components/SavedUsers/SavedUsers';
import PasswordEntry from './components/PasswordEntry/PasswordEntry';
import './style.css';


class MainLogin extends Component {
  render() {
    const {
      users,
      selectedAccountIndex,
      onSelectAccount,
      onLoginWithPassword,
      onPasswordTextChange,
      showCreateAccount,
      onCreateAccount,
      onForgotPassword,
      errorText,
    } = this.props;


    return (
      <div className="main_login_outer">
        <div className="main_login_outer2">
          <SavedUsers
              users={users}
              selectedUserIndex={selectedAccountIndex}
              onSelectUser={onSelectAccount}
          />
          <PasswordEntry
            errorText={errorText && <div>{errorText}  <div style={{ cursor: 'pointer' }} onClick={onForgotPassword}>forgot password?</div></div>}
            isHidden={selectedAccountIndex === -1}
            user={users[selectedAccountIndex]}
            onLoginWithPassword={onLoginWithPassword}
            onPasswordTextChange={onPasswordTextChange}
          />
          <div style={{ marginBottom: '2em' }} />
          <div className="main_login_selection_outer">
            {showCreateAccount && <div className="login_selection" onClick={onCreateAccount}>create account</div>}
          </div>
        </div>
      </div>
    );
  }
}

MainLogin.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  selectedAccountIndex: PropTypes.number,
  onSelectAccount: PropTypes.func,
  showCreateAccount: PropTypes.bool,
  onCreateAccount: PropTypes.func,
  onLoginWithPassword: PropTypes.func,
  onPasswordTextChange: PropTypes.func,
  onForgotPassword: PropTypes.func,
  errorText: PropTypes.string,
};

export default MainLogin;
