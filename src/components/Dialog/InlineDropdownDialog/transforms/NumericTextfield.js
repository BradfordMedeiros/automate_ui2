import React, { Component } from 'react';
import { TextField } from 'material-ui';

const NumericTextfield = ({ onChange }) => (
  <TextField
    onChange={(_, value) => {
      onChange(value);
    }}
  />
);
export default NumericTextfield;
