import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const DatabaseElement = ({ databaseName, isActive, onClick }) => (
  <div
    style={{ border: isActive ? '1px solid rgb(140,140,140)': undefined, opacity: isActive ? 1: undefined }}
    onClick={onClick}
    className="database_element"
  >
    <div>Database Name</div>
    <div>{databaseName}</div>
    <div>Description</div>
    <div>none</div>
  </div>
);

DatabaseElement.propTypes = {
  databaseName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DatabaseElement;
