import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../axiomBuilder/AxiomBuilder';
import CodeEditor from '../codeEditor/CodeEditor';
import ActionInfo from './components/ActionInfo';
import { RaisedButton } from 'material-ui';

class ActionBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined,
    };
  }

  render() {
    const { actions, actionCode, selectedIndex, onActionChange, onActionSelected, actionName, onUpload } = this.props;
    return (
      <AxiomBuilder
        title="Actions"
        axioms={actions}
        selectedIndex={selectedIndex}
        onAxiomChange={onActionChange}
        onAxiomSelected={onActionSelected}
      >
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <ActionInfo
            actionName={actionName}
            deleteAction={() => {
              const newActions = actions.slice().filter((action, index) => index !== selectedIndex);
              onActionChange(newActions, undefined, actionName);
            }}
          />
          <div style={{ display: 'flex', height: '50%', flexDirection: 'column' }}>
            <div
              style={{
                boxShadow: '0px 0px 2px 0.1px black',
                margin: 20,
              }}
            >
              <div
                style={{
                  height: 50,
                  fontSize: 35,
                  color: '#7e7979',
                  margin: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >Editor</div>
              <CodeEditor
                onTextChange={(code) => {
                  this.setState({
                    code,
                  });
                }}
                style={{ height: '100%', background: '#303030' }}
                initialText={actionCode}
              />
            </div>
            <RaisedButton
              style={{ margin: 42, marginTop: -15, background: 'red' }}
              buttonStyle={{ background: '#303030' }}
              label="Upload"
              labelColor="rgb(126, 121, 121)"
              onTouchTap={() => onUpload(this.state.code)}
            />
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
  onCodeChange: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default ActionBuilder;
