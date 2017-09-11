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
        {(rules.length > 0) && (
          <RuleInfo
            ruleName={rules[selectedIndex].name}
            topic={rules[selectedIndex].topic}
            value={rules[selectedIndex].value}
            strategy={rules[selectedIndex].strategy}
            rate={rules[selectedIndex].rate}
            conditionName={rules[selectedIndex].conditionName}
            submitRule={newRule => {
              onRuleChange(undefined, newRule);
            }}
            deleteRule={() =>{
              onRuleChange(undefined, undefined, ruleName)}
            }
          />
        )}
        {(rules.length === 0) && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              top: '30%',
              color: 'rgb(110,110,110)',
              fontFamily: 'monospace',
              fontSize: 48,
            }}>
            no rules
          </div>
        )}
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

