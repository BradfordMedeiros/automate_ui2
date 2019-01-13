import React, { Component } from 'react';
import ScheduleEditor from './components/ScheduleEditor/ScheduleEditor';

const getSchedules = (Header, SelectableTypes) => {
  class Schedules extends Component{
    state = {
      schedule: '1 * * * * *',
    };
    render(){
      console.log('rendering schedule: ', this.state.schedule);
      return (
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Header 
            itemName={'Schedules'}
            itemType={'Schedule Type'}
            deleteItem={() => {
              console.log('delete item placeholder')
            }}
          />
          <div style={{display: 'flex', flexGrow: 1}}>
            <SelectableTypes
              items={[]}
              selectedIndex={0}
              onItemSelected={(_, selectedIndex) => { 
              }}
              onAddClicked={() => {
              }}
            />
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
        </div>
      )
    }
  }


  return Schedules;
};


export default getSchedules;