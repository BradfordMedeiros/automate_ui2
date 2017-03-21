
import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import WithEvents from '../data/WithEvents';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'Light On',
    status: 'Employed',
    selected: true,
    timestamp: (new Date()).toDateString(),
    message: "Light turned on",
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
    timestamp: (new Date()).toDateString(),
    message: "Cat fed",
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
    timestamp: (new Date()).toDateString(),
    message: "Washing machine on",
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
    timestamp: (new Date()).toDateString(),
    message: "Washing machine off"
  },
];

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

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div style={{ background: 'rgb(40,40,40)' }}>
        <WithEvents>
          {({ data }) =>
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
                  <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
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
                {data.map((item, index) => (
                  <TableRow key={index} >
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{item.event}</TableRowColumn>
                    <TableRowColumn>{item.timestamp}</TableRowColumn>
                  </TableRow>
                ))}

              </TableBody>

            </Table>
          }
        </WithEvents>
      </div>
    );
  }
}