import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const ACTIONS_URL = AUTOMATE_CORE_URL + '/actions';
const REFRESH_RATE = 1000;


const executeAction = actionName => {
  fetch(`${ACTIONS_URL}/${actionName}`, {
    method: 'POST',
  });
};

class WithStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
    }
    this.handle = undefined;
  }
  getData = async () => {
    try {
      const response = await fetch(ACTIONS_URL, {
        mode: "cors",
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });
      const states = await response.json();
      this.setState({
        hasData: true,
        actions: states.actions,
      });
    }catch(err){
      console.error('error while fetching ', err);
    }
  }

  componentWillMount() {
    this.handle = setInterval(this.getData, REFRESH_RATE);
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { children } = this.props;
    const { hasData, actions } = this.state;
    return (hasData && children) ? children({ actions, executeAction }) : null;
  }
}


export default WithStates;

