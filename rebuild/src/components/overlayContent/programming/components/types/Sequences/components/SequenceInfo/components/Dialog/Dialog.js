import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from "@material-ui/core/MenuItem";
import Transforms from './components/Transforms/Transforms';
import Button from '@material-ui/core/Button';
import MDialog from '@material-ui/core/Dialog';
import  './style.css';

const transformTypeToTransform = {
  action: 'options',
  wait: 'text',
};

class Dialog extends Component {
  state = {
    defaultType: 'action',
  };
  render() {
    const { open, closeDialog  } = this.props;

    return (
        <MDialog PaperProps={{ className: 'sequence_dialog_outer' }} open={open} onClose={closeDialog}>
          <FormControl>
            <InputLabel>sequence type</InputLabel>
            <Select
                className="sequence_dialog_select"
                value={this.state.defaultType}
                onChange={x => {
                  const defaultType = x.target.value;
                  this.setState({
                    defaultType,
                  })
                }}
            >
              <MenuItem value="action">action</MenuItem>
              <MenuItem value="wait">wait</MenuItem>
            </Select>
            <FormHelperText>sequence type</FormHelperText>
          </FormControl>
          <Transforms
            onChange={x => {
              console.log('change: ', x);
            }}
            item={{
              type: transformTypeToTransform[this.state.defaultType],
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }} >
            <Button variant="raised" onClick={closeDialog}>
              Cancel
            </Button>
            <Button variant="raised">Ok</Button>
          </div>
        </MDialog>
    );
  }
}

Dialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
};

export default Dialog;
