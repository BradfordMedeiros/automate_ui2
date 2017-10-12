import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import GenericOverlay from '../overlay/GenericOverlay';
import AddVariableDialog from './components/AddVariableDialog';

const settings = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: true,
  showRowHover: false,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: false,
  height: '100%',
};

class EventLog extends Component {
  state = {
    showDialog: false,
  }
  render() {
    const { variables, onDelete } = this.props;

    return (
      <GenericOverlay title="Environment">
        <AddVariableDialog
          onAdd={(env) => {
            console.log(env);
            this.setState({
              showDialog: false,
            });
          }}
          open={this.state.showDialog}
          onRequestClose={() => {
            this.setState({
              showDialog: false,
            });
          }}
        />
        <Table
          height={settings.height}
          fixedHeader={settings.fixedHeader}
          fixedFooter={settings.fixedFooter}
          selectable={settings.selectable}
          multiSelectable={settings.multiSelectable}
        >
          <TableHeader
            displaySelectAll={settings.showCheckboxes}
            adjustForCheckbox={settings.showCheckboxes}
            enableSelectAll={settings.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Value">Value</TableHeaderColumn>
              <TableHeaderColumn tooltip="Remove">
                Remove
                <div
                  onClick={()=>{
                    this.setState({
                      showDialog: true,
                    })
                  }}>
                    +
                </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={settings.showCheckboxes}
            deselectOnClickaway={settings.deselectOnClickaway}
            showRowHover={settings.showRowHover}
            stripedRows={settings.stripedRows}
          >
            {variables && variables.map((variable, index) => (
              <TableRow>
                <TableRowColumn>{variable.name}</TableRowColumn>
                <TableRowColumn>{variable.value}</TableRowColumn>
                <TableRowColumn>
                    <div
                      style={{
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        onDelete(variable, index);
                      }}
                    >
                      x
                    </div>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GenericOverlay>
    )
  }
}

EventLog.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default EventLog;
