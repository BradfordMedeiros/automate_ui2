import React, { Component, PropTypes } from 'react';
import GenericBuilderWithFields from '../../common/GenericBuilderWithFields';

class ActionBuilder extends Component {
  render() {
    const {
      actions,
      actionCode,
      selectedIndex,
      onActionChange,
      onActionSelected,
      actionName,
      actionType,
      onUpload,
    } = this.props;

    return (
      <GenericBuilderWithFields
        axiomClass={'Actions'}
        actions={actions}
        selectedIndex={selectedIndex}
        onActionChange={onActionChange}
        onActionSelected={onActionSelected}
        actionName={actionName}
        actionCode={actionCode}
        actionType={actionType}
        onUpload={onUpload}
      />
    );
  }
}

ActionBuilder.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onActionChange: PropTypes.func.isRequired,
  onActionSelected: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  actionCode: PropTypes.string.isRequired,
  actionType: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default ActionBuilder;
