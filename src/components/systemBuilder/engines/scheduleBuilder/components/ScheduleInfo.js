import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';

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
      </div>
    );
  }
}

ScheduleInfo.propTypes = {
  scheduleName: PropTypes.string,
  deleteSchedule: PropTypes.func,
};

export default ScheduleInfo;
