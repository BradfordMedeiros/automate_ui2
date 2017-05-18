import React, { PropTypes } from 'react';
import ItemWrapper from '../common/ItemWrapper';
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

MqttValue.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default MqttFields;