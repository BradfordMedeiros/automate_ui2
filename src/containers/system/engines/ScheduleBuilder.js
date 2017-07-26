import React, { Component } from 'react';
import ScheduleBuilderComponent from '../../../components/systemBuilder/engines/scheduleBuilder/ScheduleBuilder';
import WithData from '../../../data/WithData';

const WithSchedules = WithData.polling.WithSchedules;

const getSelectedIndex = (schedules, selectedIndex) => {
  if (selectedIndex < schedules.length){
    return selectedIndex;
  }
  return 0;
};


class ScheduleBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithSchedules
        renderWhileLoading
      >
        {({ schedules, addSchedule, deleteSchedule }) => {

          const selectedSchedule = schedules[getSelectedIndex(schedules, this.state.selectedIndex)];
          window.s = schedules;

          return (
            <ScheduleBuilderComponent
              schedules={schedules}
              selectedIndex={this.state.selectedIndex}
              onScheduleSelected={(selectedName, selectedIndex) => {
                this.setState({
                  selectedIndex,
                  selectedName,
                });
              }}
              scheduleName={selectedSchedule ? selectedSchedule.name : ''}
              onScheduleChange={(newSchedules, addedSchedule, deletedScheduleName) => {
                if (addedSchedule) {
                  console.log('added schedule ------ ', addedSchedule);
                  if(typeof(addedSchedule) === typeof('')){
                    addSchedule(addedSchedule);
                  }else {
                    const { name, schedule, topic, value } = addedSchedule;
                    addSchedule(name, schedule, topic, value);
                  }
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

export default ScheduleBuilder;

