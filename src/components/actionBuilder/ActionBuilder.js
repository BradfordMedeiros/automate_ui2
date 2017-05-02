import React, { Component,  PropTypes } from 'react';
import AxiomBuilder from '../axiomBuilder/AxiomBuilder';
import CodeEditor from '../codeEditor/CodeEditor';
import ActionInfo from './components/ActionInfo';
import { RaisedButton } from 'material-ui';

class ActionBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeEditorText: 'hello',
    };
  }
  render() {
    const {actions, actionCode, selectedIndex, onActionChange, onActionSelected, actionName} = this.props;
    return (
      <AxiomBuilder
        title="Actions"
        axioms={actions}
        selectedIndex={selectedIndex}
        onAxiomChange={onActionChange}
        onAxiomSelected={onActionSelected}
      >
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ActionInfo
            actionName={actionName}
            deleteAction={() => {
              const newActions = actions.slice().filter((action, index) =>  index !== selectedIndex);
              onActionChange(newActions, undefined, actionName);
            }}
          />
          <div style={{display: 'flex', height: '50%', flexDirection: 'column'}}>
            <CodeEditor
              onTextChange={codeEditorText => {
                console.error('on text change ', codeEditorText)
                this.setState({
                  codeEditorText,
                })
              }}
              style={{height: '100%', background: '#303030'}}
              initialText={actionCode}
            />
            <RaisedButton primary label="Upload" />
          </div>
        </div>
      </AxiomBuilder>
    )
  }
}

ActionBuilder.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onActionChange: PropTypes.func.isRequired,
  onActionSelected: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  actionCode: PropTypes.string.isRequired,
};

export default ActionBuilder;
