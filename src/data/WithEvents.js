import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:9000/events/';
const request = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    const text = await response.text();
    try {
      const parsedText = JSON.parse(text);
      return parsedText;
    } catch (err) {
      console.error('error parsing response from ', url);
      console.error(err);
      throw (err);
    }
  } catch (err) {
    throw (err);
  }
};


class WithEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: false,
    };
    this.intervalHandle = undefined;
    this.lastTopic = undefined;
  }

  makeEventRequest = () => {
    request().then((response) => {
      response.reverse();
      this.setState({
        data: response,
      });
    }).catch({
      error: true,
    });
  }
  getMongoData() {
    const { refresh } = this.props;
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.makeEventRequest, refresh);
    this.makeEventRequest();
  }
  componentWillReceiveProps() {
    console.error('receiving props');
    this.getMongoData();
  }
  componentWillMount() {
    console.error('components is mounting');
    this.getMongoData();
  }
  componentWillUnmount() {
    console.error('component unmounting');
    clearInterval(this.intervalHandle);
  }
  render() {
    const { children, whileLoading } = this.props;
    return (this.state.data && children) ? children({ data: this.state.data }) : (whileLoading ? whileLoading() : null);
  }
}

WithEvents.propTypes = {
  whileLoading: PropTypes.func,
};

export default WithEvents;
