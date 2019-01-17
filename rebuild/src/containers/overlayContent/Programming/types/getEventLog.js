import React from 'react';
import { Events as EventLogComponent } from '../../../../components/overlayContent/programming/components/types/Types';

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