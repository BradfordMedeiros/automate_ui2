import React, { Component, PropTypes } from 'react';
import { List, ListItem,  Subheader, makeSelectable } from 'material-ui';


const SelectableList = makeSelectable(List);

class SequenceTable extends Component{
  render() {
    const { sequences, onSequenceSelected, selectedIndex,  style } = this.props;
    return (
      <div style={style}>
        <SelectableList value={selectedIndex}>
          {sequences.map(
            (sequence, index) =>
              <ListItem
                key={index}
                value={index}
                onTouchTap={() => {
                  if (onSequenceSelected){
                    onSequenceSelected(sequence, index);
                  }
                }}
               >
                {sequence}
              </ListItem>
          )}
          <ListItem style={{ cursor: 'pointer', fontSize: '90%', color: 'rgb(180,180,180)' }}>Add New +</ListItem>
        </SelectableList>
      </div>
    );
  }
}

SequenceTable.propTypes = {
  sequences: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSequenceSelected: PropTypes.func,
  onClick: PropTypes.number,
};

export default SequenceTable;
