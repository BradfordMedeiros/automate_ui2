
import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:5000/topics/10';
const request = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    const text = await response.text();
    try{
      const parsedText = JSON.parse(text);
      return parsedText;
    }catch(err){
      console.error('error parsing response from ', url);
      console.error(err);
      throw(err);
    }
  }catch (err){
    throw(err);
  }
};


class WithMongo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
      error: false,
    };
  }
  componentWillMount() {
    request().then( response => {
      this.setState({
        data: response,
      })
    }).catch({
      error: true,
    });
  }
  render() {
    const { Child, topic  } = this.props;

    return (this.state.data === null || Child === undefined) ? null : <Child data={this.state.data} error={this.state.error} />
  }
}

WithMongo.propTypes = {
  topic: PropTypes.string,
  Child: PropTypes.node,
};

export default WithMongo;