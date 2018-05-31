import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const topicValueStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: '2px ridge rgba(0, 0, 0, 0.14)',
  background: '#2f2f2f',
};

const MqttOptions = ({
  topic,
  onTopicChange,
  value,
  onValueChange,
  onSubmitSchedule,
  style = { },
}) => (
  <div style={{...topicValueStyle, ...style}}>
    <div style={{ background: '#303030', fontSize: 18, marginTop: 8 }}>
      Mqtt Trigger
    </div>
    <Divider />
    <div style={{
      background: 'rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: 18
    }}>
      <TextField fullWidth value={topic} onChange={(_, topic) => onTopicChange(topic)} floatingLabelText={"Topic"} />
      <TextField fullWidth value={value} onChange={(_, value) => onValueChange(value)} floatingLabelText={"Value"} />
    </div>
    <div style={{ marginTop: 18, width: '100%', display: 'flex', flexDirection: 'column', paddingBottom: 18, background: '#282828' }}>
      <div>Controls</div>
      <Divider />
      <Button variant="raised" primary label="Submit" onClick={onSubmitSchedule} />
      <Button variant="raised" secondary disabled label="Pause/Play" />
    </div>
  </div>
);

MqttOptions.propTypes =  {
  style: PropTypes.object,
  topic: PropTypes.string.isRequired,
  onTopicChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSubmitSchedule: PropTypes.func.isRequired,
};

export default MqttOptions;