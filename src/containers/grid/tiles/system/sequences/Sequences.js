import React, { Component } from 'react';
import { List, ListItem, Subheader } from 'material-ui';
import WithSequences from '../../../../../data/WithSequences';
import './style.css';

class Sequences extends Component {
  render() {
    return (
      <div className="system_sequences_outer">
        <div className="system_sequences_title">
          <Subheader>Sequences</Subheader>
        </div>
        <div className="system_sequences_inner">
          <WithSequences>
            {({ sequences }) => (
              <List>
                {sequences.map((sequence, index) =>
                  <ListItem
                    primaryTogglesNestedList={false}
                    style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                    key={index}
                    primaryText={<Subheader>{sequence.name}</Subheader>}
                  />,
                )}
              </List>
            )}
          </WithSequences>
        </div>
      </div>
    );
  }
}

export default Sequences;
