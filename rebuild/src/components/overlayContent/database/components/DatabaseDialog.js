import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const DatabaseDialog = ({  isOpen, onRequestClose, onTextFieldChange, onSubmit }) => (
    <Dialog
        open={isOpen}
        onRequestClose={onRequestClose}
    >
        <TextField
            helperText="Enter name of the database"
            onChange={onTextFieldChange}
        />
        <div style={{ display: 'flex' }}>
            <Button variant="flat" onClick={onRequestClose}>Cancel</Button>
            <Button variant="raised" onClick={onSubmit} >Submit</Button>
        </div>
    </Dialog>
);

export default DatabaseDialog;