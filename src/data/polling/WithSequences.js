import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const SEQUENCE_URL = `${AUTOMATE_CORE_URL}/sequences`;
const REFRESH_RATE = 1000;

const addSequence = (sequenceName, actions) => {
  fetch(`${SEQUENCE_URL}/modify/${sequenceName}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      actions,
    }),
  });
};

const deleteSequence = (sequenceName) => {
  fetch(`${SEQUENCE_URL}/${sequenceName}`, {
    method: 'DELETE',
  });
};


const executeSequence = (sequenceName) => {
  fetch(`${SEQUENCE_URL}/${sequenceName}`, {
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
  componentWillMount() {
    this.getData();
    this.handle = setInterval(this.getData, REFRESH_RATE);
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }
  getData = async () => {
    try {
      const response = await fetch(SEQUENCE_URL, {
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
      // what to do here?
    }
  }
  render() {
    const { children } = this.props;
    const { hasData, sequences } = this.state;
    return ((hasData && children) ?
      children({ sequences, addSequence, deleteSequence, executeSequence }) :
      null
    );
  }
}

WithSequences.propTypes = {
  children: PropTypes.func,
};


export default WithSequences;

