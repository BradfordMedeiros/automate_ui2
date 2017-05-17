import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../axiomBuilder/AxiomBuilder';
import ActionInfo from './components/ActionInfo';
import ActionHeader from './components/ActionHeader';
import Editor from './components/Editor';
import EditorControls from './components/EditorControls';
import ItemWrapper from './components/ItemWrapper';
import MqttValue from './components/mqtt/MqttValue';
import PublishMqttValue from './components/mqtt/PublishMqttValue';

const styles = {
  editor: {
    height: '60%',
    width: '100%',
    border: '1px solid black',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
};

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
            <ActionHeader actionType={'mqtt'} />
            <ItemWrapper>
              <MqttValue topic={'humidity'} />
            </ItemWrapper>
            <ItemWrapper>
              <PublishMqttValue topic={'humidity'} />
            </ItemWrapper>
            <ItemWrapper>
              <EditorControls
                editModeEnabled={this.state.editMode}
                onEditModeClicked={() => { this.setState({ editMode: !this.state.editMode }); }}
                onUploadClicked={() => { onUpload(this.state.code); }}
                onRevertClicked={() => {
                  this.setState({
                    code: actionCode,
                    editorKey: Math.random(),
                  });
                }}
              />
            </ItemWrapper>
            {this.state.editMode && (
              <ItemWrapper>
                <Editor
                  key={this.state.editorKey}
                  initialText={actionCode}
                  onTextChange={(code) => {
                    this.setState({
                      code,
                    });
                  }}
                  style={styles.editor}
                />
              </ItemWrapper>
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
  onUpload: PropTypes.func.isRequired,
};

export default ActionBuilder;
