import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/NavigateBefore';

class ForgotPasswordScreen extends Component {
  state = {
    token: '',
    hasSentReset: false,
  };
  onSendResetEmail = () => {
    this.props.onSendResetEmail();
    this.setState({
      hasSentReset: true,
    })
  };
  render() {
    const { onClickBack } = this.props;

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
        <IconButton onClick={onClickBack} style={{ marginRight: 8 }}><Back /></IconButton>
        <div style={{ margin: 24, fontSize: 20 }}>Would you like us to send you a reset password email?</div>
        <Button
          primary
          variant="raised"
          disabled={this.state.hasSentReset}
          onClick={this.onSendResetEmail}
          label={this.state.hasSentReset ? "Email Sent ": "Send Reset Email"}
        />
      </div>
    )
  }
}

ForgotPasswordScreen.propTypes = {
  onClickBack: PropTypes.func,
  onSendResetEmail: PropTypes.func,
};

export default ForgotPasswordScreen;
