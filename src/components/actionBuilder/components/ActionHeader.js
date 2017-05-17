import React, { PropTypes } from 'react';


const ActionHeader = ({ actionType }) => {
  if (actionType === 'javascript') {
    return (
      <div
        style={{
          padding: 18,
          paddingLeft: 24,
          borderBottom: '1px solid rgba(0,0,0,0.3)',
          background: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="typeLabel" style={{ display: 'inline' }}>Type:</div>
        <div className="typeValue" style={{ display: 'inline', color: 'white', paddingLeft: 20 }}>JavaScript</div>
      </div>
    );
  }
  return null;
};

ActionHeader.propTypes = {
  actionType: PropTypes.string.isRequired,
};

export default ActionHeader;
