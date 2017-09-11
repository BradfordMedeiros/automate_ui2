import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../.././../axiomBuilder/AxiomBuilder';
import ScheduleInfo from './components/ScheduleInfo';

class ScheduleBuilder extends Component {
  render() {
    const {
      schedules,
      selectedIndex,
      onScheduleChange,
      onScheduleSelected,
      scheduleName,
    } = this.props;

    return (
      <AxiomBuilder
        title="Schedules"
        axioms={schedules.map(schedule => schedule.name)}
        selectedIndex={selectedIndex}
        onAxiomSelected={onScheduleSelected}
        onAxiomChange={onScheduleChange}
      >
        {(schedules.length > 0) && (
          <ScheduleInfo
            topic={schedules[selectedIndex].topic}
            value={schedules[selectedIndex].value}
            scheduleName={schedules[selectedIndex].name}
            schedule={schedules[selectedIndex].content}
            submitSchedule={({ schedule, topic, value }) => {
              const name = schedules[selectedIndex].name;
              onScheduleChange(undefined,
                {
                  name,
                  schedule,
                  topic,
                  value,
                })
            }}
            deleteSchedule={() => {
              onScheduleChange(undefined, undefined, scheduleName)}
           }
          />
        )}
        {(schedules.length === 0) && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              top: '30%',
              color: 'rgb(110,110,110)',
              fontFamily: 'monospace',
              fontSize: 48,
            }}>
            no schedules
          </div>
        )}
      </AxiomBuilder>
    );
  }
}

ScheduleBuilder.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
  scheduleName: PropTypes.string.isRequired,
  scheduleType: PropTypes.string.isRequired,
};

export default ScheduleBuilder;

