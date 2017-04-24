import React, { Component, PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class SequenceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
    };
  }
  render() {
    const { actions, availableActions, metaActions, style } = this.props;
    return (
      <div style={{  width: '50%' }}>
        <Table selectable={false}>
          <TableHeader>
            <TableHeaderColumn>
              Type
            </TableHeaderColumn>
            <TableHeaderColumn>
              Name
            </TableHeaderColumn>
            <TableHeaderColumn>
              Delete
            </TableHeaderColumn>
          </TableHeader>
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
                onTouchTap={ () => this.setState({
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
};

export default SequenceInfo;
