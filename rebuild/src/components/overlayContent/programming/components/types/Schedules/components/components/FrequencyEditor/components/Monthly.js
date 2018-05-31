import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { month as monthUtil } from 'cron_util';

const styles = {
  checkbox: {
    padding: 18,
    marginBottom: 8,
  },
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


const Monthly = ({ schedule, onScheduleChange }) => {
  window.s = schedule;
  return (
    <div>
      {months.map((month, index) =>
        <Checkbox
          style={styles.checkbox}
          checked={monthUtil.isSelected(schedule, index)}
          onCheck={(_, x) => {
            if (x === true){
              const newSchedule = monthUtil.add(schedule, index);
              onScheduleChange(newSchedule);
            }else{
              const newSchedule = monthUtil.remove(schedule, index);
              onScheduleChange(newSchedule);
            }
          }}
          label={month}
        />
      )}
    </div>
  );
}

Monthly.propTypes = {
  schedule: PropTypes.string.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
};

export default Monthly;