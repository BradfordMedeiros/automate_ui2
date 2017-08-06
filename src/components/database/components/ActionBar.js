import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  boxShadow: '0px 0px 1px 0.1px black inset',
}

const ActionBar = ({
  databaseName,
  isActive,
  onSetDatabaseAsActive,
  onDeleteDatabase,
  onDownloadDatabase,
  onCloneDatabase,
  onUploadDatabase,
  style
}) => (
  <div style={{ background: 'rgb(55, 55, 55)', ...style}}>
    <FlatButton style={buttonStyle} label="Set as Active" onClick={onSetDatabaseAsActive} />
    <FlatButton style={buttonStyle} label="Download" onClick={onDownloadDatabase} />
    <FlatButton style={buttonStyle} label="Copy" onClick={onCloneDatabase} />
    <FlatButton style={buttonStyle} label="Delete" onClick={onDeleteDatabase} />
    <FlatButton style={{ marginLeft: 8 }} label="Upload" onClick={onUploadDatabase} />
  </div>
);

ActionBar.propTypes = {
  onSetDatabaseAsActive: PropTypes.func,
  onDeleteDatabase: PropTypes.func,
  onDownloadDatabase: PropTypes.func,
  onCloneDatabase: PropTypes.func,
  onUploadDatabase: PropTypes.func,
};

export default ActionBar;

