import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/NavigateBefore';

const ForgotPasswordScreen = ({ onClickBack, onSendResetEmail, disableSendReset }) => (
    <div style={{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <IconButton onClick={onClickBack} style={{ marginRight: 8 }}><Back /></IconButton>
      <div style={{ marginLeft: 24, marginRight: 24, fontSize: 20 }}>Would you like us to send you a reset password email?</div>
      <Button
          primary
          variant="raised"
          disabled={disableSendReset}
          onClick={onSendResetEmail}
      >
        {disableSendReset ? 'Email Sent ' : 'Send Reset Email'}
      </Button>
    </div>
);


ForgotPasswordScreen.propTypes = {
  onClickBack: PropTypes.func,
  onSendResetEmail: PropTypes.func,
};

export default ForgotPasswordScreen;
