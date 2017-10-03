import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import WithData from '../../../../../../data/WithData';

const WithMqtt = WithData.pubsub.WithMqtt;

const style = {
  background: 'rgb(60,60,60)',
  height: '90%',
  width: '80%',
  marginLeft: '10%',
  border: '1px dotted black',
  marginTop: '2%',
  position: 'fixed',
  borderRadius: '50%',
  boxShadow: '0px 1px 1px 0.5px rgba(8, 8, 45, 0.28)',
};

class MqttTile extends Component {
  render() {
    const { savedContent } = this.props;
    const content = (savedContent && savedContent.topic) ? List([savedContent.topic]) : List();
    return (
      <WithMqtt topics={content} >
        {(stuff, publish) => (
          <div
            style={style}
            onClick={() => {
              if (savedContent){
                publish(savedContent.topic, savedContent.value)
              }
            }} />
        )}
      </WithMqtt>
    );
  }
}

MqttTile.propTypes = {
  savedContent: PropTypes.any,
};

export const tile = MqttTile;
