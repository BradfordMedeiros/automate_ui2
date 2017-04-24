import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Subheader } from 'material-ui';

class SequenceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
    };
  }
  render() {
    const { actions, availableActions, metaActions, sequenceName, deleteSequence, style } = this.props;
    return (
      <div style={{  width: '100%' }}>
        <Subheader style={{ display: 'inline', width: '50%' }}>Sequence Name: {sequenceName} </Subheader>
        <Subheader onTouchTap={deleteSequence} style={{ display: 'inline', width: '50%', paddingLeft: 60, cursor: 'pointer' }} >Delete</Subheader>
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false} onCellClick={x => console.error(x) } >
            {actions.map((action, index) => (
              <TableRow key={index}>
                <TableRowColumn>{action.type}</TableRowColumn>
                <TableRowColumn>{action.name}</TableRowColumn>
                <TableRowColumn style={{ fontSize: 25, cursor: 'pointer' }}>&times;</TableRowColumn>
              </TableRow>
            ))}
            <TableRow>
              <TableRowColumn
                onClick={ () => this.setState({
                  showAddDialog: true,
                })}
                style={{ cursor: 'pointer' }}
              >
                + Add New
              </TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

SequenceInfo.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
  availableActions: PropTypes.arrayOf(PropTypes.string),
  metaActions: PropTypes.arrayOf(PropTypes.string),
  sequenceName: PropTypes.string,
  deleteSequence: PropTypes.func,
};

export default SequenceInfo;
