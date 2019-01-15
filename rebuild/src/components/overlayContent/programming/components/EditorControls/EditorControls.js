import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './style.css';

const EditorControls = ({
  onUploadClicked,
  onRevertClicked,
  showRate,
  rate,
  onRateChange,
  initialTopicValue,
  initialSecondaryTopicValue,
  onTopicChange,
  onTopicSecondaryChange,
  showSecondaryTopic,
}) => (
  <div className="editor_controls_outer">
    <Button className="editor_controls_button" variant="raised" onClick={() => { if (onUploadClicked) { onUploadClicked(); }}}>
      Upload
    </Button>
    {(onRevertClicked !== undefined) && <Button className="editor_controls_button" variant="raised" onClick={() => { if (onRevertClicked) { onRevertClicked(); }}}>
      Revert
    </Button>}
    <div className="editor_controls_topic">
      topic:
      <input
          ref={inputRef => {
            if(inputRef){
              inputRef.value = initialTopicValue || 'topic'
            }
          }}
          onChange={event => { onTopicChange(event.target.value) }}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(245, 245, 245, 0.07)',
            color: 'whitesmoke',
            fontSize: 14,
            marginLeft: 18,
          }} />
    </div>
    {showSecondaryTopic && <div className="editor_controls_topic">
      topic:
      <input
          ref={inputRef => {
            if(inputRef){
              inputRef.value =  initialSecondaryTopicValue || 'topic'
            }
          }}
          onChange={event => { onTopicSecondaryChange(event.target.value) }}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(245, 245, 245, 0.07)',
            color: 'whitesmoke',
            fontSize: 14,
            marginLeft: 18,
          }} />
    </div>}
    {showRate && <div className="editor_controls_rate">
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
  onUploadClicked: PropTypes.func,
  onRevertClicked: PropTypes.func,
  showRate: PropTypes.bool,
  rate: PropTypes.number,
  onRateChange: PropTypes.func,
  initialTopicValue: PropTypes.string,
  initialSecondaryTopicValue: PropTypes.string,
  onTopicChange: PropTypes.func,
  onTopicSecondaryChange: PropTypes.func,
  showSecondaryTopic: PropTypes.bool,
};

export default EditorControls;
