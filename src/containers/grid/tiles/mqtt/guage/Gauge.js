import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import { List } from 'immutable';
import WithData from '../../../../../data/WithData';

const WithMqtt = WithData.pubsub.WithMqtt;

const styles = {
  outer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    linearGradient: '(rgb(30, 30, 30),rgb(20,20,20))',
    background: 'rgb(20,20,20)',
    boxShadow: '0px 0px 1px 0.1px white inset',
  },

};

const NUM_BARS = 20;

const getFillLevel = (value, min, max) => {
  const adjustedValue = value - min;
  const adjustedMax = max - min;

  return Math.floor((adjustedValue / adjustedMax) * NUM_BARS);

};

class GaugeTile extends Component {
  render() {
    const { savedContent, axis } = this.props;
    const { topic, min, max } = savedContent || { };
    const topicsToSubscribe = topic ? List([topic]): List();

    return (
      <div style={styles.outer}>
        <WithMqtt topics={topicsToSubscribe}>
          {(values, publish) => {

            const fillLevel = getFillLevel(Number(values[topic]), Number(min), Number(max));
            console.log('min: ', Number(min));
            console.log('max: ', Number(max));
            console.log(fillLevel);

            return (
              <div style={{ width: '100%', margin: 8, boxShadow: '0px 0px 1px 1px rgb(20,20,20)' }}>
                {[...Array(NUM_BARS)].map((element, index) => (
                  <div
                    style={{
                      border: '1px solid rgb(80,80,80)',
                      boxShadow: (NUM_BARS - index)  <= fillLevel ? '0px 0px 28px 1px rgba(8, 123, 255, 1) inset': undefined,
                      width: '100%',
                      height: 16,
                      transition: 'all .1s ease',
                    }}
                  />
                ))}
              </div>
            );
          }}
        </WithMqtt>
      </div>
    );
  }
}

GaugeTile.propTypes = {
  savedContent: PropTypes.object,
};

export const tile = GaugeTile;
