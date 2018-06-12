import React from 'react';
import PropTypes from 'prop-types';
import NumericTextfield from './components/NumericTextfield';
import MqttTopicValue from './components/MqttTopicValue';

const Transforms = ({ item, onChange, selectedValue }) => {
  const { type, ...otherProps } = item;

  const newProps = { ...otherProps, selectedValue };
  switch (type) {
    case 'action': {
      return <MqttTopicValue onChange={value => onChange({ type: 'action', options: value })} {...newProps} />;
    }
    case 'wait': {
      return <NumericTextfield onChange={value => onChange({ type: 'wait', options: value })} {...newProps} />;
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
