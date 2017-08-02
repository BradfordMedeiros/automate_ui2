import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import WithData from '../../../../../data/WithData';
import Subheader from 'material-ui/Subheader';

const WithMqtt = WithData.pubsub.WithMqtt;

const MqttValue = ({ topic }) => (
  <WithMqtt
    topics={fromJS(topic ? [topic] : [])}
  >
    {topics => (
      <div style={{ height: 80, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{ display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: 'center', height: 80 }}
        >
          <div>{topics[topic] || 'No data'}</div>
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: 12,
          height: 18,
          display: 'flex',
          alignItems: 'flex-start',
          paddingLeft: 8,
          paddingRight: 8,
          background: 'rgba(0, 0, 0, 0.07)',
        }}>topic value</div>
      </div>
    )}
  </WithMqtt>
);

MqttValue.propTypes = {
  topic: PropTypes.string,
};

export default MqttValue;
