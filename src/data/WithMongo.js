
import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:5000/topics/';
const request = async (topic) => {
  try {
    const response = await fetch((url + topic), {
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
    const { topic } = this.props;
    request(topic).then( response => {
      this.setState({
        data: response,
      })
    }).catch({
      error: true,
    });
  }
  render() {
    const { children } = this.props;

    return (this.state.data && children) ? children({ data: this.state.data }) : null;
  }
}

WithMongo.propTypes = {
  topic: PropTypes.string,
};

export default WithMongo;