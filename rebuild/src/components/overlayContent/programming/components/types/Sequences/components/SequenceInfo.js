import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//import InlineDropdownDialog from '../../../../Dialog/InlineDropdownDialog/InlineDropdownDialog';
import SequenceUnit from './components/sequenceUnit/SequenceUnit';

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
  }
  closeDialog = () => {
    this.setState({
      showAddDialog: false,
    });
  }
  render() {
    const { actions, metaActions, sequenceName, onChange, deleteSequence } = this.props;
    return (
      <div style={{ width: '100%' }}>
        {/*<InlineDropdownDialog
          open={this.state.showAddDialog}
          closeDialog={this.closeDialog}
          onChange={(newAction) => {
            const newActions = actions.slice();
            newActions.push(newAction);
            onChange(newActions, newAction);
          }}
          onOkClick={this.closeDialog}
          options={metaActions}
        />*/}
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
                  onChange(newActions);
                }}
              />
            ))}
            <TableRow>
              <TableCell
                onTouchTap={this.openDialog}
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
  metaActions: PropTypes.arrayOf(PropTypes.string),
  sequenceName: PropTypes.string,
  deleteSequence: PropTypes.func,
  onChange: PropTypes.func,
};

export default SequenceInfo;
