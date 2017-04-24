import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const ACTIONS_URL = `${AUTOMATE_CORE_URL}/sequences`;
const REFRESH_RATE = 1000;

const executeAction = (actionName) => {
  fetch(`${ACTIONS_URL}/${actionName}`, {
    method: 'POST',
  });
};

class WithSequences extends Component {
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
        sequences: states.sequences,
      });
    } catch (err) {
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
    const { hasData, sequences } = this.state;
    return (hasData && children) ? children({ sequences, executeAction }) : null;
  }
}


export default WithSequences;

