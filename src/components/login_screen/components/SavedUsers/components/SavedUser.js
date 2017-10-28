
import React, { PropTypes } from 'react';
import './style.css';

const SavedUser = ({ username, remote, isSelected, imageUrl, onClick }) => (
  <div
    className="SavedUser"
    onClick={onClick}
    style={{
      height: 120,
      width: 120,
      background: imageUrl ? `url(${imageUrl})`: 'black',
      display: 'inline-table',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      color: isSelected ? 'white': undefined,
      border: isSelected ? '1px solid white': undefined,
      position: 'relative',
    }}
  >
    <div>{username}</div>
    <div>{remote ?  'remote': 'local'}</div>
  </div>
);

SavedUser.propTypes = {
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  remote: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SavedUser;