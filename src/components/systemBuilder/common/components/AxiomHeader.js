import React, { PropTypes } from 'react';

const colorMap = {
  javascript: 'rgba(220,60,60,0.9)',
  mqtt: 'rgba(130, 130, 170, 0.9)',
  executable: 'rgba(170, 170, 130, 0.9)',
};

const getStyle = (actionType, style) => ({
  padding: 18,
  paddingLeft: 24,
  borderBottom: '1px solid rgba(0,0,0,0.3)',
  background: colorMap[actionType],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...style,
});

const AxiomHeader = ({ actionType, style }) => {
  if (Object.keys(colorMap).indexOf(actionType) < 0) {
    console.error('action type not supported: ', actionType);
  }
  return (
    <div
      style={getStyle(actionType, style)}
    >
      <div className="typeLabel" style={{ display: 'inline' }}>Type:</div>
      <div className="typeValue" style={{ display: 'inline', color: 'white', paddingLeft: 20 }}>{actionType}</div>
    </div>
  );
  return null;
};

AxiomHeader.propTypes = {
  actionType: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default AxiomHeader;
