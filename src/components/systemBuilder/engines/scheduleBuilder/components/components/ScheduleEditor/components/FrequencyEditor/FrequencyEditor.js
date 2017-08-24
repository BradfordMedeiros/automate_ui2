
import React, { PropTypes } from 'react';
import Second from './components/Second';
import Minute from './components/Minute';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import TargetDate from './components/TargetDate';
import None from './components/None';

const defaultStyle = {
  background: 'rgb(55, 55, 55)',
  boxShadow: '0px 0px 5px 0.1px black',
  paddingTop: 4,
  paddingLeft: 8,
  paddingRight: 0,
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

const FrequencyEditor = ({ type, schedule, onScheduleChange, style= { } }) => {

  const FrequencyComponent = stringToComponent[type] || None;
  return (
    <div style={{...defaultStyle, ...style}}>
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
  style: PropTypes.object,
};

export default FrequencyEditor;