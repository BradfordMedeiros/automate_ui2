import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

const Wait = ({ options, deleteSelf }) => (
  <TableRow>
    <TableRowColumn>wait</TableRowColumn>
    <TableRowColumn>{options}</TableRowColumn>
    <TableRowColumn />
    <TableRowColumn
      onTouchTap={deleteSelf}
      style={{ fontSize: 25, cursor: 'pointer' }}
    >
        &times;
      </TableRowColumn>
  </TableRow>
);

Wait.propTypes = {
  options: PropTypes.string,
  deleteSelf: PropTypes.func,
};

export default Wait;
