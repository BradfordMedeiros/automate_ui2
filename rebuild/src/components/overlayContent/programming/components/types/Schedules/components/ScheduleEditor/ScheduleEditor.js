import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import RawCron from './components/RawCron/RawCron';
import QuickOptions from './components/QuickOptions/QuickOptions';
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
            selectedOption={this.state.selectedOption}
            onScheduleSelected={selectedOption => {
              this.setState({ selectedOption });
            }}
          />
          <div style={{ display: 'flex', flexGrow: 1, background: 'rgb(30,30,30)', justifyContent: 'center', alignItems: 'center' }}>
            <RawCron schedule={schedule} onScheduleChange={onScheduleChange} />
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
