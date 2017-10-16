import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class EmailSetup extends Component {
  state = {
    emailAddress: undefined,
    hasChanged: false,
  }
  render() {
    const {
      isAlertingEnabled,
      emailAddress,
      onSetEmailAddress,
      onSetIsAlertingEnabled,
    } = this.props;

    return (
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
          <TextField
            value={this.state.emailAddress || emailAddress}
            onChange={(_, emailAddress) => {
              this.setState({
                emailAddress,
              });
            }}
          />
          <FlatButton
            style={{ margin: 4 }}
            label="Set Email"
            disabled={this.state.emailAddress === undefined}
            onClick={() => {
              if (this.state.emailAddress){
                onSetEmailAddress(this.state.emailAddress);
              }
            }}
          />

          <FlatButton
            style={{ margin: 4 }}
            label={isAlertingEnabled ? 'Disable': 'Enable'}
            onClick={() => {
              onSetIsAlertingEnabled(!(isAlertingEnabled === true))
            }}
          />
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
          <div>Email Alerts {isAlertingEnabled ? 'Enabled': 'Disabled'}</div>
          <div>Current Email: {emailAddress}</div>
        </div>
      </div>
    );
  }
}

EmailSetup.propTypes = {
  isAlertingEnabled: PropTypes.bool,
  emailAddress: PropTypes.string,
  onSetEmailAddress: PropTypes.func,
  onSetIsAlertingEnabled: PropTypes.func,
};

export default EmailSetup;