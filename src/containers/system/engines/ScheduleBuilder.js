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

              //conditionName={conditions.length > 0 ? conditions[this.state.selectedIndex].name : 'No conditions'}
              /*onConditionChange={(newConditions, addedConditionName, deletedConditionName) => {
               if (addedConditionName) {
               addCondition(addedConditionName);
               }
               if (deletedConditionName) {
               deleteCondition(deletedConditionName);
               }
               }}*/

              //conditionType={conditions.length > 0 ? conditions[this.state.selectedIndex].type : ''}
              //conditionCode={conditions.length > 0 ? conditions[this.state.selectedIndex].content : ''}
              /*onUpload={(code) => {
               saveCondition(conditions[this.state.selectedIndex].name, code);
               }}*/
            />
          )
        }}
      </WithSchedules>
    );
  }
}

export default ActionsBuilder;

