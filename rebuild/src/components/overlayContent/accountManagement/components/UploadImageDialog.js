import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const UploadImageDialog = ({
  showImageUpload, hideImageUpload, uploadImage, onSetImageUrl,
}) => (
  <Dialog
    open={showImageUpload}
    onRequestClose={hideImageUpload}
  >
    <div>
            Select image url to upload
    </div>
    <TextField
      fullWidth
      floatingLabelText="Image URL"
      onChange={event => {
        onSetImageUrl(event.target.value)
      }}
    />
    <Button onClick={hideImageUpload}>Cancel</Button>
    <Button onClick={uploadImage}>Upload</Button>
  </Dialog>
);

export default UploadImageDialog;
