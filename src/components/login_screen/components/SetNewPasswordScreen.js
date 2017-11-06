
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SetNewPassword extends Component {
  state = {
    password: '',
  };
  setPassword = () => {
    this.props.onSetPassword(this.state.password);
  };
  render() {
    const { resetErrorText } = this.props;
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextField
          onChange={(_, password) => {
            this.setState({
              password,
            })
          }}
          floatingLabelFixed
          floatingLabelText="password"
          errorText={resetErrorText}
          hintText="password"
        />
        <FlatButton
          label="Set New Password"
          onClick={this.setPassword}
          style={{ marginTop: 22 }}
        />
      </div>
    )
  }
}

SetNewPassword.propTypes = {
  onSetPassword: PropTypes.func,
  resetErrorText: PropTypes.string,
};

export default SetNewPassword;
