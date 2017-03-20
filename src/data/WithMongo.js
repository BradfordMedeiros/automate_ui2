
import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:5000/topics/';
const request = async (topic) => {
  try {
    const response = await fetch((url + topic +  '/50'), {
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
      data: null,
      error: false,
    };
    this.intervalHandle = undefined;
    this.lastTopic = undefined;
  }
  getMongoData() {
    const { topic, refresh } = this.props;
    if (topic !== this.lastTopic){
      clearInterval(this.intervalHandle);
      if (refresh){
        this.intervalHandle = setInterval(() => {
          request(topic).then( response => {
            response.reverse();
            this.setState({
              data: response,
            })
          }).catch({
            error: true,
          })
        }, 1000);
      }else{
        request(topic).then( response => {
          response.reverse();
          this.setState({
            data: response,
          })
        }).catch({
          error: true,
        });
      }
    }
  }
  componentWillReceiveProps() {
    this.getMongoData();
  }
  componentWillMount() {
    this.getMongoData();
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
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