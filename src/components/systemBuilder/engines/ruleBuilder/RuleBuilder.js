import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../.././../axiomBuilder/AxiomBuilder';
import RuleInfo from './components/RuleInfo';

class RuleBuilder extends Component {
  render() {
    const {
      rules,
      selectedIndex,
      onRuleChange,
      onRuleSelected,
      ruleName,
    } = this.props;

    return (
      <AxiomBuilder
        title="Rules"
        axioms={rules.map(rule => rule.name)}
        selectedIndex={selectedIndex}
        onAxiomSelected={onRuleSelected}
        onAxiomChange={onRuleChange}
      >
        <RuleInfo
          scheduleName={rules[selectedIndex].name}
          deleteSchedule={() =>{
            onRuleChange(undefined, undefined, ruleName)}
          }
        />
      </AxiomBuilder>
    );
  }
}

RuleBuilder.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onRuleSelected: PropTypes.func.isRequired,
  ruleName: PropTypes.string.isRequired,
  onRuleChange: PropTypes.func.isRequired,
};

export default RuleBuilder;

