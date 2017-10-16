import React, { Component, PropTypes } from 'react';
import GenericOverlay from '../overlay/GenericOverlay';
import Log from './components/Log';
import EmailSetup from './components/EmailSetup';

class EventLog extends Component {
  state = {
    showLog: true,
  };
  render() {
    const {
      data,
      isAlertingEnabled,
      emailAddress,
      onSetEmailAddress,
      onSetIsAlertingEnabled,
    } = this.props;
    return (
      <GenericOverlay inject={() => (
        <div style={{ display: 'flex', position: 'absolute', right: 48 }}>
          <div
            style={{ margin: 8, cursor: 'pointer' }}
            onClick={() => {
              this.setState({
                showLog: true,
              });
            }}
          >
            log
          </div>
          <div
            style={{ margin: 8, cursor: 'pointer' }}
            onClick={() => {
              this.setState({
                showLog: false,
              });
            }}
          >
            alert
          </div>
        </div>

      )} title="Events">
        {this.state.showLog ?
          <Log data={data} /> :
          <EmailSetup
            isAlertingEnabled={isAlertingEnabled}
            emailAddress={emailAddress}
            onSetEmailAddress={onSetEmailAddress}
            onSetIsAlertingEnabled={onSetIsAlertingEnabled}
          />}
      </GenericOverlay>
    );
  }
}


EventLog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isAlertingEnabled: PropTypes.bool,
  emailAddress: PropTypes.string,
  onSetEmailAddress: PropTypes.func,
  onSetIsAlertingEnabled: PropTypes.func,
};

export default EventLog;
