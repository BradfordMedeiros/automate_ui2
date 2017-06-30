import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../.././../axiomBuilder/AxiomBuilder';

class ConditionBuilder extends Component {
  render() {
    const {
      schedules,
      conditionCode,
      selectedIndex,
      onConditionChange,
      onScheduleSelected,
      scheduleName,
      conditionType,
      onUpload,
    } = this.props;

    return (
      <AxiomBuilder
        title="Schedules"
        axioms={schedules}
        selectedIndex={selectedIndex}
        onAxiomSelected={onScheduleSelected}
        onAxiomChange={() => { }}
      >
        <div>
          <div>{scheduleName}</div>
          <div>{schedules[selectedIndex]}</div>
        </div>
      </AxiomBuilder>
    );
  }
}

ConditionBuilder.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onScheduleSelected: PropTypes.func.isRequired,
  conditionName: PropTypes.string.isRequired,
  conditionCode: PropTypes.string.isRequired,
  conditionType: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default ConditionBuilder;

