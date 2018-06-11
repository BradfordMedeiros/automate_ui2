import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const NumericTextfield = ({ onChange }) => (
  <TextField
    label="ms"
    helperText="time to wait"
    onChange={(_, value) => {
      onChange(value);
    }}
  />
);

NumericTextfield.propTypes = {
  onChange: PropTypes.func,
};

export default NumericTextfield;
