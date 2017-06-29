import React, { Component } from 'react';
import ConditionBuilderComponent from '../../components/systemBuilder/conditionBuilder/ConditionBuilder';
import WithData from '../../data/WithData';

const WithConditions = WithData.polling.WithConditions;

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithConditions
        renderWhileLoading
      >
        {({ conditions, addCondition, deleteCondition, saveCondition }) => (
          <ConditionBuilderComponent
            conditions={conditions.map(condition => ({
              name: condition.name,
            }))}
            conditionName={conditions.length > 0 ? conditions[this.state.selectedIndex].name : 'No conditions'}
            selectedIndex={this.state.selectedIndex}
            onConditionChange={(newConditions, addedConditionName, deletedConditionName) => {
              if (addedConditionName) {
                addCondition(addedConditionName);
              }
              if (deletedConditionName) {
                deleteCondition(deletedConditionName);
              }
            }}
            onConditionSelected={(_, selectedIndex) => {
              this.setState({ selectedIndex });
            }}
            conditionType={conditions.length > 0 ? conditions[this.state.selectedIndex].type : ''}
            conditionCode={conditions.length > 0 ? conditions[this.state.selectedIndex].content : ''}
            onUpload={(code) => {
              saveCondition(conditions[this.state.selectedIndex].name, code);
            }}
          />
        )}
      </WithConditions>
    );
  }
}

export default ActionsBuilder;

