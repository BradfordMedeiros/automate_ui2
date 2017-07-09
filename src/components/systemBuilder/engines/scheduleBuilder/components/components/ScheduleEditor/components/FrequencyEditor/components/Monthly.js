
import React from 'react';
import Checkbox from 'material-ui/Checkbox';

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

const Monthly = () => (
  <div>
    {months.map(month => <Checkbox style={styles.checkbox} label={month} />)}
  </div>
);

export default Monthly;