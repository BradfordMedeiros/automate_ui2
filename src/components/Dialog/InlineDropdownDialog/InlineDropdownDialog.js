
import React, { Component, PropTypes } from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';
import DialogContainer from '../InlineDialogContainer';
import Transforms from './Transforms';

class InlineDropdownDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftItemSelected: 0,
      newAction: undefined,
    };
  }
  render() {
    const { open, closeDialog, onChange, text, options } = this.props;

    const items = Object.keys(options);
    return (
      <DialogContainer
        text={text}
        open={open}
        closeDialog={closeDialog}
        onOkClick={() => {
          if (this.state.newAction) {
            onChange(this.state.newAction);
          }
          closeDialog();
        }}
      >
        <div>
          <DropDownMenu
            value={items[this.state.leftItemSelected]}
            onChange={(_, leftItemSelected) => {
              this.setState({
                leftItemSelected,
              });
            }}
            style={{ width: 200 }}
          >
            {items.map((item, index) => <MenuItem key={index}>{item}</MenuItem>)}
          </DropDownMenu>
          <div style={{ display: 'inline-block' }}>
            <Transforms
              onChange={(newAction) => {
                this.setState({
                  newAction: ({
                    name: newAction,
                    type: items[this.state.leftItemSelected],
                  }),
                });
              }}
              item={options[items[this.state.leftItemSelected]]}
            />
          </div>
        </div>
      </DialogContainer>
    );
  }
}

InlineDropdownDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onOkClick: PropTypes.func.isRequired,
  items1: PropTypes.arrayOf(PropTypes.string),
  item2: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
};

export default InlineDropdownDialog;
