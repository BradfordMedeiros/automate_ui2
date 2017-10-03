import React, { Component } from 'react';
import { List, ListItem, Subheader, IconButton } from 'material-ui';
import { AvPlayArrow, AvPause } from 'material-ui/svg-icons';
import WithData from '../../../../../../data/WithData';
import './style.css';

const WithMqtt = WithData.pubsub.WithMqtt;
const WithConditions = WithData.polling.WithConditions;

const createMqttTopic = conditionName => `/automate_sys/req/condtions/${conditionName}`;

class Conditions extends Component {
  handleOnTouchTap = (publish, conditionName, conditionState) => {
    /*const topicName = createMqttTopic(conditionName);
    const newState = conditionState === 'active' ? 'off' : 'on';
    publish(topicName, newState);*/
    console.error('this is unimplemented currently');
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
              (<WithMqtt>
                {(stuff, publish) => (
                  <List>
                    {conditions.map(
                    condition =>
                      (<ListItem
                        primaryTogglesNestedList={false}
                        style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                        key={condition.name}
                        primaryText={<Subheader>{condition.name}</Subheader>}
                      >
                        <div className="play_toggle">
                          <IconButton
                            onClick={() =>
                              this.handleOnTouchTap(publish, condition.name, condition.state)}
                          >
                            {condition.state === 'active' ? <AvPause /> : <AvPlayArrow />}
                          </IconButton>
                        </div>
                      </ListItem>),
                  )}
                  </List>
              )}
              </WithMqtt>)
          }
          </WithConditions>
        </div>
      </div>
    );
  }
}

export default Conditions;
