import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Action = ({ options, deleteSelf }) => (
  <TableRow>
    <TableCell>action</TableCell>
    <TableCell>{options.topic}</TableCell>
    <TableCell>{options.value}</TableCell>
    <TableCell
      onTouchTap={deleteSelf}
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
