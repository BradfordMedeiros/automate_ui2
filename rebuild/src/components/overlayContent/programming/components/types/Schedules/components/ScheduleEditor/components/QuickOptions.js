import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const getBackgroundColor = (selectedType, selectedOption) => selectedOption === selectedType ? 'rgb(1, 90, 99)': undefined;

const getButton = (selectedType, onScheduleSelected, selectedOption) => (
  <Button
    variant="raised"
    backgroundColor={getBackgroundColor(selectedType, selectedOption)}
    onClick={() => onScheduleSelected(selectedType)}
  >
    {selectedType}
  </Button>
);

const buttonTypes = ['second','minute','hourly','daily','monthly'];
const QuickOptions = ({ selectedOption, onScheduleSelected, includeToggle, onToggle, style = {} }) => (
  <div>
    <div style={{ display: 'flex' }}>
      {buttonTypes.map(type => getButton(type, onScheduleSelected, selectedOption))}
    </div>
    {/*<Button onClick={() => onScheduleSelected('target')}  secondary label="Schedule Single Event" />*/}
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
};

export default QuickOptions;