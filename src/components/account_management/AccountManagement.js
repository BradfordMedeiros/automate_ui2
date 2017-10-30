
import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  header: {
    margin: 20,
    boxShadow: '0px 0px 1px 1px black',
    padding: 18,
    background: '#383838',
  },
  field: {
    margin: 80,
    marginTop: 0,
  }
};

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
      paddingLeft: 0,
      paddingTop: 30,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ border: '1px solid black', cursor: 'pointer', width: 100, height: 100 }} />
        <div style={{ marginLeft: 48 }}>My Account</div>
      </div>
      <RaisedButton label="Logout" onClick={onLogout} />
    </div>
    <Divider />
    <div style={styles.header}>Username</div>
    <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
    <div style={styles.header}>Email</div>
    <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
    <div style={styles.header}>Alias</div>
    <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
  </div>
);

AccountManagement.propTypes = {
  username: PropTypes.string,
  onLogout: PropTypes.func,
};

export default AccountManagement;