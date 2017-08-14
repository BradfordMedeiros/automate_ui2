import React from 'react';
import TextField from 'material-ui/TextField';
import ItemWrapper from '../../systemBuilder/common/components/ItemWrapper';

const textfieldStyle = {
  paddingLeft: 24,
  width: 400,
  top: -12,
};

const itemWrapperStyle = {
  fontSize: 24,
  padding: 48,
  display: 'flex',
  alignItems: 'center',
};

const OutputMode = () => (
  <div>
    <ItemWrapper style={itemWrapperStyle}>
      Topic <TextField style={textfieldStyle} floatingLabelText="Topic" />
    </ItemWrapper>
  </div>
);

export default OutputMode;