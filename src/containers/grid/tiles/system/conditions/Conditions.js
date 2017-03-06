import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import WithConditions from '../../../../../data/WithConditions';
import WithMqtt from '../../../../../data/WithMqtt';

const createMqttTopic = condition_name => `/automate_sys/req/condtions/${condition_name}`;

class Conditions extends Component {
  handleOnTouchTap = (publish, conditionName, conditionState) => {
    const topicName = createMqttTopic(conditionName);
    const newState = conditionState === 'active' ? 'off' : 'on';
    console.error('publishing ', topicName );
    console.error('value ', newState);
    publish(topicName, newState);
  };
  render() {
    return (
      <WithConditions>
        {({ conditions }) =>
          <WithMqtt>
            {(stuff, publish) => (
              <List>
                {conditions.map(
                  (condition, index) =>
                    <ListItem
                      onClick={() => this.handleOnTouchTap(publish, condition.name, condition.state)}
                      key={index}
                    >
                      <div>name: {condition.name}</div>
                      <div>enabled: { condition.state }</div>
                    </ListItem>
                )}
              </List>
            )}
          </WithMqtt>
        }
      </WithConditions>
    )
  }
}

export default Conditions;