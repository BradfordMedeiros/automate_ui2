import React, { Component, PropTypes } from 'react';
import GenericBuilderWithFields from '../../common/GenericBuilderWithFields';

class StateBuilder extends Component {
  render() {
    const {
      states,
      stateCode,
      rate,
      selectedIndex,
      onStateChange,
      onStateSelected,
      stateName,
      stateType,
      onUpload,
    } = this.props;

    return (
      <GenericBuilderWithFields
        axiomClass={'States'}
        actions={states}
        selectedIndex={selectedIndex}
        onActionChange={onStateChange}
        onActionSelected={onStateSelected}
        actionName={stateName}
        actionCode={stateCode}
        actionType={stateType}
        onUpload={onUpload}
        showRate
        rate={rate}
      />
    );
  }
}

StateBuilder.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onStateSelected: PropTypes.func.isRequired,
  stateName: PropTypes.string.isRequired,
  stateCode: PropTypes.string.isRequired,
  rate: PropTypes.number,
  stateType: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default StateBuilder;

