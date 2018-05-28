import React from 'react';
import EventLogComponent from '../../components/overlayContent/eventLog/EventLog';

const EventLog = () => (
    <EventLogComponent
        data={[
          { topic: 'test topic', timestamp: 'test timestamp' },
          { topic: 'another test topic', timestamp: 'test timestamp' },
        ]}
        isAlertingEnabled={false}
        emailAddress="test email"
        onSetEmailAddress={(emailAddress) => {
          console.log('set email: ', emailAddress);
        }}
        onSetIsAlertingEnabled={(isEnabled) => {
          console.log('set enable alerting: ', isEnabled);
        }}
    />
);

export default EventLog;