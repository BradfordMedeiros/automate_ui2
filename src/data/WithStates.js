import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const CONDITIONS_URL = `${AUTOMATE_CORE_URL}/states`;
const REFRESH_RATE = 1000;

class WithStates extends Component {
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
      const response = await fetch(CONDITIONS_URL, {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const states = await response.json();
      this.setState({
        hasData: true,
        states: states.states,
      });
    } catch (err) {
      /* eslint-disable no-console */
      console.error('error while fetching ', err);
    }
  }
  render() {
    const { children } = this.props;
    const { hasData, states } = this.state;
    return (hasData && children) ? children({ states }) : null;
  }
}

WithStates.propTypes = {
  children: PropTypes.node,
};

WithStates.defaultProps = {
  children: undefined,
};

export default WithStates;

