import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import { fromJS } from 'immutable';
import WithData from '../../../../../data/WithData';

const WithMqtt = WithData.pubsub.WithMqtt;

class PublishMqttValue extends Component {
  state = {
    topicValue: '',
  }
  render() {
    const { topic } = this.props;
    return (
      <WithMqtt
        topics={fromJS(topic ? [topic] : [])}
      >
        {(topics, publish) => (
          <div
            style={{ display: 'flex', width: '100%', height: 100, flexDirection: 'column' }}
          >
            <TextField
              style={{ marginLeft: '8%', width: '80%', marginRight: '8%' }}
              value={this.state.topicValue}
              inputStyle={{ textAlign: 'center' }}
              onChange={(_, topicValue) => {
                this.setState({
                  topicValue,
                });
              }}
            />
            <RaisedButton
              fullWidth
              primary
              disabled={this.state.topicValue === undefined || this.state.topicValue === ''}
              label="Publish"
              onClick={() => {
                publish(topic, this.state.topicValue.toString());
              }}
            />
          </div>
          )}
      </WithMqtt>
    );
  }
}

PublishMqttValue.propTypes = {
  topic: PropTypes.string,
};

export default PublishMqttValue;
