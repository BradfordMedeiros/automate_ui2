import React, { Component } from 'react';
import { FlatButton, TextField, Dialog } from 'material-ui';
import './style.css';
class ConditionOverlay extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }
  handleSubmit = () => {
    this.setState({
      showModal: true,
    })
  };
  
  render() {
    return (
      <div className="condition_overlay" >
        <Dialog
          title="Select a name for the condition"
          modal={false}
          open={this.state.showModal}
          onRequestClose={() => console.log('closing')}
          actions={[
            <FlatButton onClick={() => this.setState({ showModal: false })}>OK</FlatButton>,
            <FlatButton onClick={() => this.setState({ showModal: false })}>Cancel</FlatButton>
          ]}
        >
          <TextField />
        </Dialog>
        <div className="inner_condition_overlay" >
        <div>
          <TextField
            hintText="states"
          />
        </div>
        <div>
          <TextField
            hintText="logic"
          />
        </div>
        <div>
          <TextField
            hintText="action"
          />
        </div>
        <FlatButton primary onClick={this.handleSubmit}>Submit</FlatButton>
        <FlatButton secondary>Cancel</FlatButton>
        </div>
      </div>
    )
  }
}


export default ConditionOverlay;