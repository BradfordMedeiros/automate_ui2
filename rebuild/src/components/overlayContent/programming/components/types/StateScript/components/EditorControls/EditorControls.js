import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './style.css';

const EditorControls = ({
  onUploadClicked,
  onRevertClicked,
  rate,
  onRateChange,
}) => (
  <div className="editor_controls_outer">
    <Button className="editor_controls_button" variant="raised" onClick={() => { if (onUploadClicked) { onUploadClicked(); }}}>
      Upload
    </Button>
    <Button className="editor_controls_button" variant="raised" onClick={() => { if (onRevertClicked) { onRevertClicked(); }}}>
      Revert
    </Button>
    <div className="editor_controls_rate">
      topic:
      <input
          ref={inputRef => {
            if(inputRef){
              inputRef.value = 'topic here'
            }
          }}
          onChange={event => { onRateChange(event.target.value) }}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(245, 245, 245, 0.07)',
            color: 'whitesmoke',
            fontSize: 14,
            marginLeft: 18,
          }} />
    </div>
    <div className="editor_controls_rate">
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
    </div>
  </div>
);

EditorControls.propTypes = {
  onUploadClicked: PropTypes.func,
  onRevertClicked: PropTypes.func,
  rate: PropTypes.number,
  onRateChange: PropTypes.func,
};

export default EditorControls;