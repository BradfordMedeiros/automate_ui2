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
          window.s = schedules;
          window.ds = deleteSchedule;
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
              onScheduleChange={(newSchedules, addedScheduleName, deletedScheduleName) => {
                if (addedScheduleName) {
                  console.error('added:--- ', addedScheduleName);
                  addSchedule(addedScheduleName);
                }
                if (deletedScheduleName) {
                  console.error('delete:--- ', deletedScheduleName);
                  deleteSchedule(deletedScheduleName);
                }
                console.log('new schedules: ', newSchedules);
              }}

              // conditionName={conditions.length > 0 ? conditions[this.state.selectedIndex].name : 'No conditions'}
              /**/

              // conditionType={conditions.length > 0 ? conditions[this.state.selectedIndex].type : ''}
              // conditionCode={conditions.length > 0 ? conditions[this.state.selectedIndex].content : ''}
              /* onUpload={(code) => {
               saveCondition(conditions[this.state.selectedIndex].name, code);
               }}*/
            />
          );
        }}
      </WithSchedules>
    );
  }
}

export default ActionsBuilder;

