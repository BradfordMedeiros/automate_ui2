import React, { Component } from 'react';
import { FlatButton, TextField, Dialog } from 'material-ui';
import fetch from 'isomorphic-fetch';
import './style.css';

const ENDPOINT = 'http://localhost:9000/states/modify/';
const createStateRoute = stateName => {
  return ENDPOINT + stateName;
};

//@todo major technical debt:
// do this without calling eval

// need to send a stringified version of the function to send to the server
// The function must return the state as a json string via stdout
const createStateFromSimpleFunction = (evalLogicString) => {
  const isFunction = eval(`(${evalLogicString})`); // kind of dangerous but frontend anyway so who really cares
  if (typeof(isFunction) != typeof(() => {
    })) {
    throw (new Error('must be a function'));
  }
  const stringToSend = `() => {
    const value = ((${evalLogicString}))(); 
    console.log('"' + value + '"');
  }`;
  return stringToSend;
};

const submitState = ({ stateName, evalLogic }) => {
  const stateEval =  createStateFromSimpleFunction(evalLogic);

  fetch(createStateRoute(stateName), {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify({
      stateEval,
    }),
    method: 'POST',
  });
};

class StatesOverlay extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      stateName: undefined,
      evalLogic: undefined,
    }
  }
  handleSubmit = () => {
    this.setState({
      showModal: true,
    })
  };
  submitDataToServer = () => {
    const newRoute = createStateRoute(this.state.stateName);
    submitState(this.state);
  };
  handleTextFieldLogicChange = (x,evalLogic) => {
    this.setState({
      evalLogic,
    });
  };
  handleSetStateName = (x, stateName) => {
    this.setState({
      stateName,
    })
  };
  render() {
    return (
      <div className="condition_overlay" >
        <Dialog
          title="Select a name for the condition"
          modal={false}
          open={this.state.showModal}
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
            hintText={"State Name"}
            onChange={this.handleSetStateName}
          />
        </Dialog>
        <div className="inner_condition_overlay" >
          <TextField
            hintText="states"
            onChange={this.handleTextFieldLogicChange}
          />
          <FlatButton primary onClick={this.handleSubmit}>Submit</FlatButton>
          <FlatButton secondary>Cancel</FlatButton>
        </div>
      </div>
    )
  }
}


export default StatesOverlay;