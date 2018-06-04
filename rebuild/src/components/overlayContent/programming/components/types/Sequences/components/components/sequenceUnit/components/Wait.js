import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Wait = ({ options, deleteSelf }) => (
  <TableRow>
    <TableCell>wait</TableCell>
    <TableCell>{options}</TableCell>
    <TableCell />
    <TableCell
      onTouchTap={deleteSelf}
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
