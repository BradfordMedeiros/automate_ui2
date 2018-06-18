import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './style.css';

const ActionBar = ({
  databaseName,
  isActive,
  onSetDatabaseAsActive,
  onDeleteDatabase,
  onDownloadDatabase,
  onCloneDatabase,
  onUploadDatabase,
  onCreateDatabase,
}) => (
  <div className="database_action_bar">
    <Button varaint="flat" className="database_action_bar_button" onClick={onSetDatabaseAsActive}>Set as Active</Button>
    <Button variant="flat" className="database_action_bar_button" onClick={onDownloadDatabase} >Download</Button>
    <Button variant="flat" className="database_action_bar_button" onClick={onCloneDatabase} >Copy</Button>
    <Button variant="flat" className="database_action_bar_button" onClick={onDeleteDatabase}>Delete</Button>
    <Button variant="flat" className="database_action_bar_button" onClick={onUploadDatabase} >Upload</Button>
    <Button variant="flat" className="database_action_bar_button" onClick={onCreateDatabase} >Create New</Button>
  </div>
);

ActionBar.propTypes = {
  onCreateDatabase: PropTypes.func,
  onSetDatabaseAsActive: PropTypes.func,
  onDeleteDatabase: PropTypes.func,
  onDownloadDatabase: PropTypes.func,
  onCloneDatabase: PropTypes.func,
  onUploadDatabase: PropTypes.func,
};

export default ActionBar;

