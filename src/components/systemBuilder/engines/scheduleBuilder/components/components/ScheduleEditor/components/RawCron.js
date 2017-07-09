import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const style = {
  borderLeft: '1px solid rgba(0, 0, 0, 0.5)',
    height: 110,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    padding: 18,
    paddingBottom: 40,
    background: '#2f2f2f',
};

const convertCronStringToObject = schedule => {
  const times = schedule.split(' ');
  return ({
    s: times[0],
    m: times[1],
    h: times[2],
    d: times[3],
    w: times[4],
    M: times[5],
  });
};

const handleChange = (schedule, onScheduleChange, index) => (_, newValue) => {
  const splitSchedule =  schedule.split(' ');
  splitSchedule[index] = newValue;
  const newSchedule = splitSchedule.join(' ');
  onScheduleChange(newSchedule);
};



const RawCron = ({ schedule, onScheduleChange }) => {
  const timeObject = convertCronStringToObject(schedule);
  window.to = timeObject;
  return (
    <div style={style}>
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 0)}
        floatingLabelText="Second"
        value={timeObject.s}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 1)}
        floatingLabelText="Minute"
        value={timeObject.m}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 2)}
        floatingLabelText="Hourly"
        value={timeObject.h}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 3)}
        floatingLabelText="Daily"
        value={timeObject.d}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 4)}
        floatingLabelText="Week"
        value={timeObject.w}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 5)}
        floatingLabelText="Month"
        value={timeObject.M}
        style={{ width: 100 }}
      />
    </div>
  );
};

RawCron.propTypes = {
  schedule: PropTypes.string.isRequired,
  onScheduleChange: PropTypes.func,
};

export default RawCron;
