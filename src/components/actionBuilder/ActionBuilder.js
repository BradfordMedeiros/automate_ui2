import React, { Component, PropTypes } from 'react';
import { Subheader } from 'material-ui';
import AxiomBuilder from '../axiomBuilder/AxiomBuilder';
import ActionInfo from './components/ActionInfo';
import Editor from './Editor';
import { RaisedButton } from 'material-ui';

class ActionBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined,
      editMode: false,
    };
  }

  renderCell = (content, style) => {
    return (
      <div
      className="actionField"
      style={{
        fontSize: 18,
        padding: 18,
        paddingLeft: 24,
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
        color: 'rgb(210,210,210)',
        ...style,
      }}
    >
        {content}
      </div>
    )
  };
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
          <div
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {this.renderCell([
              <div style={{ display: 'inline', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="typeLabel" style={{ display: 'inline' }}>Type: </div>
                <div className="typeValue" style={{ display: 'inline', color: 'white', paddingLeft: 20 }}>JavaScript</div>
              </div>,
            ], { background: 'rgb(150, 30, 20)' })}

            {this.renderCell(
              [<div>
                <div
                  style={{ display: 'inline', cursor: 'pointer' }}
                  onClick={() => {
                      this.setState({editMode: !this.state.editMode})
                  }}>
                  {this.state.editMode ? 'Hide Script ' : 'View Script'}
                </div>
                <RaisedButton
                  label="Upload"
                  style={{ marginLeft: 40 }}
                  onClick={() => {
                    onUpload(this.state.code);
                  }}
                />
                <RaisedButton
                  label="Download"
                />
              </div>,
              ]
            )}

            {this.state.editMode && this.renderCell(
              <Editor
                initialText={actionCode}
                onTextChange={code => {
                  this.setState({
                    code,
                  });
                }}
                style={{
                  height: '60%',
                  width: '100%',
                  border: '1px solid black',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                }}
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
  onUpload: PropTypes.func.isRequired,
};

export default ActionBuilder;
