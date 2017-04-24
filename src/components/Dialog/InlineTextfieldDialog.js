
import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';
import DialogContainer from './InlineDialogContainer';

const InlineDialog = ({ open, closeDialog, onChange, text, hintText, onOkClick }) => (
    <DialogContainer text={text} open={open} closeDialog={closeDialog} onOkClick={onOkClick}>
      <TextField
        style={{ paddingLeft: 20 }}
        hintText={hintText}
        onChange={onChange}
      />
    </DialogContainer>
);

InlineDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onOkClick: PropTypes.func.isRequired,
  hintText: PropTypes.string,
};

export default InlineDialog;