
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

const FrequencyEditor = ({ type }) => {
  console.log('type is: ', type);

  const FrequencyComponent = stringToComponent[type] || None;
  return (
    <div style={{ width: '100%', display: 'inline-block', background: 'rgba(0,0,0,0.1)', padding: 28, overflow: 'auto' }}>
      <FrequencyComponent />
    </div>
  );
};

FrequencyEditor.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FrequencyEditor;