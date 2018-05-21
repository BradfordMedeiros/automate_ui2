import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      }}>
        <div style={{
          width: '100%',
          height: '30%',
          alignItems: 'flex-end',
          justifyContent: 'center',
          display: 'flex',
          fontSize: 28,
          color: 'whitesmoke',
          paddingBottom: 28,
        }}>
          Setup Email Alerts for Automate
        </div>
        <div style={{
          width: '100%',
          height: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: isAlertingEnabled ? 'blue': 'red',
        }}>
          <TextField
            value={this.state.emailAddress === undefined ? emailAddress : this.state.emailAddress}
            onChange={event => {
              const emailAddress = event.target.value;
              this.setState({
                emailAddress,
              });
            }}
          />
          <Button
            style={{ margin: 4 }}
            disabled={this.state.emailAddress === undefined}
            onClick={() => {
              if (this.state.emailAddress){
                onSetEmailAddress(this.state.emailAddress);
              }
            }}
          >
              Set Email
          </Button>

          <Button
            onClick={() => {
              onSetIsAlertingEnabled(!(isAlertingEnabled === true))
            }}
          >
              {isAlertingEnabled ? 'Disable': 'Enable'}
          </Button>
        </div>
        <div style={{
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