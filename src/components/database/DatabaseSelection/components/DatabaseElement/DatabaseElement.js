import React, { PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import './style.css';

const DatabaseElement = ({ databaseName, isActive, onClick }) => (
  <div
    style={{ border: isActive ? '1px solid rgb(140,140,140)': undefined, opacity: isActive ? 1: undefined }}
    onClick={onClick}
    className="database_element"
  >
    <Subheader>Database Name</Subheader>
    <div>{databaseName}</div>
    <Subheader>Description</Subheader>
    <div>none</div>
  </div>
);

DatabaseElement.propTypes = {
  databaseName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DatabaseElement;
