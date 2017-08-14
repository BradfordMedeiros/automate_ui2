import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ItemWrapper from '../../systemBuilder/common/components/ItemWrapper';

const textfieldStyle = {
  paddingLeft: 24,
  top: -12,
  width: 400,
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

const InputMode = ({ settings, onSettingsChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <ItemWrapper style={itemWrapperStyle}>
      Topic
        <TextField
          style={textfieldStyle}
          floatingLabelText="Topic"
          onChange={(_, newTopic) => {
            if (onSettingsChange){
              handleChange({ oldSettings: settings, newSetting: 'topic', value: newTopic, onSettingsChange })
            }
          }}
        />
    </ItemWrapper>
    <ItemWrapper style={itemWrapperStyle}>
      Sampling Rate
        <TextField
          style={textfieldStyle}
          floatingLabelText="Sampling Rate"
          onChange={(_, newSampleRate) => {
            handleChange({ oldSettings: settings, newSetting: 'sampleRate', value: newSampleRate, onSettingsChange })
          }}
        />
    </ItemWrapper>
  </div>
);

InputMode.propTypes = {
  settings: PropTypes.object,
  onSettingsChange: PropTypes.func,
};

export default InputMode;