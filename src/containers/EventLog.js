import React from 'react';
import WithData from '../data/WithData';
import EventLogComponent from '../components/eventLog/EventLog';
const WithEvents = WithData.polling.WithEvents;

class EventLog extends React.Component {
  render() {
    return (
      <div style={{ background: 'rgb(40,40,40)' }}>
        <WithEvents
          whileLoading={this.getContainer}
          refresh={1000}
        >
          {content =>  <EventLogComponent data={content.data}/>}
        </WithEvents>
      </div>
    );
  }
}

export default EventLog;
