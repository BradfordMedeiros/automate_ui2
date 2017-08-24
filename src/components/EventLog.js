import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import GenericOverlay from './overlay/GenericOverlay';

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

const EventLog = ({ data }) => (
  <GenericOverlay title="Events">
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
          <TableHeaderColumn tooltip="The ID">Event Name</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Status">Message</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Name">Timestamp</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={settings.showCheckboxes}
        deselectOnClickaway={settings.deselectOnClickaway}
        showRowHover={settings.showRowHover}
        stripedRows={settings.stripedRows}
      >
        {data && data.map((item, index) => (
          <TableRow>
            <TableRowColumn>{index}</TableRowColumn>
            <TableRowColumn>{item.topic}</TableRowColumn>
            <TableRowColumn>{item.timestamp}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </GenericOverlay>

);

EventLog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default EventLog;
