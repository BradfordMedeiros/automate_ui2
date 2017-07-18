import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
  padding: 18,
};

const getBackgroundColor = (selectedType, selectedOption) => selectedOption === selectedType ? 'rgb(1, 90, 99)': undefined;

const getButton = (selectedType, onScheduleSelected, selectedOption) => (
  <FlatButton
    backgroundColor={getBackgroundColor(selectedType, selectedOption)}
    onClick={() => onScheduleSelected(selectedType)}
    label={selectedType}
  />
);

const buttonTypes = ['second','minute','hourly','daily','monthly'];
const QuickOptions = ({ selectedOption, onScheduleSelected }) => (
  <div style={style}>
    {buttonTypes.map(type => getButton(type, onScheduleSelected, selectedOption))}
    <FlatButton onClick={() => onScheduleSelected('target')}  secondary label="Schedule Single Event" />
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
};

export default QuickOptions;