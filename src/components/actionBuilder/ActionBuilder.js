import React, {  PropTypes } from 'react';
import AxiomBuilder from '../axiomBuilder/AxiomBuilder';
import CodeEditor from '../codeEditor/CodeEditor';
import ActionInfo from './components/ActionInfo';

const ActionBuilder = ({ actions, selectedIndex, onActionChange, onActionSelected, actionName }) => (
  <AxiomBuilder
    title="Actions"
    axioms={actions}
    selectedIndex={selectedIndex}
    onAxiomChange={onActionChange}
    onAxiomSelected={onActionSelected}
  >
    <div style={{ width: '100%', height: '90%', display: 'flex', position: 'absolute', background: 'blue', border: '1px solid red', flexDirection: 'column' }}>
      <ActionInfo
        actionName={actionName}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <CodeEditor style={{ position: 'absolute', height: '70%', background: 'green' }} />
        <div className="actionSomething" style={{ pointerEvents: 'none', position: 'absolute', height: '30%', background: 'black' }} />
      </div>
    </div>
  </AxiomBuilder>
);

ActionBuilder.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onActionChange: PropTypes.func.isRequired,
  onActionSelected: PropTypes.func.isRequired,
  actionName: PropTypes.string,
};

export default ActionBuilder;
