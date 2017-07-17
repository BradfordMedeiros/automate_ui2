
import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import { hour as hourUtil  } from 'cron_util';

const styles = {
  checkbox: {
    padding: 18,
    marginBottom: 8,
    border: '1px solid black',
    background: 'rgba(0,0,0,0.2)'
  },
};

const hours = [
  '12am',
  '1am',
  '2am',
  '3am',
  '4am',
  '5am',
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
  '9pm',
  '10pm',
  '11pm',
];


const Hourly = ({ schedule, onScheduleChange }) => {
  return (
    <div>
      {hours.map((hour, index) =>
        <Checkbox
          style={styles.checkbox}
          label={hour}
          checked={hourUtil.isSelected(schedule, index)}
          onCheck={(_, x) => {
            if (x === true){
              const newSchedule = hourUtil.add(schedule, index);
              onScheduleChange(newSchedule);
            }else{
              const newSchedule = hourUtil.remove(schedule, index);
              onScheduleChange(newSchedule);
            }
          }}
        />
      )}
    </div>
  );
}

Hourly.propTypes = {
  schedule: PropTypes.string.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
};

export default Hourly;