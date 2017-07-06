import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import ScheduleEditor from './components/ScheduleEditor/ScheduleEditor';

class ScheduleInfo extends Component {
  state = {
    schedule: '* * * * *',
  };
  render() {
    const { scheduleName, submitSchedule, deleteSchedule } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Schedule"
          axiomNameValue={scheduleName}
        />
          <ScheduleEditor
            schedule={this.state.schedule}
            onSubmitSchedule={() => {
              submitSchedule(this.state.schedule);
            }}
            onScheduleChange={schedule => {
              this.setState({ schedule });
            }}
          />
      </div>
    );
  }
}

ScheduleInfo.propTypes = {
  scheduleName: PropTypes.string,
  deleteSchedule: PropTypes.func,
  submitSchedule: PropTypes.func,
};

export default ScheduleInfo;
