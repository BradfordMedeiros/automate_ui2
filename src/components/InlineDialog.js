
import React, { PropTypes } from 'react';
import { Dialog, TextField, RaisedButton } from 'material-ui';

const InlineDialog = ({ open, closeDialog, onChange, onOkClick }) => (
  <Dialog
    bodyStyle={{ backgroundColor: 'rgb(40, 40, 40)', border: '1px ridge rgba(255,255,255,0.1)' }}
    open={open}
    onRequestClose={closeDialog}
  >
    <div style={{ display: 'inline', color: 'rgba(255,255,255,0.8)' }}>Set the name of the grid</div>
    <TextField
      style={{ paddingLeft: 20 }}
      hintText="Grid name"
      onChange={onChange}
    />
    <RaisedButton
      onClick={closeDialog}
      style={{ marginLeft: 50 }}
      label="Cancel"
    />
    <RaisedButton
      onClick={onOkClick}
      style={{ marginLeft: 10 }}
      label="OK"
    />
  </Dialog>
);

InlineDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onOkClick: PropTypes.func.isRequired,
};

export default InlineDialog;