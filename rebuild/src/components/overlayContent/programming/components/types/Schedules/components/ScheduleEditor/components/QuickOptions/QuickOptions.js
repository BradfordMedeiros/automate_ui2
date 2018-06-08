import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import'./style.css';

const buttonTypes = ['cron'];
const QuickOptions = ({ onScheduleSelected }) => (
  <div className="quick_options_outer">
    {buttonTypes.map(type => (
        <Button
            variant="raised"
            className="quick_options_button"
            onClick={() => onScheduleSelected(type)}
        >
          {type}
        </Button>
    ))}
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
};

export default QuickOptions;