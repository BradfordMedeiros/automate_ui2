import React, { PropTypes } from 'react';
import NumericTextfield from './transforms/NumericTextfield';
import MqttTopicValue from './transforms/MqttTopicValue/MqttTopicValue';

const Transforms = ({ item, onChange, selectedValue }) => {
  const { type, ...otherProps } = item;

  const newProps = { ...otherProps, selectedValue, onChange };
  switch (type) {
    case 'options': {
      return <MqttTopicValue {...newProps} />;
    }
    case 'text': {
      return <NumericTextfield {...newProps} />;
    }
    default: {
      throw (new Error('Invalid transform type ', type));
    }
  }
};

Transforms.propTypes = {
  onChange: PropTypes.func,
  selectedValue: PropTypes.string,
  item: PropTypes.object,
};

export default Transforms;
