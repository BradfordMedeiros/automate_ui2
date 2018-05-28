import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const UploadDialog = ({ showUploadDialog, onRequestClose, onUploadFileButtonClick }) => (
    <Dialog
        open={showUploadDialog}
        onClose={onRequestClose}
        bodyStyle={{
            background: 'rgb(10,10,10)',
            borderLeft: '1px solid steelblue',
            borderRight: '1px solid steelblue',
        }}
    >
        <Button labelStyle={{ color: 'steelblue' }} onClick={onUploadFileButtonClick} >Upload</Button>/
    </Dialog>
);

export default UploadDialog;


