import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const REFRESH_RATE = 1000;

const getWithConditions = (automateUrl) => {
  const CONDITIONS_URL = `${automateUrl}/conditions`;

  const deleteCondition = async conditionName => (
    fetch(`${CONDITIONS_URL}/${conditionName}`, {
      method: 'DELETE',
    })
  );

  const addCondition = async conditionName => (
    fetch(`${CONDITIONS_URL}/modify/conditions/${conditionName}`, {
      method: 'POST',
    })
  );


  const saveCondition = async (conditionName, evalLogic) => {
    const conditionEval = evalLogic;

    return (
      fetch(`${CONDITIONS_URL}/modify/conditions/${conditionName}`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          conditionEval,
        }),
        method: 'POST',
      })
    );
  };


  class WithConditions extends Component {
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
        const conditions = await response.json();
        this.setState({
          hasData: true,
          conditions: conditions.conditions,
        });
      } catch (err) {
        // what to do?
      }
    }
    render() {
      const { children } = this.props;
      const { hasData, conditions } = this.state;
      return (hasData && children) ? children({ conditions, addCondition, saveCondition, deleteCondition }) : null;
    }
  }

  WithConditions.propTypes = {
    children: PropTypes.func,
  };

  return WithConditions;
};


export default getWithConditions;

