import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

const Action = ({ options, deleteSelf }) => (
  <TableRow>
    <TableRowColumn>action</TableRowColumn>
    <TableRowColumn>{options.topic}</TableRowColumn>
    <TableRowColumn>{options.value}</TableRowColumn>
    <TableRowColumn
      onTouchTap={deleteSelf}
      style={{ fontSize: 25, cursor: 'pointer' }}
    >
      &times;
    </TableRowColumn>
  </TableRow>
);

Action.propTypes = {
  options: PropTypes.object,
  deleteSelf: PropTypes.func,
};

export default Action;
