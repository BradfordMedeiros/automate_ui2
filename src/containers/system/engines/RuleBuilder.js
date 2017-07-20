import React, { Component } from 'react';
import RuleBuilderComponent from '../../../components/systemBuilder/engines/ruleBuilder/RuleBuilder';
import WithData from '../../../data/WithData';

const WithRules = WithData.polling.WithRules;

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
    selectedName: 'other',
  };

  render() {
    return (
      <WithRules
        renderWhileLoading
      >
        {({ rules, addRule, deleteRule }) => (
          <RuleBuilderComponent
            rules={rules}
            selectedIndex={this.state.selectedIndex}
            onRuleSelected={(selectedName, selectedIndex) => {
              this.setState({
                selectedIndex,
                selectedName,
              })
            }}
            ruleName={this.state.selectedName}
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
                console.log('delete rule: ', deletedRuleName);
                //console.error('delete:--- ', deletedScheduleName);
                deleteRule(deletedRuleName);
              }


            }}
          />
        )}
      </WithRules>
    );
  }
}

export default ActionsBuilder;

