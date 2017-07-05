import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import QuickAdd from './components/QuickAdd/QuickAdd';

class ScheduleInfo extends Component {
  state = {
    schedule: '* * * * *',
  };
  render() {
    const { scheduleName, deleteSchedule } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Schedule"
          axiomNameValue={scheduleName}
        />
          <QuickAdd
            schedule={this.state.schedule}
            onSubmitSchedule={() => {
              console.log('should add schedule');
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
};

export default ScheduleInfo;
