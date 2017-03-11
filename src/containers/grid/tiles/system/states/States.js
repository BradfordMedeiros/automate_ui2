
import React, { Component } from 'react';
import {List, ListItem, Subheader } from 'material-ui';
import WithStates from '../../../../../data/WithStates';
import './style.css';


class States extends Component {
  render() {
    return (
      <div className="system_states_outer">
        <div className="system_states_title">
          <Subheader>States</Subheader>
        </div>
        <div className="system_states_inner">
        <WithStates>
          {({ states }) => (
            <List>
              {states.map((state,index) =>
                  <ListItem
                    primaryTogglesNestedList={false}
                    style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                    key={index}
                    primaryText={<Subheader>{state.name}</Subheader>}
                  >
                  </ListItem>
              )}
            </List>
          )}
        </WithStates>
        </div>
      </div>
    )
  }
}

export default States;