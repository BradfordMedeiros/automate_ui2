
import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import isSelected from './util/isSelected';

const styles = {

  checkbox: {
    padding: 18,
    marginBottom: 8,
    border: '1px solid black',
    background: 'rgba(0,0,0,0.2)'
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


const Monthly = ({ schedule }) => {
  return (
    <div>
      {months.map((month, index) =>
        <Checkbox
          style={styles.checkbox}
          checked={isSelected.monthly.isSelected(schedule, index)}
          label={month}
        />
      )}
    </div>
  );
}

Monthly.propTypes = {
  schedule: PropTypes.string.isRequired,
};

export default Monthly;