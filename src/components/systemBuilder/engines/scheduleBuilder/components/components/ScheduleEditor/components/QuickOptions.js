import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
  padding: 18,
};


const QuickOptions = ({ selectedOption, onScheduleSelected }) => (
  <div style={style}>
    <FlatButton onClick={() => onScheduleSelected('second')} label="Second" />
    <FlatButton onClick={() => onScheduleSelected('minute')}  label="Minute" />
    <FlatButton onClick={() => onScheduleSelected('hourly')} label="Hourly" />
    <FlatButton onClick={() => onScheduleSelected('daily')} label="Daily" />
    <FlatButton onClick={() => onScheduleSelected('monthly')} label="Monthly" />
    <FlatButton onClick={() => onScheduleSelected('target')}  secondary label="Schedule Single Event" />
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
};

export default QuickOptions;