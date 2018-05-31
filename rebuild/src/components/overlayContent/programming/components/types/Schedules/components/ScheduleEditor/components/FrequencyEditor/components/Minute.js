import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { minute as minuteUtil  } from 'cron_util';
import oneThrough59 from './shared/oneThrough59';

const styles = {
  checkbox: {
    padding: 18,
    marginBottom: 8,
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