import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import File from './components/File';

const StylesheetUploadDialog = ({ open, onRequestClose }) => (
  <Dialog
    open={open}
    onRequestClose={onRequestClose}
    bodyStyle={{
      background: 'rgb(10,10,10)',
      borderLeft: '1px solid steelblue',
      borderRight: '1px solid steelblue',
    }}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <FlatButton label="Upload StyleSheet" labelStyle={{ color: 'steelblue' }} />
      <FlatButton label="Download Current Stylesheet" />
      <FlatButton label="Delete Stylesheet" />
    </div>
    <File
      style={{
        margin: 8,
        marginLeft: 48,
        background: 'steelblue',
        border: '1px solid black',
      }}
      onChange={form => {
        //onFormData(form);
      }}
    />
  </Dialog>
);

StylesheetUploadDialog.propTypes = {
  showUploadDialog: PropTypes.bool,
  onUploadRequestClose: PropTypes.func,
};

export default StylesheetUploadDialog;

