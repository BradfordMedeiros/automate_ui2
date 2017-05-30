import React, { PropTypes } from 'react';
import ItemWrapper from '../components/ItemWrapper';
import MqttValue from './components/MqttValue';
import PublishMqttValue from './components/PublishMqttValue';

const MqttFields = ({ topic }) => (
  <div>
    <ItemWrapper>
      <MqttValue topic={topic} />
    </ItemWrapper>
    <ItemWrapper>
      <PublishMqttValue topic={topic} />
    </ItemWrapper>
  </div>
);

MqttFields.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default MqttFields;
