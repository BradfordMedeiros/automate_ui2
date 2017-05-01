import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import AxiomHeader from '../../axiomBuilder/AxiomHeader';
import InlineDropdownDialog from '../../Dialog/InlineDropdownDialog/InlineDropdownDialog';

class SequenceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
    };
  }
  openDialog = () => {
    this.setState({
      showAddDialog: true,
    });
  }
  closeDialog = () => {
    this.setState({
      showAddDialog: false,
    });
  }
  render() {
    const { actions, metaActions, sequenceName, onChange, deleteSequence, style } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <InlineDropdownDialog
          open={this.state.showAddDialog}
          closeDialog={this.closeDialog}
          onChange={(newAction) => {
            const newActions = actions.slice();
            newActions.push(newAction);
            onChange(newActions, newAction);
          }}
          onOkClick={this.closeDialog}
          options={metaActions}
        />
        <AxiomHeader
          deleteSequence={deleteSequence}
          axiomName="Sequence"
          axiomNameValue={sequenceName}
        />
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false} onCellClick={x => console.error(x)} >
            {actions.map((action, index) => (
              <TableRow key={index}>
                <TableRowColumn>{action.name}</TableRowColumn>
                <TableRowColumn>{action.value}</TableRowColumn>
                <TableRowColumn
                  onTouchTap={() => {
                    const newActions = actions.slice(0, Math.max(index, 0)).concat(actions.slice(index + 1));
                    onChange(newActions);
                  }}
                  style={{ fontSize: 25, cursor: 'pointer' }}
                >
                  &times;
                </TableRowColumn>
              </TableRow>
            ))}
            <TableRow>
              <TableRowColumn
                onTouchTap={this.openDialog}
                style={{ cursor: 'pointer' }}
              >
                + Add New
              </TableRowColumn>
              <TableRowColumn />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

SequenceInfo.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
  metaActions: PropTypes.arrayOf(PropTypes.string),
  sequenceName: PropTypes.string,
  deleteSequence: PropTypes.func,
};

export default SequenceInfo;
