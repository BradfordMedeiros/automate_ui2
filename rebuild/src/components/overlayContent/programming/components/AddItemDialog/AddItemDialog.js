import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MDialog from '@material-ui/core/Dialog';
import  './style.css';

class Dialog extends Component {
	render(){ 
		const { open, onAddItem, closeDialog, onInputChange } = this.props;
		return (
			<MDialog PaperProps={{ className: 'add_item_dialog_outer' }} open={open} onClose={closeDialog}>
    			<input 
    				onChange={(x,y) => {
    					onInputChange(x.target.value);
    				}}
    			/>
    			<div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }} >
         			<Button variant="raised" onClick={closeDialog}>Cancel</Button>
            		<Button onClick={onAddItem} variant="raised">Ok</Button>
        		</div>
    		</MDialog>
		)
	}
}

Dialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  onInputChange: PropTypes.func,
  onAddItem: PropTypes.func,
};

export default Dialog;
