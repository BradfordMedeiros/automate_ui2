import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const NumericTextfield = ({ onChange }) => (
  <TextField
    floatingLabelText="ms"
    hintText="time to wait"
    onChange={(_, value) => {
      onChange(value);
    }}
  />
);

NumericTextfield.propTypes = {
  onChange: PropTypes.func,
};

export default NumericTextfield;
