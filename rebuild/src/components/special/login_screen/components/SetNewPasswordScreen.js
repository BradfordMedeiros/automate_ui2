import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
          }}
          >
              <TextField
            onChange={(_, password) => {
                      this.setState({
                          password,
                      });
                  }}
            floatingLabelFixed
            floatingLabelText="password"
            errorText={resetErrorText}
            hintText="password"
          />
              <Button
                  onClick={this.setPassword}
            style={{ marginTop: 22 }}
          >
            Set New Password
          </Button>
          </div>
      );
  }
}

SetNewPassword.propTypes = {
    onSetPassword: PropTypes.func,
    resetErrorText: PropTypes.string,
};

export default SetNewPassword;
