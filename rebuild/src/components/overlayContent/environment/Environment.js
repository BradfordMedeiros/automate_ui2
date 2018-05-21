import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import AddVariableDialog from './components/AddVariableDialog';
import './style.css';

class Environment extends Component {
  state = {
    showDialog: false,
  };
  showDialog = () => {
    this.setState({
        showDialog: true,
    })
  };
  hideDialog = () => {
    this.setState({
        showDialog: false,
    })
  };
  render() {
    const { variables, onDelete, onAdd } = this.props;

    return (
        <div>
            <AddVariableDialog
                open={this.state.showDialog}
                onRequestClose={this.hideDialog}
                onAdd={value => {
                  onAdd(value);
                  this.hideDialog();
                }}
            />
            <Table>
                <TableHead>
                    <TableRow className="env_header">
                        <TableCell className="env_header_cell">Env Name</TableCell>
                        <TableCell className="env_header_cell">Value</TableCell>
                        <TableCell onClick={this.showDialog} className="env_cell_add env_header_cell">Add New</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {variables && variables.map((item, index) => {
                        return (
                            <TableRow className="env_log_row" key={index}>
                                <TableCell className={index % 2 ? "env_cell_even" : "env_cell_odd"}>{item.name}</TableCell>
                                <TableCell className={index % 2 ? "env_cell_even" : "env_cell_odd"}>{item.value}</TableCell>
                                <TableCell
                                    onClick={() => {
                                        onDelete(item, index);
                                    }}
                                    className={index % 2 ? "env_cell_remove env_cell_even" : "env_cell_remove env_cell_odd"}>
                                    Remove
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
  }
}

Environment.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Environment;
