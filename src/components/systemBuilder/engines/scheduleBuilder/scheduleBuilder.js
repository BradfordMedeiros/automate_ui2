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
      scheduleValues,
    } = this.props;

    console.log('--+---values: ', scheduleValues);
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
          schedule={scheduleValues[selectedIndex]}
          submitSchedule={schedule => {
            const name = schedules[selectedIndex];

            onScheduleChange(undefined,
              {
                name: schedules[selectedIndex],
                schedule,
              })
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
  scheduleValues:  PropTypes.array.isRequired,
};

export default ScheduleBuilder;

