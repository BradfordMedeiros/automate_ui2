import React, { Component } from 'react';
import WithConditions from '../../../data/WithConditions';
import {List, ListItem} from 'material-ui/List';



class Conditions extends Component {
  render() {
    return (
      <WithConditions>
        {({ conditions }) =>
          <List>
            {conditions.map(
              (condition, index) =>
                <ListItem key={index}>
                  <div>name: {condition.name}</div>
                  <div>enabled: { condition.state }</div>
                </ListItem>
            )}
          </List>
        }
      </WithConditions>
    )
  }
}

export default Conditions;