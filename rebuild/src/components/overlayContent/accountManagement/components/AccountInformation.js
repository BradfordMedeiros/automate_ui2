import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  header: {
    marginTop: 20,
    paddingTop: 18,
    paddingLeft: 18,
    color: 'rgb(120,120,120)',
    borderBottom: '1px solid rgb(10,10,10)',
    marginBottom: 14,
  },
  field: {
    marginBottom: 40,
    paddingLeft: 38,
    color: 'whitesmoke',
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