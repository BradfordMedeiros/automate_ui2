import React, { Component } from 'react';
import { FlatButton, TextField, Dialog } from 'material-ui';
import fetch from 'isomorphic-fetch';
import './style.css';

const ENDPOINT = 'http://localhost:9000/conditions/';
const createConditionRoute = conditionName => {
  return ENDPOINT + conditionName;
};

//@todo major technical debt:
// do this without calling eval
const submitCondition = ({ conditionName, actions, states, evalLogic }) => {
  console.error('submitting condition');
  console.error('-------------');
  console.error('condition name : ', conditionName);
  console.error('actions : ', actions);
  console.error('states : ', states);
  console.error('eval logic ', evalLogic);

  const newCondition = { };
  newCondition.state = eval(states);
  newCondition.action = eval(actions);
  newCondition.eval = evalLogic;

  const messageBody = JSON.stringify(newCondition);
  fetch(createConditionRoute(conditionName), {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: messageBody,
    method: 'POST',
  });
};

class ConditionOverlay extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      states: undefined,
      evalLogic: undefined,
      actions: undefined,
      conditionName: undefined,
    }
  }
  handleSubmit = () => {
    this.setState({
      showModal: true,
    })
  };
  submitDataToServer = () => {
    console.error('submitting data');
    console.error(this.state);
    const newRoute = createConditionRoute(this.state.conditionName);
    submitCondition(this.state);
  };
  handleTextFieldStateChange = (x,states) => {
    this.setState({
      states,
    });
  };
  handleTextFieldLogicChange = (x,evalLogic) => {
    this.setState({
      evalLogic,
    });
  };
  handleTextFieldActionChange = (x,actions) => {
    this.setState({
      actions,
    })
  };
  handleSetConditionName = (x, conditionName) => {
    this.setState({
      conditionName,
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
            <FlatButton onClick={() => {
              this.setState({ showModal: false })
              this.submitDataToServer();
            }}>
              OK
            </FlatButton>,
            <FlatButton onClick={() => this.setState({ showModal: false })}>Cancel</FlatButton>
          ]}
        >
          <TextField
            hintText={"Condition Name"}
            onChange={this.handleSetConditionName}
          />
        </Dialog>
        <div className="inner_condition_overlay" >
        <div>
          <TextField
            hintText="states"
            onChange={this.handleTextFieldStateChange}
          />
        </div>
        <div>
          <TextField
            hintText="logic"
            onChange={this.handleTextFieldLogicChange}
          />
        </div>
        <div>
          <TextField
            hintText="action"
            onChange={this.handleTextFieldActionChange}
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