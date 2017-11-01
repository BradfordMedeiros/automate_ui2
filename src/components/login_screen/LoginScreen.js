
import React, { PropTypes, Component } from 'react';
import SavedUsers from './components/SavedUsers/SavedUsers';
import CreateAccountScreen from './components/CreateAccountScreen';
import PasswordEntry from './components/PasswordEntry/PasswordEntry';
import './style.css';


class LoginScreen extends Component {
  state = {
    creatingAccount: false,
  };
  selectUser = selectedIndex => {
    this.props.onSelectAccount(selectedIndex);
  };
  handleCreateAccount = userInfo => {
    this.props.onCreateAccount(userInfo);
    this.setState({
      creatingAccount: false,
    })
  };
  render() {
    const {
      users,
      selectedAccountIndex,
      onLoginWithPassword,
      onPasswordTextChange,
      showCreateAccount,
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
          {this.state.creatingAccount && (
            <CreateAccountScreen
              onCreateAccount={this.handleCreateAccount}
              onClickBack={() => {
                this.setState({
                  creatingAccount: false,
                });
              }}
            />
          )}

          {!this.state.creatingAccount && <SavedUsers users={users} selectedUserIndex={selectedAccountIndex} onSelectUser={this.selectUser}  />}
          {!this.state.creatingAccount && (
            <PasswordEntry
              errorText={errorText}
              isHidden={selectedAccountIndex === -1}
              user={users[selectedAccountIndex]}
              onLoginWithPassword={onLoginWithPassword}
              onPasswordTextChange={onPasswordTextChange}
            />
          )}
          {!this.state.creatingAccount && <div style={{ marginBottom: '2em'}} />}
          {!this.state.creatingAccount && <div style={{ color: 'whitesmoke', display: 'flex', width: '40%', borderBottom: '1px solid rgb(40,40,40)', fontSize: 24, justifyContent: 'space-evenly' }}>
            {showCreateAccount && <div className="login_selection" onClick={() => {
              this.setState({
                creatingAccount: true,
              })
            }}>create account</div>}
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
  onPasswordTextChange: PropTypes.func,
  errorText: PropTypes.string,
};

export default LoginScreen;