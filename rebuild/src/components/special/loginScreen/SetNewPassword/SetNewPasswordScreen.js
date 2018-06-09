import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

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
      <div className="set_new_password_outer">
        <TextField
            label="password"
            helperText="password"
            margin="dense"
            error={resetErrorText}
            onChange={event => {
              const password = event.target.value;
              this.setState({
                password,
              });
            }}
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
