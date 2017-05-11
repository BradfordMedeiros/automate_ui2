import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import WithEvents from '../data/WithEvents';

export default class TableExampleComplex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }
  getContainer = content => (
    <Table
      height={this.state.height}
      fixedHeader={this.state.fixedHeader}
      fixedFooter={this.state.fixedFooter}
      selectable={this.state.selectable}
      multiSelectable={this.state.multiSelectable}
    >
      <TableHeader
        displaySelectAll={this.state.showCheckboxes}
        adjustForCheckbox={this.state.showCheckboxes}
        enableSelectAll={this.state.enableSelectAll}
      >
        <TableRow>
          <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
            Events
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn tooltip="The ID">Event Name</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Status">Message</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Name">Timestamp</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={this.state.showCheckboxes}
        deselectOnClickaway={this.state.deselectOnClickaway}
        showRowHover={this.state.showRowHover}
        stripedRows={this.state.stripedRows}
      >
        {content && content.data.map((item, index) => (
          <TableRow>
            <TableRowColumn>{index}</TableRowColumn>
            <TableRowColumn>{item.event}</TableRowColumn>
            <TableRowColumn>{item.timestamp}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };
  handleChange = (event) => {
    this.setState({ height: event.target.value });
  };
  render() {
    return (
      <div style={{ background: 'rgb(40,40,40)' }}>
        <WithEvents
          whileLoading={this.getContainer}
        >
          {content => this.getContainer(content)}
        </WithEvents>
      </div>
    );
  }
}
