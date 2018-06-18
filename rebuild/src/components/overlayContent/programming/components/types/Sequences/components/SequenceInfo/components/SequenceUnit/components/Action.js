import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './style.css';

const Action = ({ options, deleteSelf }) => (
  <TableRow>
    <TableCell className="sequences_table_cell">action</TableCell>
    <TableCell className="sequences_table_cell">{options.topic}</TableCell>
    <TableCell className="sequences_table_cell">{options.value}</TableCell>
    <TableCell
      className="sequences_table_cell"
      onClick={deleteSelf}
      style={{ fontSize: 25, cursor: 'pointer' }}
    >
      &times;
    </TableCell>
  </TableRow>
);

Action.propTypes = {
  options: PropTypes.object,
  deleteSelf: PropTypes.func,
};

export default Action;
