import React, { PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

const EditorControls = ({
  editModeEnabled,
  onUploadClicked,
  onRevertClicked,
  onEditModeClicked,
  disableRevert,
  hideUpload,
  hideRevert,
  showRate,
  rate,
  onRateChange,
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
    {!hideUpload && <RaisedButton
      label="Upload"
      disabled={!editModeEnabled}
      style={{ marginLeft: 40 }}
      onClick={() => {
        if (onUploadClicked) {
          onUploadClicked();
        }
      }}
    />}
    {!hideRevert && <RaisedButton
      label="Revert"
      disabled={disableRevert}
      onClick={() => {
        if (onRevertClicked) {
          onRevertClicked();
        }
      }}
    />}
    {showRate && <div style={{ display: 'inline', marginLeft: 40 }}>
      Rate (ms):
        <input
          ref={inputRef => {
            if(inputRef){
              inputRef.value = rate;
            }
          }}
          type="number"
          onChange={event => { onRateChange(event.target.value) }}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(245, 245, 245, 0.07)',
            color: 'whitesmoke',
            fontSize: 14,
            marginLeft: 18,
          }} />
    </div>}
  </div>
);

EditorControls.propTypes = {
  onEditModeClicked: PropTypes.func,
  onUploadClicked: PropTypes.func,
  onRevertClicked: PropTypes.func,
  editModeEnabled: PropTypes.bool,
  disableRevert: PropTypes.bool,
  hideUpload: PropTypes.bool,
  hideRevert: PropTypes.bool,
  showRate: PropTypes.bool,
  rate: PropTypes.number,
  onRateChange: PropTypes.func,
};

export default EditorControls;
