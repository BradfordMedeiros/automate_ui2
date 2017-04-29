import React from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';

const Options = ({ onChange, value, selectedValue }) => (
  <DropDownMenu
    value={selectedValue}
    style={{ width: 200 }}
    onChange={(_, __, value) => {
      onChange(value);
    }}
  >
    {value.map((v, index) => <MenuItem value={v} primaryText={v} key={index} />)}
  </DropDownMenu>
  );

export default Options;
