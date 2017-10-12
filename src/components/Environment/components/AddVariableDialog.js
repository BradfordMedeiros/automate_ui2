import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

const AddVariableDialog = ({ open, onRequestClose }) => (
  <Dialog
    open={open}
    onRequestClose={onRequestClose}
    actions={[
      <RaisedButton
        onClick={onRequestClose}
        label="Cancel"
      />,
      <RaisedButton label="Ok" />,
    ]}
  >
    <Subheader>Add Environmental Variable</Subheader>
    <TextField floatingLabelText="Token" fullWidth />
    <TextField floatingLabelText="Value" fullWidth />
  </Dialog>
);

AddVariableDialog.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default AddVariableDialog;