import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const MqttTopcicValue = ({ onChange }) => (
  <div>
    <TextField
      hintText="mqtt topic"
      floatingLabelText="mqtt"
      onChange={(_, value) => {
        onChange(value);
      }}
    />
    <TextField
      hintText="mqtt value"
      floatingLabelText="value"
      onChange={(_, value) => {
        onChange(value);
      }}
    />
  </div>
);

MqttTopcicValue.propTypes = {
  onChange: PropTypes.func,
};

export default MqttTopcicValue;
