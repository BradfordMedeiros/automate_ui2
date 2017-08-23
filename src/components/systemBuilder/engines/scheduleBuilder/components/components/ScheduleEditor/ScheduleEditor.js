import React, { Component, PropTypes } from 'react';
import RawCron from './components/RawCron';
import QuickOptions from './components/QuickOptions';
import MqttOptions from './components/MqttOptions';
import FrequencyEditor from './components/FrequencyEditor/FrequencyEditor';
import { Desktop, Mobile } from '../../../../../../../util/ViewportSizing';

const styles = {
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
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Desktop>
          <QuickOptions
            style={{ width: '100%', height: 52 }}
            selectedOption={this.state.selectedOption}
            onScheduleSelected={selectedOption => {
              this.setState({ selectedOption });
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row', top: 52, position: 'absolute', width: '100%', height: 'calc(100% - 152px)' }}>
            <MqttOptions
              style={{ width: 340, position: 'absolute', height: '100%' }}
              topic={topic}
              onTopicChange={onTopicChange}
              value={value}
              onValueChange={onValueChange}
              onSubmitSchedule={onSubmitSchedule}
            />
            <FrequencyEditor
              style={{ position: 'absolute', height: '100%',  left: 340, right: 0 }}
              type={this.state.selectedOption}
              schedule={schedule}
              onScheduleChange={onScheduleChange}
            />
          </div>
          <RawCron
            style={{ height: 100, position: 'absolute', width: '100%', bottom: 0 }}
            schedule={schedule}
            onScheduleChange={onScheduleChange}
          />
        </Desktop>
        <Mobile>
          <div>need to do</div>
        </Mobile>

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
