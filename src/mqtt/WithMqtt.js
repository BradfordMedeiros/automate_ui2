import React, { Component, PropTypes } from 'react';
import { connect } from 'mqtt';
import { fromJS } from 'immutable';

const MQTT_URL = 'http://localhost:4000';

class WithMqtt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: connect(MQTT_URL),
      topics: fromJS({})
    }
  }
  componentWillReceiveProps(props) {
    if (!props.topics.equal(this.props.topics)){
      this.state.client.unsubscribe(this.state.topics.toJS())
      this.state.client.subscribe(props.topics.toJS())
      this.state.topics = fromJS({})
      this.setState({ topics: this.state.topics });
    }
  }
  componentWillMount() {
    this.state.client.subscribe(this.props.topics.toJS());
    this.state.client.on('message', (topic, message) => {
      console.log('topic: ', topic);
      console.log('message: ', message);
      this.setState({ topics: this.state.topics.set(topic, message.toString()) });
    });
  }
  componentWillUnmount() {
    this.state.client.end();
  }
  render() {
    const { topics } = this.props;
    window.state = this.state;
    return <div>{topics.map(topic => <div style={{ color: 'white' }}>{topic}:  {(this.state.topics.get(topic) || "no value")}</div>)}</div>
  }
}

WithMqtt.propTypes = {
  topics: PropTypes.object,
};

export default WithMqtt;