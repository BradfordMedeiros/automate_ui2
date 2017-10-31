import React, { PropTypes } from 'react';

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

const AccountInformation = ({
  username,
}) => (
  <div>
    <div style={styles.header}>Username</div>
    <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
    <div style={styles.header}>Email</div>
    <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
    <div style={styles.header}>Alias</div>
    <div style={styles.field}>{username || 'Error Retrieving Information'}</div>
  </div>
);

AccountInformation.propTypes = {
  username: PropTypes.string,
};

export default AccountInformation;