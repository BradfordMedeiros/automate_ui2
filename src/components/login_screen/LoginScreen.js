
import React, { Component } from 'react';
import SavedUsers from './components/SavedUsers/SavedUsers';
import CreateAccountScreen from './components/CreateAccountScreen';
import Options from './components/Options';
import './style.css';

const users = [
  {
    username: 'shit',
    remote: false,
  },
  {
    username: 'samantha',
    remote: false,
  },
  {
    username: 'crazy',
    remote: false,
  },
  {
    username: 'wow',
    remote: false,
  },
  {
    username: 'brad',
    remote: false,
  },
  {
    username: 'samantha',
    remote: false,
  },
];

class LoginScreen extends Component {
  state = {
    creatingAccount: false,
    selectedIndex: -1,
  };
  selectUser = selectedIndex => {
    this.setState({
      selectedIndex,
    });
  };
  render() {
    const { style } = this.props;
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
              onClickBack={() => {
                this.setState({
                  creatingAccount: false,
                });
              }}
            />
          )}

          {!this.state.creatingAccount && <SavedUsers selectedUserIndex={this.state.selectedIndex} onSelectUser={this.selectUser} users={users} />}
          {!this.state.creatingAccount && <Options isHidden={this.state.selectedIndex === -1} />}
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

export default LoginScreen;