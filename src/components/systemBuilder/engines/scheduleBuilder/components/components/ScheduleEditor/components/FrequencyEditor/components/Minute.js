
import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import { minute as minuteUtil  } from 'cron_util';
import oneThrough59 from './shared/oneThrough59';

const styles = {
  checkbox: {
    padding: 18,
    marginBottom: 8,
    //border: '1px solid black',
    //background: 'rgba(0,0,0,0.2)'
  },
};


const Minute = ({ schedule, onScheduleChange }) => {
  return (
    <div>
      {oneThrough59.map((minute, index) =>
        <Checkbox
          style={styles.checkbox}
          label={minute}
          checked={minuteUtil.isSelected(schedule, index)}
          onCheck={(_, x) => {
            if (x === true){
              const newSchedule = minuteUtil.add(schedule, index);
              onScheduleChange(newSchedule);
            }else{
              const newSchedule = minuteUtil.remove(schedule, index);
              onScheduleChange(newSchedule);
            }
          }}
        />
      )}
    </div>
  );
}

Minute.propTypes = {
  schedule: PropTypes.string.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
};

export default Minute;