import React, { PropTypes } from 'react';
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

const handleChange = ({ oldSettings, newSetting, value, onSettingsChange }) => {
  const newSettings = {...oldSettings};
  newSettings[newSetting] = value;
  onSettingsChange(newSettings);
};

const OutputMode = ({ settings, onSettingsChange }) => (
  <div>
    <ItemWrapper style={itemWrapperStyle}>
      <div style={{ width: 160, display: 'flex', justifyContent: 'center' }}>Topic</div>
      <TextField
        value={settings.topic}
        onChange={(_, newTopic) => {
          if (onSettingsChange){
            handleChange({ oldSettings: settings, newSetting: 'topic', value: newTopic, onSettingsChange })
          }
        }}
        style={textfieldStyle}
        floatingLabelText="Topic"
      />
    </ItemWrapper>
  </div>
);

OutputMode.propTypes = {
  settings: PropTypes.object,
  onSettingsChange: PropTypes.func,
};

export default OutputMode;