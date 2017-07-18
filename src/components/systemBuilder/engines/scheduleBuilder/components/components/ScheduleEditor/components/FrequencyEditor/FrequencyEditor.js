
import React, { PropTypes } from 'react';
import Second from './components/Second';
import Minute from './components/Minute';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import TargetDate from './components/TargetDate';
import None from './components/None';

const style = {
  width: '100%',
  display: 'inline-block',
  background: 'rgba(0,0,0,0.1)',
  padding: 28,
  overflow: 'auto',
};

const stringToComponent =  {
  second: Second,
  minute: Minute,
  hourly: Hourly,
  daily: Daily,
  weekly: None,
  monthly: Monthly,
  target: TargetDate,
};

const FrequencyEditor = ({ type, schedule, onScheduleChange }) => {

  const FrequencyComponent = stringToComponent[type] || None;
  return (
    <div style={style}>
      <FrequencyComponent
        schedule={schedule}
        onScheduleChange={onScheduleChange}
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