
import React, { PropTypes } from 'react';
import SavedUser from './components/SavedUser';

const SavedUsers = ({ users, onSelectUser, selectedUserIndex }) => (
  <div style={{
    background: 'rgb(30,30,30)',
    width: '100%',
    display: 'flex' ,
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'auto',
    opacity: '1',
  }}>
    {users.map((user, index) => (
      <SavedUser
        isSelected={selectedUserIndex === index}
        onClick={() => {
          onSelectUser(index);
        }}
        username={user.username}
        imageUrl={user.imageUrl}
        remote={user.remote}
      />
    ))}
  </div>
);

SavedUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onSelectUser: PropTypes.func,
  selectedUserIndex: PropTypes.number,
};

export default SavedUsers;