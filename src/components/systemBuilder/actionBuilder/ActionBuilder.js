import React, { Component, PropTypes } from 'react';
import GenericBuilder from '../common/GenericBuilder';
import ExecutableFields from './components/executables/ExecutableFields';
import JavascriptsFields from './components/javascripts/JavascriptsFields';
import MqttFields from './components/mqtt/MqttFields';

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
      <GenericBuilder
        axiomClass={'Actions'}
        axioms={actions}
        onAxiomChange={onActionChange}
        selectedIndex={selectedIndex}
        onAxiomSelected={onActionSelected}
        axiomName={actionName}
        axiomType={actionType}
      >
        <div>
          {(actionType === 'executable') && (
            <ExecutableFields
              initialText={actionCode}
              upload={onUpload}
            />
          )}
          {(actionType === 'javascript') && (
            <JavascriptsFields
              initialText={actionCode}
              upload={onUpload}
            />
          )}
          {(actionType === 'mqtt') && (
            <MqttFields
              topic="humidity"
            />
          )}
        </div>
      </GenericBuilder>
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
