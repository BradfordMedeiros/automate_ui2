import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../.././../axiomBuilder/AxiomBuilder';
import ScheduleInfo from './components/ScheduleInfo';

class ConditionBuilder extends Component {
  render() {
    const {
      schedules,
      conditionCode,
      selectedIndex,
      onScheduleChange,
      onScheduleSelected,
      scheduleName,
      conditionType,
      onUpload,
    } = this.props;

    return (
      <AxiomBuilder
        title="Schedules"
        axioms={schedules}
        selectedIndex={selectedIndex}
        onAxiomSelected={onScheduleSelected}
        onAxiomChange={onScheduleChange}
      >
        <ScheduleInfo
          scheduleName={scheduleName}
          deleteSchedule={() => {
            console.log('want to delete schedule name: ', scheduleName);
            const newSchedules = schedules.slice().filter(schedule => schedule !== scheduleName);
            onScheduleChange(newSchedules, undefined, scheduleName);
          }}
        />
      </AxiomBuilder>
    );
  }
}

ConditionBuilder.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
  conditionName: PropTypes.string.isRequired,
  conditionCode: PropTypes.string.isRequired,
  conditionType: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default ConditionBuilder;

