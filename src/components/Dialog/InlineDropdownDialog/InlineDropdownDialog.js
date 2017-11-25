
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DropDownMenu
            value={items[this.state.leftItemSelected]}
            onChange={(_, leftItemSelected) => {
              this.setState({
                leftItemSelected,
              });
            }}
            style={{ width: 200 }}
          >
            {items.map((item, index) => (
              <MenuItem
                primaryText={item}
                value={item}
                key={index} // eslint-disable-line
              />),
            )}
          </DropDownMenu>
          <div style={{ marginTop: -8 }}>
            <Transforms
              selectedValue={this.state.newAction ? this.state.newAction.value : undefined}
              onChange={(newAction) => {
                this.setState({
                  newAction: ({
                    options: newAction,
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
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  onChange: PropTypes.func,
  text: PropTypes.string,
  options: PropTypes.array,
};

export default InlineDropdownDialog;
