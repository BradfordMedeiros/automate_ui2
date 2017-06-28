
import React, { Component } from 'react';
import MqttTopicValueComponent from './components/MqttTopicValueComponent';

const createMqttTopicOptions = ({ mqttTopic, mqttValue }) => {
  return ({
    topic: mqttTopic,
    value: mqttValue,
  });
};

class MqttTopicValue extends Component {
  mqttTopic = '';
  mqttValue = '';
  handleChange = () => {
    const { onChange } = this.props;
    const value = createMqttTopicOptions({
      mqttTopic: this.mqttTopic,
      mqttValue: this.mqttValue
    });
    onChange(value);
  };
  render() {
    return (
      <MqttTopicValueComponent
        onTopicChange={mqttTopic => {
          this.mqttTopic = mqttTopic;
          this.handleChange({});
        }}
        onValueChange={mqttValue => {
          this.mqttValue = mqttValue;
          this.handleChange();
        }}
      />
    )
  }
}

export default MqttTopicValue;