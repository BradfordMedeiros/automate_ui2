import React, { PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

const EditorControls = ({
  editModeEnabled,
  onUploadClicked,
  onRevertClicked,
  onEditModeClicked,
  codeHasChanged,
  disableRevert,
}) => (
  <div>
    <div
      style={{ display: 'inline', cursor: 'pointer' }}
      onClick={() => {
        if (onEditModeClicked) {
          onEditModeClicked();
        }
      }}
    >
      {editModeEnabled ? 'Hide Script ' : 'View Script'}
    </div>
    <RaisedButton
      label="Upload"
      disabled={!editModeEnabled}
      style={{ marginLeft: 40 }}
      onClick={() => {
        if (onUploadClicked) {
          onUploadClicked();
        }
      }}
    />
    <RaisedButton
      label="Revert"
      disabled={disableRevert}
      onClick={() => {
        if (onRevertClicked) {
          onRevertClicked();
        }
      }}
    />
  </div>
);

EditorControls.propTypes = {
  onEditModeClicked: PropTypes.func,
  onUploadClicked: PropTypes.func,
  onRevertClicked: PropTypes.func,
  editModeEnabled: PropTypes.bool,
  disableRevert: PropTypes.bool,
};

export default EditorControls;
