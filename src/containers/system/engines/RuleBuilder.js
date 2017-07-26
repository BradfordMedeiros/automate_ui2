import React, { Component } from 'react';
import RuleBuilderComponent from '../../../components/systemBuilder/engines/ruleBuilder/RuleBuilder';
import WithData from '../../../data/WithData';

const WithRules = WithData.polling.WithRules;

const getSelectedIndex = (rules, selectedIndex) => {
  if (selectedIndex < rules.length){
    return selectedIndex;
  }
  return 0;
};


class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };

  render() {
    return (
      <WithRules
        renderWhileLoading
      >
        {({ rules, addRule, deleteRule }) => {
          const selectedRule = rules[getSelectedIndex(rules, this.state.selectedIndex)];

          return (
            <RuleBuilderComponent
              rules={rules}
              selectedIndex={this.state.selectedIndex}
              onRuleSelected={(selectedName, selectedIndex) => {
                this.setState({
                  selectedIndex,
                  selectedName,
                })
              }}
              ruleName={selectedRule ? selectedRule.name : ''}
              onRuleChange={(newRules, addedRule, deletedRuleName) => {
                if (addedRule) {
                  if(typeof(addedRule) === typeof('')){
                    addRule(addedRule);
                  }else {
                    const {conditionName, rate, ruleName, strategy, topic, value} = addedRule;
                    addRule(ruleName, conditionName, strategy, rate, topic, value);
                  }
                }
                if (deletedRuleName) {
                  deleteRule(deletedRuleName);
                }


              }}
            />
          )
        }}
      </WithRules>
    );
  }
}

export default ActionsBuilder;

