import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const UploadImageDialog = ({ showImageUpload, hideImageUpload, uploadImage, onSetImageUrl }) => (
    <Dialog
        open={showImageUpload}
        onRequestClose={hideImageUpload}
        actions={[
            <Button onClick={hideImageUpload} label="Cancel" />,
            <Button onClick={uploadImage} label="Upload" />
        ]}
    >
        <div>
            Select image url to upload
        </div>
        <TextField
            fullWidth
            floatingLabelText="Image URL"
            onChange={onSetImageUrl}
        />
    </Dialog>
);

export default UploadImageDialog;