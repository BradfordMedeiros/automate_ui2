import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import RawCron from './components/RawCron';
import QuickOptions from './components/QuickOptions';

const styles = {
  topicValueStyle : {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: 32,
    paddingBottom: 32,
    boxShadow: '0px 0px 2px 1px black',
    marginLeft: 10,
    alignItems: 'center',
  },
  detailStyle : {
    display: 'flex',
    flexGrow: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: 'rgb(210,210,210)',
    boxShadow: '0px 1px 10px 1px black inset',
  },
  detailStyle2 : {
    display: 'flex',
    flexGrow: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: 'rgb(210,210,210)',
    boxShadow: '0px 1px 10px 1px black',
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
      <div>
        <QuickOptions
          onScheduleChange={onScheduleChange}
        />

        <div style={{ display: 'flex', flexDirection: 'row'  }}>
          <div style={styles.topicValueStyle}>
            <TextField value={topic} onChange={(_, topic) => onTopicChange(topic)} floatingLabelText={"Topic"} />
            <TextField value={value} onChange={(_, value) => onValueChange(value)} floatingLabelText={"Value"} />
          </div>
          <div style={styles.detailStyle}>
            Every <TextField /> hour of the day
          </div>
        </div>
        <div style={styles.detailStyle2} >
          <RawCron
            schedule={schedule}
            onScheduleChange={onScheduleChange}
          />
        </div>
        <RaisedButton primary="Submit" label="Submit" fullWidth onClick={onSubmitSchedule} />
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
