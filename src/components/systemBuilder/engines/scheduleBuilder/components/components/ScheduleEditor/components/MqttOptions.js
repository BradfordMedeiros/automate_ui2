
import React, { PropTypes } from 'react';
import { RaisedButton, TextField, Subheader, Divider } from 'material-ui';

const topicValueStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: '2px ridge rgba(0, 0, 0, 0.14)',
  boxShadow: '0px 0px 5px 0.1px black inset',
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
    <Subheader style={{ border: '1px solid rgba(0,0,0,0.4)', background: '#303030', fontSize: 18, marginTop: 8 }}>
      Mqtt Trigger
    </Subheader>
    <Divider />
    <div style={{
      background: 'rgba(0, 0, 0, 0.25)',
      boxShadow: '0px 0px 5px 0.1px black inset',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      border: '1px solid black',
      padding: 18
    }}>
      <TextField fullWidth value={topic} onChange={(_, topic) => onTopicChange(topic)} floatingLabelText={"Topic"} />
      <TextField fullWidth value={value} onChange={(_, value) => onValueChange(value)} floatingLabelText={"Value"} />
    </div>
    <div style={{ marginTop: 18, width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid black',  paddingBottom: 18, boxShadow: '0px 1px 2px 0.5px black', background: '#282828' }}>
      <Subheader>Controls</Subheader>
      <Divider />
      <RaisedButton primary label="Submit" onClick={onSubmitSchedule} />
      <RaisedButton secondary disabled label="Pause/Play" />
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