import React from 'react';
import PropTypes from 'prop-types';
import NumericTextfield from './components/NumericTextfield';
import MqttTopicValue from './components/MqttTopicValue';

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
