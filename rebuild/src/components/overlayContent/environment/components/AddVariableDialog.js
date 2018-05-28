import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class AddVariableDialog extends Component {
  state = {
    token: '',
    value: '',
  };
  isValidToken = () => this.state.token.length > 0;
  isValidValue = () => this.state.value.length > 0;
  render() {
    const {
      open,
      onRequestClose,
      onAdd,
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onRequestClose}
      >
        <DialogTitle>Add Environmental Variable</DialogTitle>
        <DialogContent>
          <TextField
            helperText="Token"
            fullWidth
            onChange={(event) => {
                          const token = event.target.value;
                          this.setState({
                              token,
                          });
                      }}
          />
          <TextField
            helperText="Value"
            fullWidth
            onChange={(event) => {
                          const value = event.target.value;
                          this.setState({
                              value,
                          });
                      }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onRequestClose}
            variant="raised"
          >
                  Cancel
          </Button>,
          <Button
            variant="raised"
            onClick={() => {
                          onAdd({
                              token: this.state.token,
                              value: this.state.value,
                          });
                      }}
            disabled={!(this.isValidToken() && this.isValidValue())}
          >
                  Ok
          </Button>
        </DialogActions>

      </Dialog>
    );
  }
}

AddVariableDialog.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddVariableDialog;
