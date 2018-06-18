import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SavedUser = ({
  username, remote, isSelected, imageURL, onClick,
}) => (
  <div
    className="main_login_saved_user"
    onClick={onClick}
    style={{
      background: imageURL ? `url(${imageURL})` : 'black',
      color: isSelected ? 'white' : undefined,
      border: isSelected ? '1px solid white' : undefined,
    }}
  >
    <div>username: {username}</div>
    <div>type: {remote ? 'remote' : 'local'}</div>
  </div>
);

SavedUser.propTypes = {
  username: PropTypes.string,
  imageURL: PropTypes.string,
  remote: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SavedUser;
