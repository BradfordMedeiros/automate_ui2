import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../axiomBuilder/AxiomBuilder';
import ActionInfo from './components/common/ActionInfo';
import ActionHeader from './components/common/ActionHeader';
import MqttFields from './components/mqtt/MqttFields';
import JavascriptsFields from './components/javascripts/JavascriptsFields';
import ExecutableFields from './components/executables/ExecutableFields';

class ActionBuilder extends Component {
  state = {
    editMode: false,
    code: undefined,
    editorKey: Math.random(),

  }
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
      <AxiomBuilder
        title="Actions"
        axioms={actions.map(action => action.name)}
        selectedIndex={selectedIndex}
        onAxiomChange={onActionChange}
        onAxiomSelected={onActionSelected}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <ActionInfo
            actionName={actionName}
            deleteAction={() => {
              const newActions = actions.slice().filter((action, index) => index !== selectedIndex);
              onActionChange(newActions, undefined, actionName);
            }}
          />
          <div style={{ width: '100%', height: '100%' }}>
            <ActionHeader actionType={actionType} />

            {(actionType === 'mqtt') && (
              <MqttFields
                topic="humidity"
              />
            )}

            {(actionType === 'javascript') && (
              <JavascriptsFields
                initialText={actionCode}
                upload={onUpload}
              />
            )}

            {(actionType === 'executable') && (
              <ExecutableFields
                initialText={actionCode}
                upload={onUpload}
              />
            )}
          </div>
        </div>
      </AxiomBuilder>
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
