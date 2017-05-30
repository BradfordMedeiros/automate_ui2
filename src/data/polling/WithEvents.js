import { Component, PropTypes } from 'react';
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
  componentWillMount() {
    this.getMongoData();
  }
  componentWillReceiveProps() {
    this.getMongoData();
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }
  getMongoData() {
    const { refresh } = this.props;
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.makeEventRequest, refresh);
    this.makeEventRequest();
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
  render() {
    const { children, whileLoading } = this.props;
    if (!this.state.data) {
      return whileLoading ? whileLoading() : null;
    }
    return children ? children({ data: this.state.data }) : null;
  }
}

WithEvents.propTypes = {
  whileLoading: PropTypes.func,
  children: PropTypes.func,
  refresh: PropTypes.number,
};

export default WithEvents;
