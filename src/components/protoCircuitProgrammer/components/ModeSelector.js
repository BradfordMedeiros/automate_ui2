import React, { PropTypes } from 'react';
import RadioButton from 'material-ui/RadioButton';

const ModeSelector = ({ mode, onModeChange, style}) => (
  <div style={style}>
    <div style={{ display: 'flex', justifyContent: 'center', background: '#272727', color: 'whitesmoke', padding: 8 }}>MODE</div>
    <div style={{ display: 'flex', justifyContent: 'center', boxShadow: '0px 0px 1px 0.5px black', background: '#272727' }}>
      <div style={{ padding: 18, }}>
        <RadioButton
          label="input"
          checked={mode === 'input'}
          onCheck={() => {
            onModeChange('input');
          }}
        />
      </div>
      <div style={{ padding: 18 }}>
        <RadioButton
          label="output"
          checked={mode === 'output'}
          onCheck={() => {
            onModeChange('output');
          }}
        />
      </div>
    </div>
  </div>
);

ModeSelector.propTypes = {
  mode: PropTypes.string,
  onModeChange: PropTypes.func,
  style: PropTypes.object,
};

export default ModeSelector;