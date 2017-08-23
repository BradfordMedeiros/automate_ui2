import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const defaultStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#151515',
  fontSize: 8,
  padding: 10,
  overflowX: 'auto',
  overflowY: 'hidden',
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
const QuickOptions = ({ selectedOption, onScheduleSelected, style = {} }) => (
  <div style={{...defaultStyle, ...style}}>
    {buttonTypes.map(type => getButton(type, onScheduleSelected, selectedOption))}
    {/*<FlatButton onClick={() => onScheduleSelected('target')}  secondary label="Schedule Single Event" />*/}
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default QuickOptions;