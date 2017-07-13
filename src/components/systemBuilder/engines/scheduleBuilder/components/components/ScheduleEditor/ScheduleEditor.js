import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField, Subheader, Divider } from 'material-ui';
import RawCron from './components/RawCron';
import QuickOptions from './components/QuickOptions';
import FrequencyEditor from './components/FrequencyEditor/FrequencyEditor';

const styles = {
  topicValueStyle : {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    padding: 18,
    paddingBottom: 48,
    borderBottom: '2px ridge rgba(0, 0, 0, 0.14)',
  },
  detailStyle : {
    display: 'flex',
    flexGrow: 6,
  },
  detailStyle2 : {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: 'rgb(210,210,210)',
  }
};

class QuickAdd extends Component {
  state = {
    selectedOption: undefined,
  }
  render() {
    const {
      topic,
      onTopicChange,
      value,
      onValueChange,
      schedule,
      onScheduleChange,
      onSubmitSchedule,
    } = this.props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '85%' }}>
        <QuickOptions
          onScheduleSelected={selectedOption => {
            this.setState({ selectedOption });
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 5 }}>
          <div style={styles.topicValueStyle}>
            <Subheader>Mqtt Trigger</Subheader>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <TextField fullWidth value={topic} onChange={(_, topic) => onTopicChange(topic)} floatingLabelText={"Topic"} />
              <TextField fullWidth value={value} onChange={(_, value) => onValueChange(value)} floatingLabelText={"Value"} />
            </div>

            <div style={{ marginTop: 80, width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Subheader>Controls</Subheader>
              <Divider />
              <RaisedButton label="Submit" onClick={onSubmitSchedule} />
              <RaisedButton label="Pause/Play" />
            </div>
          </div>
          <div style={styles.detailStyle}>
            <FrequencyEditor
              type={this.state.selectedOption}
              schedule={schedule}
              onScheduleChange={onScheduleChange}
            />
          </div>
        </div>
        <div style={styles.detailStyle2} >
          <RawCron
            schedule={schedule}
            onScheduleChange={onScheduleChange}
          />
        </div>
      </div>
    );
  }
}

QuickAdd.propTypes = {
  schedule: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  onTopicChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
  onSubmitSchedule: PropTypes.func.isRequired,
};

export default QuickAdd;
