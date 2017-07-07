import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import ScheduleEditor from './components/ScheduleEditor/ScheduleEditor';

class ScheduleInfo extends Component {
  state = {
    schedule: '* * * * *',
    hasChanged: false,
  };
  render() {
    const { schedule, scheduleName, submitSchedule, deleteSchedule } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Schedule"
          axiomNameValue={scheduleName}
        />
          <ScheduleEditor
            schedule={this.state.hasChanged ? this.state.schedule : schedule}
            onSubmitSchedule={() => {
              submitSchedule(this.state.schedule);
              this.setState({
                hasChanged: false,
              })
            }}
            onScheduleChange={schedule => {
              this.setState({
                schedule,
                hasChanged: true,
              });
            }}
          />
      </div>
    );
  }
}

ScheduleInfo.propTypes = {
  schedule: PropTypes.string,
  scheduleName: PropTypes.string,
  deleteSchedule: PropTypes.func,
  submitSchedule: PropTypes.func,
};

export default ScheduleInfo;
