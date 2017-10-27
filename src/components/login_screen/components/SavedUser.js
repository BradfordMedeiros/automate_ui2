
import React, { PropTypes } from 'react';
import './style.css';

const SavedUser = ({ username, remote }) => (
  <div  className="SavedUser" style={{
    height: 120,
    width: 120,
    background: 'black',
    border: '1px solid black',
    display: 'inline-table',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }}>
    <div>{username}</div>
    <div>{remote ?  'remote': 'local'}</div>
  </div>
);

SavedUser.propTypes = {
  username: PropTypes.string,
  remote: PropTypes.string,
};

export default SavedUser;