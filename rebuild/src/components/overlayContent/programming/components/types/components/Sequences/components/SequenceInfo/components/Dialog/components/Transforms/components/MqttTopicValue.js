import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

const createMqttTopicOptions = ({ mqttTopic, mqttValue }) => ({
  topic: mqttTopic,
  value: mqttValue,
});

class MqttTopicValue extends Component {
  mqttTopic = '';
  mqttValue = '';
  handleChange = () => {
    const { onChange } = this.props;
    const value = createMqttTopicOptions({
      mqttTopic: this.mqttTopic,
      mqttValue: this.mqttValue,
    });
    onChange(value);
  };

  render() {
    return (
        <div>
          <TextField
              helperText="mqtt topic"
              label="mqtt"
              onChange={event => {
                this.mqttTopic = event.target.value;
                this.handleChange();
              }}
          />
          <TextField
              helperText="mqtt value"
              label="value"
              onChange={event => {
                this.mqttValue = event.target.value;
                this.handleChange();
              }}
          />
        </div>
    );
  }
}

export default MqttTopicValue;
