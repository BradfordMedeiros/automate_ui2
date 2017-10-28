
import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import  FlatButton from 'material-ui/FlatButton';

class PasswordEntry extends Component {
  state = {
    password: '',
  };
  login = () => {
    this.props.onLoginWithPassword(this.props.user, this.state.password);
  };
  render() {
    const { isHidden } = this.props;
    return (
      <div style={{
        transition: 'opacity 0.1s ease-in',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #1b1b1b',
        background: 'rgb(10,10,10)',
      }}>
        <TextField
          value={this.state.password}
          onChange={(_, password) => {
            this.setState({
              password,
            });
          }}
          disabled={isHidden}
          floatingLabelFixed
          floatingLabelText="password"
        />
        <FlatButton
          primary
          label="Login"
          onClick={this.login}
        />
      </div>
    );
  }
};

PasswordEntry.propTypes = {
  isHidden: PropTypes.bool,
  user: PropTypes.object,
  onLoginWithPassword: PropTypes.func,
};

export default PasswordEntry;
