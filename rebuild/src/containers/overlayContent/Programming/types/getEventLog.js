import React from 'react';
import EventLogComponent from '../../../../components/overlayContent/programming/components/types/Events/EventLog';

const getEventLog = (WithEvents) => (
  <WithEvents>
    {({ data }) => {
      const eventProps = data.map(event => (
          { topic: event.topic, timestamp: event.timestamp }
      ))
      return (
        <EventLogComponent
          data={eventProps}
          isAlertingEnabled={false}
          emailAddress="test email"
          onSetEmailAddress={(emailAddress) => {
            console.log('set email: ', emailAddress);
          }}
          onSetIsAlertingEnabled={(isEnabled) => {
            console.log('set enable alerting: ', isEnabled);
          }}
        />
      )
    }}
  </WithEvents>
    
);

export default getEventLog;