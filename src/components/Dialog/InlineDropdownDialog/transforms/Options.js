import React from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';

const Options = ({ onChange, value }) => (
  <DropDownMenu
    style={{ width: 200 }}
    onChange={(_, __, value) => {
      onChange(value);
    }}
  >
    {value.map((v, index) => <MenuItem value={v} key={index}>{v}</MenuItem>)}
  </DropDownMenu>
  );

export default Options;
