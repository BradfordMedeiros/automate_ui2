import React, { PropTypes } from 'react';
import WithMqtt from '../../../../data/WithMqtt';
import { RaisedButton,  TextField } from 'material-ui';
import { fromJS } from 'immutable';

const PublishMqttValue = ({ topic }) => (
  <WithMqtt
    topics={fromJS(topic ? [topic]: [])}
  >
    {(topics) => {
      return (
        <div
          style={{ display: 'flex', width: '100%', height: 100 }}
        >
          <div style={{
            padding: 35,
            marginRight: 60,
            fontSize: 26,
            display: 'flex',
            alignItems: 'center',
          }}>
            <RaisedButton
              label="Publish"
              style={{ marginRight: 60 }}
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
              <TextField />
            </div>
          </div>
        </div>
      )
    }}
  </WithMqtt>
);

PublishMqttValue.propTypes = {
  topic: PropTypes.string,
};

export default PublishMqttValue;