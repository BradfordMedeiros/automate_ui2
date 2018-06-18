import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from './components/Dialog/Dialog';
import SequenceUnit from './components/SequenceUnit/SequenceUnit';
import './style.css';

class SequenceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddDialog: false,
    };
  }
  openDialog = () => {
    this.setState({
      showAddDialog: true,
    });
  };
  closeDialog = () => {
    this.setState({
      showAddDialog: false,
    });
  };
  render() {
    const { actions, onChange } = this.props;
    return (
      <div style={{ flexGrow: 1, overflow: 'auto' }}>
        <Dialog
          open={this.state.showAddDialog}
          closeDialog={this.closeDialog}
          onAdd={(newAction) => {
            const newActions = actions.slice();
            newActions.push(newAction);
            onChange(newActions, newAction, null);
          }}
          onOkClick={this.closeDialog}
        />
        <Table>
          <TableBody>
            {actions.map((action, index) => (
              <SequenceUnit
                type={action.type}
                options={action.options}
                deleteSelf={() => {
                  const newActions = (actions
                      .slice(0, Math.max(index, 0))
                      .concat(actions.slice(index + 1))
                  );
                  onChange(newActions, null, action);
                }}
              />
            ))}
            <TableRow>
              <TableCell
                className="sequence_info_add_new"
                onClick={this.openDialog}
                style={{ cursor: 'pointer' }}
              >
                + Add New
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

SequenceInfo.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default SequenceInfo;
