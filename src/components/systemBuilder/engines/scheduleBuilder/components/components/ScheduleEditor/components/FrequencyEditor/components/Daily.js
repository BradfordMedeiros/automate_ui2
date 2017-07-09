
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

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Daily = () => (
  <div>
    {days.map(day => <Checkbox style={styles.checkbox} label={day} />)}
  </div>
);

export default Daily;