import React, { Component } from 'react';
import ScheduleEditor from './components/ScheduleEditor';

class Schedules extends Component{
  state = {
    schedule: '1 * * * * *',
  };
  render(){
    console.log('rendering schedule: ', this.state.schedule);
    return (
        <div style={{ display: 'flex', flexGrow: 1, background: 'red' }}>
          <ScheduleEditor
              schedule={this.state.schedule}
              topic={'temperature'}
              onTopicChange={() => { }}
              value={'test value'}
              onValueChange={() => { }}
              onScheduleChange={schedule => { this.setState({ schedule }); }}
              onSubmitSchedule={() => { }}
          />
        </div>
    )
  }
}

export default Schedules;