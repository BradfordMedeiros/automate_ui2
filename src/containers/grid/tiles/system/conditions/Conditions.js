import React, { Component } from 'react';
import { List, ListItem, Subheader, Divider, IconButton } from 'material-ui';
import { AvPlayArrow, AvPause } from 'material-ui/svg-icons';
import WithConditions from '../../../../../data/WithConditions';
import WithMqtt from '../../../../../data/WithMqtt';
import './style.css';

const createMqttTopic = condition_name => `/automate_sys/req/condtions/${condition_name}`;

class Conditions extends Component {
  handleOnTouchTap = (publish, conditionName, conditionState) => {
    const topicName = createMqttTopic(conditionName);
    const newState = conditionState === 'active' ? 'off' : 'on';
    console.error('publishing ', topicName);
    console.error('value ', newState);
    publish(topicName, newState);
  };
  render() {
    return (
      <div className="system_conditions_outer">
        <div className="system_conditions_title">
          <Subheader>Conditions</Subheader>
        </div>
        <div className="system_conditions_inner">
          <WithConditions>
            {({ conditions }) =>
              <WithMqtt>
                {(stuff, publish) => (
                  <List>
                    {conditions.map(
                    (condition, index) =>
                      <ListItem
                        primaryTogglesNestedList={false}
                        style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                        key={index}
                        primaryText={<Subheader>{condition.name}</Subheader>}
                      >
                        <div className="play_toggle">
                          <IconButton
                            onClick={() => this.handleOnTouchTap(publish, condition.name, condition.state)}
                          >
                            {condition.state === 'active' ? <AvPause /> : <AvPlayArrow />}
                          </IconButton>
                        </div>
                      </ListItem>,
                  )}
                  </List>
              )}
              </WithMqtt>
          }
          </WithConditions>
        </div>
      </div>
    );
  }
}

export default Conditions;
