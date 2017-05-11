import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import './style.css';
import WithMqtt from '../../../../../data/WithMqtt';

class MqttTile extends Component {
  render() {
    const { savedContent } = this.props;
    const content = (savedContent && savedContent.topic) ? List([savedContent.topic]) : List();
    return (
      <WithMqtt topics={content} >
        {
        (stuff, publish) => (
          <div onClick={() => publish(savedContent.topic, savedContent.value)} className="mqtt_button" />
        )
      }
      </WithMqtt>
    );
  }
}

MqttTile.propTypes = {
  temperature: PropTypes.number,
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export const tile = MqttTile;
