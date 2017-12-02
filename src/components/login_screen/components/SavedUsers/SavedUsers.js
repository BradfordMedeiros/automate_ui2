
import React, { PropTypes } from 'react';
import SavedUser from './components/SavedUser';


const SavedUsers = ({ users, onSelectUser, selectedUserIndex }) => {
  window.users = users;
  return (
    <div style={{
      background: 'rgb(56, 56, 56)',
      width: '100%',
      display: 'flex',
      borderTop: '1px solid #3a3434',
      borderBottom: '1px solid black',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'auto',
      opacity: 1,
      boxShadow: '0px 0px 4px 1px black inset',
    }}>
      {users.map((user, index) => (
        <SavedUser
          isSelected={selectedUserIndex === index}
          onClick={() => {
            onSelectUser(index);
          }}
          username={user.username}
          imageURL={user.imageURL}
          remote={user.remote}
        />
      ))}
    </div>
  );
}

SavedUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onSelectUser: PropTypes.func,
  selectedUserIndex: PropTypes.number,
};

export default SavedUsers;