import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import RawCron from './components/RawCron/RawCron';
import QuickOptions from './components/QuickOptions';
import MqttOptions from './components/MqttOptions';
import FrequencyEditor from './components/FrequencyEditor/FrequencyEditor';
import './style.css';

class QuickAdd extends Component {
  state = {
    selectedOption: 'monthly',
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
      <div style={{ background: 'blue',  flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <QuickOptions
            style={{ width: '100%', height: 52 }}
            selectedOption={this.state.selectedOption}
            onScheduleSelected={selectedOption => {
              this.setState({ selectedOption });
            }}
          />
          <div style={{ display: 'flex', flexGrow: 1, background: 'red', border: '1px solid orange' }}>
            <MqttOptions
              style={{ width: 340 }}
              topic={topic}
              onTopicChange={onTopicChange}
              value={value}
              onValueChange={onValueChange}
              onSubmitSchedule={onSubmitSchedule}
            />
            <FrequencyEditor
              style={{ flexGrow: 1 }}
              type={this.state.selectedOption}
              schedule={schedule}
              onScheduleChange={onScheduleChange}
            />
          </div>
          <RawCron schedule={schedule} onScheduleChange={onScheduleChange} />
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
