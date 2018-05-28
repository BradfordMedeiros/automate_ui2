import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import './style.css';

const Log = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow className="event_log_header">
        <TableCell className="event_log_header_cell">Event Name</TableCell>
        <TableCell className="event_log_header_cell">Message</TableCell>
        <TableCell className="event_log_header_cell">Timestamp</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data && data.map((item, index) => (
        <TableRow className="event_log_row" key={index}>
          <TableCell className={index % 2 ? 'event_log_cell_even' : 'event_log_cell_odd'}>{index}</TableCell>
          <TableCell className={index % 2 ? 'event_log_cell_even' : 'event_log_cell_odd'}>{item.topic}</TableCell>
          <TableCell className={index % 2 ? 'event_log_cell_even' : 'event_log_cell_odd'}>{item.timestamp}</TableCell>
        </TableRow>
                    ))}
    </TableBody>
  </Table>
);

Log.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Log;
