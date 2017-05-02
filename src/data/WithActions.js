import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const ACTIONS_URL = `${AUTOMATE_CORE_URL}/actions`;
const REFRESH_RATE = 1000;

// need to send a stringified version of the function to send to the server
// The function must return the state as a json string via stdout
const createStateFromSimpleFunction = (evalLogicString) => {
  const isFunction = eval(`(${evalLogicString})`); // kind of dangerous but frontend anyway so who really cares
  if (typeof (isFunction) !== typeof (() => {
    })) {
    throw (new Error('must be a function'));
  }
  const stringToSend = `() => {
    const value = ((${evalLogicString}))(); 
    console.log('"' + value + '"');
  }`;
  return stringToSend;
};

const saveAction = (actionName, evalLogic ) => {
  const actionEval = createStateFromSimpleFunction(evalLogic);

  fetch(`${ACTIONS_URL}/modify/${actionName}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify({
      actionEval,
    }),
    method: 'POST',
  });
};

const executeAction = actionName => {
  fetch(`${ACTIONS_URL}/${actionName}`, {
    method: 'POST',
  });
};

const deleteAction = actionName => {
  fetch(`${ACTIONS_URL}/${actionName}`, {
    method: 'DELETE',
  });
};

const addAction = actionName => {
  fetch(`${ACTIONS_URL}/modify/${actionName}`, {
    method: 'POST',
  });
};



class WithStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
    };
    this.handle = undefined;
  }
  getData = async () => {
    try {
      const response = await fetch(ACTIONS_URL, {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const states = await response.json();
      this.setState({
        hasData: true,
        actions: states.actions,
      });
    } catch (err) {
      console.error('error while fetching ', err);
    }
  }

  componentWillMount() {
    this.handle = setInterval(this.getData, REFRESH_RATE);
    this.getData();
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { children } = this.props;
    const { hasData, actions } = this.state;
    return (hasData && children) ? children({ actions, addAction, deleteAction, saveAction, executeAction }) : null;
  }
}


export default WithStates;

