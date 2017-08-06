import React, { PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import './style.css';

const DatabaseElement = ({ databaseName, isActive }) => (
  <div className="database_element">
    <Subheader>Database Name</Subheader>
    <div>{databaseName}</div>
    <Subheader>Description</Subheader>
    <div>none</div>
  </div>
);

DatabaseElement.propTypes = {
  databaseName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default DatabaseElement;
