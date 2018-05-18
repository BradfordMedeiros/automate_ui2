import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'mqtt';
import { fromJS } from 'immutable';

const DEFAULT_MQTT_PUBLISH_OPTIONS = {
  retain: true,
};

const getWithMqtt = (mqttUrl) => {
  class WithMqtt extends Component {
    constructor(props) {
      super(props);
      this.state = {
        client: connect(mqttUrl),
        topics: fromJS({}),
        newTopic: undefined,
      };
    }

    componentWillMount() {
      this.state.client.subscribe(this.props.topics.toJS());
      this.state.client.on('message', (topic, message) => {
        try {
          const parsedMessage = message.toString();
          const newTopic = this.state.topics.set(topic, parsedMessage);
          this.setState({ topics: newTopic, newTopic: { topic, message: parsedMessage } });
        } catch (error) {
          console.error('error ', error); // eslint-disable-line no-console
        }
      });
    }

    componentWillReceiveProps(props) {
      if (!props.topics.equals(this.props.topics)) {
        if (this.props.topics && this.props.topics.count() > 0) {
          this.state.client.unsubscribe(this.props.topics.toJS());
        }
        this.state.client.subscribe(props.topics.toJS());
        this.state.topics = fromJS({});
        this.setState({ topics: this.state.topics });
      }
    }

    componentWillUnmount() {
      this.state.client.end();
    }

    render() {
      const { children } = this.props;

      const topicProps = this.state.topics.reduce((theMap, topicValue, topic) => {
        theMap[topic] = topicValue; // eslint-disable-line no-param-reassign
        return theMap;
      }, {});

      const publish = (topic, message, options, callback) => this.state.client.publish(
        topic, message, (options || DEFAULT_MQTT_PUBLISH_OPTIONS), callback);
      return children ? children(topicProps, publish, this.state.newTopic) : null;
    }
  }

  WithMqtt.propTypes = {
    topics: PropTypes.object,
    children: PropTypes.func,
  };

  WithMqtt.defaultProps = {
    topics: fromJS({}),
    children: undefined,
  };
  return WithMqtt;
};


const WithMqtt = getWithMqtt;
export default WithMqtt;
