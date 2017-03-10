import React, { Component, PropTypes } from 'react';
import { connect } from 'mqtt';
import { fromJS, Map } from 'immutable';

const MQTT_URL = 'http://127.0.0.1:4000';

const DEFAULT_MQTT_PUBLISH_OPTIONS = {
  retain: true,
};

class WithMqtt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: connect(MQTT_URL),
      topics: fromJS({})
    }
    window.c = this.state.client;
  }
  componentWillReceiveProps(props) {
    if (!props.topics.equals(this.props.topics)){
      if (this.props.topics && this.props.topics.count() > 0){
        this.state.client.unsubscribe(this.props.topics.toJS())
      }
      this.state.client.subscribe(props.topics.toJS())
      this.state.topics = fromJS({})
      this.setState({ topics: this.state.topics });
      console.log('connecting');
    }
  }
  componentWillMount() {
    this.state.client.subscribe(this.props.topics.toJS());
    this.state.client.on('message', (topic, message) => {
      try{
        const parsedMessage = JSON.parse(message);
        const newTopic = this.state.topics.set(topic, parsedMessage);
        this.setState({ topics: newTopic });
      }catch(error){
        console.error('error ', error);
      }
    });
  }
  componentWillUnmount() {
    this.state.client.end();
  }
  render() {
    const { topics, children } = this.props;
    const topicProps  = this.state.topics.reduce((theMap, topicValue, topic) => {
      theMap[topic] = topicValue;
      return theMap;
    } , {});

    const publish = (topic, message, options, callback) => this.state.client.publish(
      topic, message, (options ? options: DEFAULT_MQTT_PUBLISH_OPTIONS), callback);
    return children ? children(topicProps, publish) : null;
  }
}

WithMqtt.propTypes = {
  topics: PropTypes.object,
  children: PropTypes.func,
};

WithMqtt.defaultProps = {
  topics: fromJS({}),
}

export default WithMqtt;

