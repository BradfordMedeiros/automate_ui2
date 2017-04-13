
import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:9000/topics/';
const request = async (topics, limit) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {
          $or: topics.map(topic => ({ topic })),
        },
        options: { limit: limit || undefined },
      }),
    });

    const text = await response.text();
    try {
      const parsedText = JSON.parse(text);
      return parsedText;
    } catch (err) {
      /* eslint-disable no-console */
      console.error('error parsing response from ', url);
      console.error(err);
      throw (err);
    }
  } catch (err) {
    throw (err);
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
    const { topic, refresh } = this.props;
    if (topic !== this.lastTopic) {
      clearInterval(this.intervalHandle);
      if (refresh) {
        this.intervalHandle = setInterval(() => {
          request(topic).then((response) => {
            response.reverse();
            this.setState({
              data: response,
            });
          }).catch({
            error: true,
          });
        }, refresh);
      } else {
        request(topic).then((response) => {
          response.reverse();
          this.setState({
            data: response,
          });
        }).catch({
          error: true,
        });
      }
    }
  }
  render() {
    const { children } = this.props;
    return (this.state.data && children) ? children({ data: this.state.data }) : null;
  }
}

WithMongo.propTypes = {
  topic: PropTypes.string.isRequired,
  limit: PropTypes.number,
  refresh: PropTypes.number,
  children: PropTypes.node,
};

WithMongo.defaultProps = {
  refresh: undefined,
  children: undefined,
};

export default WithMongo;