import React from 'react';
import WithData from '../data/WithData';
import EventLogComponent from '../components/eventLog/EventLog';
const WithEvents = WithData.polling.WithEvents;
const WithEmail = WithData.polling.WithEmail;

class EventLog extends React.Component {
  render() {
    return (
      <div style={{ background: 'rgb(40,40,40)' }}>
        <WithEmail>
          {({
            emailAddress,
            emailEnabled,
            setEmail,
            enableEmail,
            disableEmail,
          }) => {
            window.emailAddress = emailAddress;
            window.emailEnabled = emailEnabled;
            return (
              <WithEvents
                whileLoading={this.getContainer}
                refresh={1000}
              >
                {content =>  (
                  <EventLogComponent
                    data={content.data}
                    emailAddress={emailAddress}
                    isAlertingEnabled={emailEnabled}
                    onSetEmailAddress={emailAddress => {
                      console.log('email address: ', emailAddress);
                    }}
                    onSetIsEmailEnabled={isEnabled => {
                      console.log('is enabled: ', isEnabled);
                    }}
                  />
                )}
              </WithEvents>
            )
          }}
        </WithEmail>
      </div>
    );
  }
}

export default EventLog;
