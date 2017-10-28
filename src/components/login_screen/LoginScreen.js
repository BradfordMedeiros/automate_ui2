
import React, { PropTypes, Component } from 'react';
import SavedUsers from './components/SavedUsers/SavedUsers';
import CreateAccountScreen from './components/CreateAccountScreen';
import PasswordEntry from './components/PasswordEntry';
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

          {!this.state.creatingAccount && <SavedUsers selectedUserIndex={selectedAccountIndex} onSelectUser={this.selectUser} users={users} />}
          {!this.state.creatingAccount && (
            <PasswordEntry
              isHidden={selectedAccountIndex === -1}
              user={users[selectedAccountIndex]}
              onLoginWithPassword={onLoginWithPassword}
            />
          )}
          {!this.state.creatingAccount && <div style={{ marginBottom: '2em'}} />}
          {!this.state.creatingAccount && <div style={{ color: 'whitesmoke', display: 'flex', width: '40%', borderBottom: '1px solid rgb(40,40,40)', fontSize: 24, justifyContent: 'space-evenly' }}>
            <div className="login_selection" onClick={() => {
              this.setState({
                creatingAccount: true,
              })
            }}>create account</div>
          </div>}
        </div>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onCreateAccount: PropTypes.func,
  onSelectAccount: PropTypes.func,
  selectedAccountIndex: PropTypes.number,
  onLoginWithPassword: PropTypes.func,
};

export default LoginScreen;