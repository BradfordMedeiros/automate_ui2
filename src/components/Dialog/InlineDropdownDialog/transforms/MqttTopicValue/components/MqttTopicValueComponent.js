import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const MqttTopicValue = ({
  onTopicChange,
  onValueChange
}) => (
  <div>
    <TextField
      hintText="mqtt topic"
      floatingLabelText="mqtt"
      onChange={(_, value) => {
        onTopicChange(value);
      }}
    />
    <TextField
      hintText="mqtt value"
      floatingLabelText="value"
      onChange={(_, value) => {
        onValueChange(value);
      }}
    />
  </div>
);

MqttTopicValue.propTypes = {
  onTopicChange: PropTypes.func,
  onValueChange: PropTypes.func,
};

export default MqttTopicValue;

