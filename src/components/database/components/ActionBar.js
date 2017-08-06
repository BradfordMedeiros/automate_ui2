import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  boxShadow: '0px 0px 1px 0.1px black inset',
}

const ActionBar = ({ databaseName, isActive, style }) => (
  <div style={{ background: 'rgba(0, 0, 0, 0.15)', ...style}}>
    <FlatButton style={buttonStyle} label="Set as Active" />
    <FlatButton style={buttonStyle} label="Download" />
    <FlatButton style={buttonStyle} label="Copy" />
    <FlatButton style={buttonStyle} label="Delete" />
  </div>
);

ActionBar.propTypes = {
  onSetDatabaseAsActive: PropTypes.func,
  onDeleteDatabase: PropTypes.func,
  onDownloadSelectedDatabase: PropTypes.func,
  onCloneSelectedDatabase: PropTypes.func,
};

export default ActionBar;

