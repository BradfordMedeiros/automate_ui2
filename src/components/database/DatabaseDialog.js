import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const DatabaseDialog = ({  isOpen, onRequestClose, onTextFieldChange, onSubmit }) => (
    <Dialog
        open={isOpen}
        onRequestClose={onRequestClose}
    >
        <TextField
            floatingLabelText="Enter Name"
            onChange={onTextFieldChange}
        />
        <div style={{ display: 'flex' }}>
            <FlatButton label="Cancel" onClick={onRequestClose} />
            <RaisedButton label="Submit" onClick={onSubmit} />
        </div>
    </Dialog>
);

export default DatabaseDialog;