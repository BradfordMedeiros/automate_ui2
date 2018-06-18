import React from 'react';
import PropTypes from 'prop-types';
import Action from './components/Action';
import Wait from './components/Wait';

const SequenceUnit = ({ type, options, deleteSelf }) => {
  switch (type) {
    case 'action': {
      return (
        <Action
          options={options}
          deleteSelf={deleteSelf}
        />
      );
    }
    case 'wait': {
      return (
        <Wait
          options={options}
          deleteSelf={deleteSelf}
        />
      );
    }
    default: {
      return null;
    }
  }
};

SequenceUnit.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.any,
  deleteSelf: PropTypes.func,
};

export default SequenceUnit;
