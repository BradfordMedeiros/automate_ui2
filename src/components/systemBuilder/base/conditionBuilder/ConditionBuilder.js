import React, { Component, PropTypes } from 'react';
import GenericBuilderWithFields from '../../common/GenericBuilderWithFields';

class ConditionBuilder extends Component {
  render() {
    const {
      conditions,
      conditionCode,
      selectedIndex,
      onConditionChange,
      onConditionSelected,
      conditionName,
      conditionType,
      onUpload,
    } = this.props;

    return (
      <GenericBuilderWithFields
        axiomClass={'Conditions'}
        actions={conditions}
        selectedIndex={selectedIndex}
        onActionChange={onConditionChange}
        onActionSelected={onConditionSelected}
        actionName={conditionName}
        actionCode={conditionCode}
        actionType={conditionType}
        onUpload={onUpload}
      />
    );
  }
}

ConditionBuilder.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onConditionSelected: PropTypes.func.isRequired,
  conditionName: PropTypes.string.isRequired,
  conditionCode: PropTypes.string.isRequired,
  conditionType: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default ConditionBuilder;

