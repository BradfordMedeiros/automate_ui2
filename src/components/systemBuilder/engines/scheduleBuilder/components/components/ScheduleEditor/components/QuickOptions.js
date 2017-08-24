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
  position: 'relative',
  width: '100%',
};

const plusStyle = {
  position: 'absolute',
  left: '90%',
  right: 0,
  color: 'white',
  fontSize: 32,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
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
const QuickOptions = ({ selectedOption, onScheduleSelected, includeToggle, onToggle, style = {} }) => (
  <div style={{...defaultStyle, ...style}}>
    <div style={{ position: 'absolute', left: 0, width: '90%', overflow: 'auto', display: 'flex' }}>
      {buttonTypes.map(type => getButton(type, onScheduleSelected, selectedOption))}
    </div>
    {includeToggle && <div onClick={onToggle} style={plusStyle}>+</div>}
    {/*<FlatButton onClick={() => onScheduleSelected('target')}  secondary label="Schedule Single Event" />*/}
  </div>
);

QuickOptions.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
  includeToggle: PropTypes.bool,
  onToggle: PropTypes.func,
  style: PropTypes.object,
};

export default QuickOptions;