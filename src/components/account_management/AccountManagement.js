
import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const AccountManagement = ({
  username,
  onLogout,
}) => (
  <div style={{
    background: 'rgb(30,30,30)',
    width: '100%',
    height: '100%',
    fontSize: 28,
    color: 'whitesmoke',
    padding: 28,
    paddingTop: 30,
  }}>
    <div style={{
      fontSize: 28,
      color: 'whitesmoke',
      padding: 48,
      paddingTop: 30,
    }}>
      My Account
    </div>
    <Divider />
    <div style={{ margin: 20 }}>Username</div>
    <div>{username || 'Error Retrieving Information'}</div>
    <RaisedButton label="Logout" onClick={onLogout} />
  </div>
);

AccountManagement.propTypes = {
  username: PropTypes.string,
  onLogout: PropTypes.func,
};

export default AccountManagement;