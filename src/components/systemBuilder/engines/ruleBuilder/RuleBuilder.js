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

    window.r = rules;
    return (
      <AxiomBuilder
        title="Rules"
        axioms={rules.map(rule => rule.name)}
        selectedIndex={selectedIndex}
        onAxiomSelected={onRuleSelected}
        onAxiomChange={onRuleChange}
      >
        <RuleInfo
          ruleName={rules[selectedIndex].name}
          topic={rules[selectedIndex].topic}
          value={rules[selectedIndex].value}
          strategy={rules[selectedIndex].strategy}
          rate={rules[selectedIndex].rate}
          conditionName={rules[selectedIndex].conditionName}
          deleteRule={() =>{
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

