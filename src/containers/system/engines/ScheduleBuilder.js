import React, { Component } from 'react';
import ScheduleBuilderComponent from '../../../components/systemBuilder/engines/scheduleBuilder/scheduleBuilder';
import WithData from '../../../data/WithData';

const WithSchedules = WithData.polling.WithSchedules;

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
    selectedName: 'other',
  };
  render() {
    return (
      <WithSchedules
        renderWhileLoading
      >
        {({ schedules, addSchedule, deleteSchedule, saveSchedule }) => {
          return (
            <ScheduleBuilderComponent
              schedules={schedules.map(schedule => schedule.name)}
              selectedIndex={this.state.selectedIndex}
              onScheduleSelected={(selectedName, selectedIndex) => {
                this.setState({
                  selectedIndex,
                  selectedName,
                });
              }}
              scheduleName={schedules.length > 0 ? schedules[this.state.selectedIndex].name : 'No schedules'}
              onScheduleChange={(newSchedules, addedSchedule, deletedScheduleName) => {
                if (addedSchedule) {
                  //console.error('added:--- ', addedScheduleName);
                  //addSchedule(addedSchedule.name, addedSchedule.;
                  //const scheduleName = addedSchedule.name;
                  //const schedule = addedSchedule.schedule;
                  console.log('added schedule:');
                  console.log(addedSchedule);
                  const name = addedSchedule.name;
                  const schedule = addedSchedule.schedule;
                  addSchedule(name, schedule);
                }

                if (deletedScheduleName) {
                  console.error('delete:--- ', deletedScheduleName);
                  deleteSchedule(deletedScheduleName);
                }
              }}
            />
          );
        }}
      </WithSchedules>
    );
  }
}

export default ActionsBuilder;

