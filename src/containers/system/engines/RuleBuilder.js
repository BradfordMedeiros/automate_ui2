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
                console.log('added rule: ', addedRule);
                console.log('added schedule ------ ', addedRule);
                if(typeof(addedRule) === typeof('')){
                  addRule(addedRule);
                }else {
                  //const { name, schedule, topic, value } = addedSchedule;
                  //addedRule(name, schedule, topic, value);
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

