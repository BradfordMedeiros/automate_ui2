import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import AxiomHeader from '../../../axiomBuilder/AxiomHeader';
import InlineDropdownDialog from '../../../Dialog/InlineDropdownDialog/InlineDropdownDialog';
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
        <InlineDropdownDialog
          open={this.state.showAddDialog}
          closeDialog={this.closeDialog}
          onChange={(newAction) => {
            const newActions = actions.slice();
            newActions.push(newAction);
            onChange(newActions, newAction);
          }}
          onOkClick={this.closeDialog}
          options={metaActions}
        />
        <AxiomHeader
          deleteSequence={deleteSequence}
          axiomName="Sequence"
          axiomNameValue={sequenceName}
        />
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false} >
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
              <TableRowColumn
                onTouchTap={this.openDialog}
                style={{ cursor: 'pointer' }}
              >
                + Add New
              </TableRowColumn>
              <TableRowColumn />
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
