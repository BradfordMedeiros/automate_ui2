import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
  padding: 18,
};

const handleChange =  (onScheduleChange, index) => () => {
   const baseSchedule =  '* * * * * *';
   const newSchedule = baseSchedule.split(' ');
   newSchedule[index] = '1';
   onScheduleChange(newSchedule.join(' '));
};


const QuickOptions = ({ selectedOption, onSelectedOptionChange, onScheduleChange }) => (
  <div style={style}>
    <FlatButton onClick={handleChange(onScheduleChange, 0)} label="Second" />
    <FlatButton onClick={handleChange(onScheduleChange, 1)}  label="Minute" />
    <FlatButton onClick={handleChange(onScheduleChange, 2)} label="Hourly" />
    <FlatButton onClick={handleChange(onScheduleChange, 3)} label="Daily" />
    <FlatButton onClick={handleChange(onScheduleChange, 4)} label="Weekly" />
    <FlatButton onClick={handleChange(onScheduleChange, 5)} label="Monthly" />
    <FlatButton secondary label="Schedule Single Event" />
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onSelectedOptionChange: PropTypes.func.isRequired,
  onScheduleChange: PropTypes.func,
};

export default QuickOptions;