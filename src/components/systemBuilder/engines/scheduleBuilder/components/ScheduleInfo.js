import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import QuickAdd from './components/QuickAdd';

class ScheduleInfo extends Component {
  render() {
    const { scheduleName, deleteSchedule } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Schedule"
          axiomNameValue={scheduleName}
        />
          <QuickAdd />
      </div>
    );
  }
}

ScheduleInfo.propTypes = {
  scheduleName: PropTypes.string,
  deleteSchedule: PropTypes.func,
};

export default ScheduleInfo;
