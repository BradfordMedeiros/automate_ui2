import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './style.css';

const Wait = ({ options, deleteSelf }) => (
  <TableRow>
    <TableCell className="sequences_table_cell">wait</TableCell>
    <TableCell className="sequences_table_cell">{options}</TableCell>
    <TableCell className="sequences_table_cell" />
    <TableCell
      className="sequences_table_cell"
      onClick={deleteSelf}
      style={{ fontSize: 25, cursor: 'pointer' }}
    >
        &times;
      </TableCell>
  </TableRow>
);

Wait.propTypes = {
  options: PropTypes.string,
  deleteSelf: PropTypes.func,
};

export default Wait;
