import React from 'react';
import EventLogComponent from '../../../../components/overlayContent/programming/components/types/Events/Events';

const getEventLog = (WithEvents) => (
  <WithEvents>
    {({ data }) => {
      const eventProps = data.map(event => (
          { topic: event.topic, timestamp: event.timestamp }
      ))
      return (
        <EventLogComponent data={eventProps}/>
      )
    }}
  </WithEvents>
    
);

export default getEventLog;