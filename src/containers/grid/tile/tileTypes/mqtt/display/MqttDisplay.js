import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import MqttOverlay from '../../common/overlays/SingleFieldOverlay';
import WithData from '../../../../../../data/WithData';
import './style.css';

const WithMqtt = WithData.pubsub.WithMqtt;

class MqttTile extends Component {
  render() {
    const { savedContent } = this.props;
    const content = savedContent ? List([savedContent]) : List();
    return (
      <div className="tiles_thermometer">
        <WithMqtt topics={content} >
          {
              (stuff) => {
                const value = stuff[savedContent];
                return (
                  <div>
                    <div className="title">{savedContent}</div>
                    <div className="number" style={{ color: 'grey' }}>
                      {JSON.stringify(value)}
                    </div>
                  </div>
                );
              }
            }
        </WithMqtt>
      </div>
    );
  }
}

MqttTile.propTypes = {
  savedContent: PropTypes.any,
};


export const tile = MqttTile;
export const overlay = props => <MqttOverlay fieldName={'mqtt topic'} {...props} />;
