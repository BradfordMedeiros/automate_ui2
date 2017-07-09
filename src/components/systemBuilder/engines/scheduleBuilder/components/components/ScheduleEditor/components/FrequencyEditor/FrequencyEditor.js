
import React, { PropTypes } from 'react';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';
import None from './components/None';

const stringToComponent =  {
  hourly: Hourly,
  daily: Daily,
  weekly: Weekly,
  monthly: Monthly,
};

const FrequencyEditor = ({ type }) => {
  if (type === undefined){
    return <None />;
  }
  const FrequencyComponent = stringToComponent[type];
  return <FrequencyComponent />;
};

FrequencyEditor.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FrequencyEditor;