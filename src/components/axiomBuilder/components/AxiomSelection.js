import React, { Component, PropTypes } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui';
import InlineTextfieldDialog from '../../Dialog/InlineTextfieldDialog';

const SelectableList = makeSelectable(List);

class AxiomSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      axiomToAdd: undefined,
    };
  }
  closeDialog = () => this.setState({ dialogOpen: false });

  render() {
    const { axioms, onAxiomSelected, onAxiomChange, selectedIndex, style } = this.props;
    return (
      <div style={style}>
        <InlineTextfieldDialog
          open={this.state.dialogOpen}
          closeDialog={this.closeDialog}
          onOkClick={() => {
            if (onAxiomChange) {
              const newAxioms = axioms.slice();
              newAxioms.push(this.state.axiomToAdd);
              onAxiomChange(newAxioms, this.state.axiomToAdd);
            }
            this.setState({
              axiomToAdd: undefined,
            });
            this.closeDialog();
          }}
          onChange={(_, axiomName) => {
            this.setState({
              axiomToAdd: axiomName,
            });
          }}
          hintText={'axiom name'}
          text={'Axiom to add'}
        />
        <SelectableList value={selectedIndex}>
          {axioms.map(
            (axiom, index) =>
              (<ListItem
                key={index} //eslint-disable-line
                value={index}
                onTouchTap={() => {
                  if (onAxiomSelected) {
                    onAxiomSelected(axiom, index);
                  }
                }}
              >
                {axiom}
              </ListItem>),
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

AxiomSelection.propTypes = {
  axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAxiomSelected: PropTypes.func,
  onAxiomChange: PropTypes.func,
  selectedIndex: PropTypes.number,
  style: PropTypes.object,
};

export default AxiomSelection;
