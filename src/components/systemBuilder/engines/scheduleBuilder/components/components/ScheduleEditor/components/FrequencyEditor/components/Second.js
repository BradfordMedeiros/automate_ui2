
import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import { second as secondUtil  } from 'cron_util';
import oneThrough59 from './shared/oneThrough59';

const styles = {
  checkbox: {
    padding: 18,
    marginBottom: 8,
  },
};


const Second = ({ schedule, onScheduleChange }) => {
  return (
    <div>
      {oneThrough59.map((second, index) =>
        <Checkbox
          style={styles.checkbox}
          label={second}
          checked={secondUtil.isSelected(schedule, index)}
          onCheck={(_, x) => {
            if (x === true){
              const newSchedule = secondUtil.add(schedule, index);
              onScheduleChange(newSchedule);
            }else{
              const newSchedule = secondUtil.remove(schedule, index);
              onScheduleChange(newSchedule);
            }
          }}
        />
      )}
    </div>
  );
}

Second.propTypes = {
  schedule: PropTypes.string.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
};

export default Second;