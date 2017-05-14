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
            {({ sequences, executeSequence }) => (
              <List>
                {sequences.map(sequence =>
                  (<ListItem
                    primaryTogglesNestedList={false}
                    style={{ borderBottom: '1px solid rgb(40,40,40)' }}
                    key={sequence.name}
                    primaryText={<Subheader>{sequence.name}</Subheader>}
                    onTouchTap={() => {
                      executeSequence(sequence.name);
                    }}
                  />),
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
