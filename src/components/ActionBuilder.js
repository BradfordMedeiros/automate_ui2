import React, {  PropTypes } from 'react';
import AxiomBuilder from './axiomBuilder/AxiomBuilder';

const ActionBuilder = ({ actions, selectedIndex, onActionChange, onActionSelected }) => (
  <AxiomBuilder
    title="Actions"
    axioms={actions}
    selectedIndex={selectedIndex}
    onAxiomChange={onActionChange}
    onAxiomSelected={onActionSelected}
  />
);

ActionBuilder.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onActionChange: PropTypes.func.isRequired,
  onActionSelected: PropTypes.func.isRequired,
};

export default ActionBuilder;
/*

 axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
 title: PropTypes.string.isRequired,
 selectedIndex: PropTypes.number.isRequired,
 onAxiomSelected: PropTypes.func,
 onAxiomChange: PropTypes.func,
 children: PropTypes.node,
 */