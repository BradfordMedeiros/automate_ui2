import React, { Component, PropTypes } from 'react';
import WithMqtt from '../../../../../data/WithMqtt';
import { RaisedButton, TextField } from 'material-ui';
import { fromJS } from 'immutable';

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
            style={{ display: 'flex', width: '100%', height: 100 }}
          >
            <div
              style={{
                padding: 35,
                marginRight: 60,
                fontSize: 26,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <RaisedButton
                label="Publish"
                style={{ marginRight: 60 }}
                onClick={() => {
                  console.error('want to publish topic: ', topic, ' with value: ', this.state.topicValue.toString());
                  publish(topic, this.state.topicValue.toString());
                }}
              />
              <div
                style={{
                  height: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 40,
                }}
              >
                <TextField
                  value={this.state.topicValue}
                  onChange={(_, topicValue) => {
                    this.setState({
                      topicValue,
                    });
                  }}
                />
              </div>
            </div>
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