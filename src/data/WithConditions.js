import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const CONDITIONS_URL = AUTOMATE_CORE_URL + '/conditions';


class WithConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
    }
  }
  getData = async () => {
    try {
      const response = await fetch(CONDITIONS_URL, {
        mode: "cors",
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });
      const conditions  = await response.json();
      this.setState({
        hasData: true,
        conditions: conditions.conditions,
      });
    }catch(err){
      console.error('error while fetching ', err);
    }
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    const { children } = this.props;
    const { hasData, conditions } = this.state;
    return (hasData && children) ? children({ conditions }) : null;
  }
}


export default WithConditions;

