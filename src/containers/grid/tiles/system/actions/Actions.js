
import React, { Component } from 'react';
import {List, ListItem, Subheader } from 'material-ui';
import WithActions from '../../../../../data/WithActions';
import './style.css';


class Actions extends Component {
  render() {
    return (
      <div className="system_actions_outer">
        <div className="system_actions_title">
          <Subheader>Actions</Subheader>
        </div>
        <div className="system_actions_inner">
          <WithActions>
            {({ actions, executeAction }) => (
              <List>
                {actions.map((action,index) =>
                  <ListItem
                    primaryTogglesNestedList={false}
                    style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                    key={index}
                    onClick={() => executeAction(action.name)}
                    primaryText={<Subheader>{action.name}</Subheader>}
                  >
                  </ListItem>
                )}
              </List>
            )}
          </WithActions>
        </div>
      </div>
    )
  }
}

export default Actions;