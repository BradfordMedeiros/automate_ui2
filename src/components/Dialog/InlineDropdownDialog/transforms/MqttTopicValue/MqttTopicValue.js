
import React, { Component } from 'react';
import MqttTopicValueComponent from './components/MqttTopicValueComponent';

class MqttTopicValue extends Component {
  render() {
    const { onChange } = this.props;
    return <MqttTopicValueComponent onChange={onChange} />
  }
}

export default MqttTopicValue;