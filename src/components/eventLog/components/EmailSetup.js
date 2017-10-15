import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const EmailSetup = ({
  isAlertingEnabled,
  emailAddress,
  onSetEmailAddress,
}) => (
  <div style={{
    width: '100%',
    height: '100%',
    position: 'absolute'
  }}>
    <div style={{
      width: '100%',
      height: '40%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      display: 'flex',
      fontSize: 28,
      color: 'whitesmoke',
      position: 'absolute',
      paddingBottom: 28,
    }}>
      Setup Email Alerts for Automate
    </div>
    <div style={{
      position: 'absolute',
      top: '40%',
      width: '100%',
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: isAlertingEnabled ? 'blue': 'red',
    }}>
      <TextField />
      <FlatButton style={{ margin: 4 }} label="Enable" />
    </div>
    <div style={{
      position: 'absolute',
      width: '100%',
      top: '50%',
      height: '20%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      color: 'whitesmoke'
    }}>
      <div>Email Alerts Enabled</div>
      <div>Current Email: bradmedeiros0@gmail.com</div>
    </div>
  </div>

);

EmailSetup.propTypes = {
  isAlertingEnabled: PropTypes.bool,
  emailAddress: PropTypes.string,
  onSetEmailAddress: PropTypes.func,
};

export default EmailSetup;