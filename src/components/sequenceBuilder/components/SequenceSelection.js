import React, { Component, PropTypes } from 'react';
import { List, ListItem, Subheader, makeSelectable } from 'material-ui';
import InlineTextfieldDialog from '../../Dialog/InlineTextfieldDialog';

const SelectableList = makeSelectable(List);

class SequenceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      sequenceToAdd: undefined,
    };
  }
  closeDialog = () => this.setState({ dialogOpen: false });

  render() {
    const { sequences, onSequenceSelected, onSequenceChange, selectedIndex, style } = this.props;
    return (
      <div style={style}>
        <InlineTextfieldDialog
          open={this.state.dialogOpen}
          closeDialog={this.closeDialog}
          onOkClick={() => {
            if (onSequenceChange) {
              const newSequences = sequences.slice();
              newSequences.push(this.state.sequenceToAdd);
              onSequenceChange(newSequences);
            }
            this.setState({
              sequenceToAdd: undefined,
            });
            this.closeDialog();
          }}
          onChange={(_, sequenceName) => {
            this.setState({
              sequenceToAdd: sequenceName,
            });
          }}
          hintText={'sequence name'}
          text={'Sequence to add'}
        />
        <SelectableList value={selectedIndex}>
          {sequences.map(
            (sequence, index) =>
              <ListItem
                key={index}
                value={index}
                onTouchTap={() => {
                  if (onSequenceSelected) {
                    onSequenceSelected(sequence, index);
                  }
                }}
              >
                {sequence}
              </ListItem>,
          )}
          <ListItem
            onTouchTap={() => this.setState({ dialogOpen: true })}
            style={{ cursor: 'pointer', fontSize: '90%', color: 'rgb(180,180,180)' }}
          >
            Add New +
          </ListItem>
        </SelectableList>
      </div>
    );
  }
}

SequenceTable.propTypes = {
  sequences: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSequenceSelected: PropTypes.func,
  onSequenceChange: PropTypes.func,
  onClick: PropTypes.number,
};

export default SequenceTable;
