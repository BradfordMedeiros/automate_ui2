import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GenericOverlay from '../overlay/GenericOverlay';
import ModeSelector from './components/ModeSelector';
import InputMode from './components/InputMode';
import OutputMode from './components/OutputMode';

/*
 Mode: <input/output>

 digital:

 input mode:
 sampling rate <Number textfield>
 topic: <topic title>
 value: (is the sample)

 output mode:
 topic: <topic title>
 value: <high or low>
 */

const ProtoCircuitProgrammer = ({
  mode,
  isChanged,
  onModeChange,
  settings,
  onSettingsChange,
}) => (
<GenericOverlay title="ProtoCircuit Programmer">
  <div style={{ background: '#373737', width: '100%', height: '100%' }}>
    <ModeSelector style={{ height: 95 }} mode={mode} onModeChange={onModeChange} />
    <RaisedButton primary disabled={!isChanged} fullWidth label="Submit Changes" />
    <div style={{ position: 'absolute', height: 'calc(100% - 95px)', width: '100%', overflow: 'auto' }}>
      {(mode === 'input') && <InputMode settings={settings} onSettingsChange={onSettingsChange} />}
      {(mode === 'output') && <OutputMode settings={settings} onSettingsChange={onSettingsChange} />}
    </div>
  </div>
</GenericOverlay>
);

ProtoCircuitProgrammer.propTypes = {
  mode: PropTypes.string,
  onModeChange: PropTypes.func,
  settings: PropTypes.object,
  onSettingsChange: PropTypes.func,
  isChanged: PropTypes.bool,
};

export default ProtoCircuitProgrammer;