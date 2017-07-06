import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../.././../axiomBuilder/AxiomBuilder';
import ScheduleInfo from './components/ScheduleInfo';

class ScheduleBuilder extends Component {
  render() {
    const {
      schedules,
      selectedIndex,
      deleteSchedule,
      onScheduleChange,
      onScheduleSelected,
      scheduleName,
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
          submitSchedule={schedule => {
            //addSchedule(scheduleName, schedule);
          }}
          deleteSchedule={() => {
            onScheduleChange(undefined, undefined, scheduleName)}
          }
        />
      </AxiomBuilder>
    );
  }
}

ScheduleBuilder.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  deleteSchedule: PropTypes.func.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
  scheduleName: PropTypes.string.isRequired,
  scheduleType: PropTypes.string.isRequired,
};

export default ScheduleBuilder;

