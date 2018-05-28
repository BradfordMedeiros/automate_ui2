import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selection from './components/Selection/Selection';
import Log from './components/Log/Log';
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
            <div>
                <Selection
                onShowLog={() => {
                        this.setState({
                            showLog: true,
                        });
                    }}
                    onShowAlert={() => {
                        this.setState({
                            showLog: false,
                        });
                    }}
              />
            {this.state.showLog ?
                    <Log data={data} /> :
              <EmailSetup
                        isAlertingEnabled={isAlertingEnabled}
                        emailAddress={emailAddress}
                        onSetEmailAddress={onSetEmailAddress}
                        onSetIsAlertingEnabled={onSetIsAlertingEnabled}
                    />}
          </div>
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
