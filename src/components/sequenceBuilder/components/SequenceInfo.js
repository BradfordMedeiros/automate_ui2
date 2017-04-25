import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Subheader } from 'material-ui';
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
          onChange={onChange}
          onOkClick={this.closeDialog}
          options={metaActions}
        />
        <Subheader style={{ display: 'inline', width: '50%' }}>Sequence Name: {sequenceName} </Subheader>
        <Subheader onTouchTap={deleteSequence} style={{ display: 'inline', width: '50%', paddingLeft: 60, cursor: 'pointer' }} >Delete</Subheader>
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false} onCellClick={x => console.error(x)} >
            {actions.map((action, index) => (
              <TableRow key={index}>
                <TableRowColumn>{action.type}</TableRowColumn>
                <TableRowColumn>{action.name}</TableRowColumn>
                <TableRowColumn style={{ fontSize: 25, cursor: 'pointer' }}>&times;</TableRowColumn>
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
