import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const REFRESH_RATE = 1000;

const getWithStates = (AUTOMATE_CORE_URL) => {
  const STATES_URL = `${AUTOMATE_CORE_URL}/states`;

  const deleteState = async stateName => (
    fetch(`${STATES_URL}/${stateName}`, {
      method: 'DELETE',
    })
  );

  const addState = async stateName => (
    fetch(`${STATES_URL}/modify/states/${stateName}`, {
      method: 'POST',
    })
  );


  const saveState = async (stateName, evalLogic) => {
    const stateEval = evalLogic;

    return (
      fetch(`${STATES_URL}/modify/${stateName}`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          stateEval,
        }),
        method: 'POST',
      })
    );
  };


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
        const response = await fetch(STATES_URL, {
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
      const { children, renderWhileLoading } = this.props;
      const { hasData, states } = this.state;

      if (hasData && children) {
        return children({ states, addState, deleteState, saveState });
      } else if (children && renderWhileLoading) {
        return children({ states: [], addState, deleteState, saveState });
      }
      return null;
    }
  }

  WithStates.propTypes = {
    children: PropTypes.node,
    renderWhileLoading: PropTypes.bool,
  };

  WithStates.defaultProps = {
    children: undefined,
  };

  return WithStates;
};

export default getWithStates;
