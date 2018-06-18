import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

const REFRESH_RATE = 1000;

const getWithRules = (automateUrl) => {
  const RULES_URL = `${automateUrl}/rules`;

  const deleteRule = async ruleName => (
    fetch(`${RULES_URL}/${ruleName}`, {
      method: 'DELETE',
    })
  );

  const addRule = async (
    ruleName,
    conditionName,
    strategy,
    rate,
    topic,
    value,
  ) => {
    fetch(`${RULES_URL}/modify/rules/${ruleName}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),

      body: JSON.stringify({
        name: ruleName,
        conditionName,
        strategy,
        rate,
        topic,
        value,
      }),
      method: 'POST',
    });
  };


  class WithRules extends Component {
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
        const response = await fetch(RULES_URL, {
          mode: 'cors',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        const rules = await response.json();
        this.setState({
          hasData: true,
          rules: rules.rules,
        });
      } catch (err) {
        // what to do?
      }
    }
    render() {
      const { children } = this.props;
      const { hasData, rules } = this.state;
      return (hasData && children) ? children({ rules, addRule, deleteRule }) : null;
    }
  }

  WithRules.propTypes = {
    children: PropTypes.func,
  };

  return WithRules;
};


export default getWithRules;

