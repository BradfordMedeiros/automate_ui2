import { Component } from 'react';
import PropTypes from 'prop-types';
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
    }
    componentWillMount() {
      this.getData();
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
      return (hasData && children) ? children({
        conditions,
        addCondition: async conditionName => {
          await addCondition(conditionName);
          this.getData();
        },
        saveCondition: async (conditionName, evalLogic) => {
          await saveCondition(conditionName, evalLogic);
          this.getData();
        },
        deleteCondition: async conditionName => {
          await deleteCondition(conditionName);
          this.getData();
        }
      }) : null;
    }
  }

  WithConditions.propTypes = {
    children: PropTypes.func,
  };

  return WithConditions;
};


export default getWithConditions;

