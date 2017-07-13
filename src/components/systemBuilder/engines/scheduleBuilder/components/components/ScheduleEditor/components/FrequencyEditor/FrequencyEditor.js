
import React, { PropTypes } from 'react';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';
import TargetDate from './components/TargetDate';
import None from './components/None';

const stringToComponent =  {
  hourly: Hourly,
  daily: Daily,
  weekly: Weekly,
  monthly: Monthly,
  target: TargetDate,
};

const FrequencyEditor = ({ type, schedule }) => {

  const FrequencyComponent = stringToComponent[type] || None;
  return (
    <div style={{ width: '100%', display: 'inline-block', background: 'rgba(0,0,0,0.1)', padding: 28, overflow: 'auto' }}>
      <FrequencyComponent
        schedule={schedule}
        onScheduleChange={newSchedule => {
          console.log('new schedule: ', newSchedule);
        }}
      />
    </div>
  );
};

FrequencyEditor.propTypes = {
  type: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
};

export default FrequencyEditor;