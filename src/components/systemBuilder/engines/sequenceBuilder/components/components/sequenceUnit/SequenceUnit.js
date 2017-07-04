import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
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
