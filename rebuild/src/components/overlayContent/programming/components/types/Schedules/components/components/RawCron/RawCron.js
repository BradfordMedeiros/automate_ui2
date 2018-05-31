import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './style.css';

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
const handleChange = (schedule, onScheduleChange, index) => event => {
  const splitSchedule =  schedule.split(' ');
  splitSchedule[index] = event.target.value;
  const newSchedule = splitSchedule.join(' ');
  onScheduleChange(newSchedule);
};

const RawCron = ({ schedule, onScheduleChange }) => {
  const timeObject = convertCronStringToObject(schedule);
  return (
    <div className="schedule_editor_raw_cron">
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 0)}
        helperText="Second"
        value={timeObject.s}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 1)}
        helperText="Minute"
        value={timeObject.m}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 2)}
        helperText="Hourly"
        value={timeObject.h}
        style={{ width: 100 }}
      />
      <TextField
        onChange={handleChange(schedule, onScheduleChange, 3)}
        helperText="Daily"
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
        helperText="Month"
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
