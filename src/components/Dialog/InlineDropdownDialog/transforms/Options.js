import React, { PropTypes } from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';

const Options = ({ onChange, value, selectedValue }) => (
  <DropDownMenu
    value={selectedValue}
    style={{ width: 200 }}
    onChange={(_, __, newValue) => {
      onChange(newValue);
    }}
  >
    {value.map((v, index) => <MenuItem value={v} primaryText={v} key={index.toString()} />)}
  </DropDownMenu>
  );

Options.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  selectedValue: PropTypes.string,
};

export default Options;
