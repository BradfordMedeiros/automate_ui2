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
  email,
  alias,
}) => (
  <div>
    <div style={styles.header}>Email</div>
    <div style={styles.field}>{email || 'Error Retrieving Information'}</div>
    <div style={styles.header}>Alias</div>
    <div style={styles.field}>{alias || 'Error Retrieving Information'}</div>
  </div>
);

AccountInformation.propTypes = {
  email: PropTypes.string,
  alias: PropTypes.string,
};

export default AccountInformation;