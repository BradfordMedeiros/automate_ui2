import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

class AddVariableDialog extends Component {
  state = {
    token: '',
    value: '',
  };
  isValidToken = () => {
    return this.state.token.length > 0;
  };
  isValidValue = () => {
    return this.state.value.length > 0;
  };
  render() {
    const {
      open,
      onRequestClose,
      onAdd,
    } = this.props;

    return (
      <Dialog
        open={open}
        onRequestClose={onRequestClose}
        actions={[
          <RaisedButton
            onClick={onRequestClose}
            label="Cancel"
          />,
          <RaisedButton
            onClick={() => {
              onAdd({
                token: this.state.token,
                value: this.state.value,
              });
            }}
            disabled={!(this.isValidToken() && this.isValidValue())}
            label="Ok"
          />,
        ]}
      >
        <Subheader>Add Environmental Variable</Subheader>
        <TextField
          floatingLabelText="Token"
          fullWidth
          onChange={(_, token) => {
            this.setState({
              token,
            });
          }}
        />
        <TextField
          floatingLabelText="Value"
          fullWidth
          onChange={(_, value) => {
            this.setState({
              value,
            });
          }}
        />
      </Dialog>
    )
  }
}

AddVariableDialog.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddVariableDialog;