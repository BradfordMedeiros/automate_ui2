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
    alignItems: 'flex-end',
    linearGradient: '(rgb(30, 30, 30),rgb(20,20,20))',
    background: 'rgb(20,20,20)',
    boxShadow: '0px 0px 1px 0.1px white inset',
  },

};


const getFillPercentage = (value, min, max) => {
  const adjustedValue = value - min;
  const adjustedMax = max - min;

  const fraction = adjustedValue / adjustedMax;
  return `${fraction * 100}%`

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

            const fillLevel = getFillPercentage(Number(values[topic]), Number(min), Number(max));


            return (
              <div style={{ width: '100%', margin: 2, boxShadow: '0px 0px 1px 1px rgb(20,20,20)' }}>
                <div
                  style={{
                    background: 'rgba(0,0,250,0.6)',
                    border: '1px solid rgb(80,80,80)',
                    width: '100%',
                    height: fillLevel,
                    transition: 'all .1s ease',
                  }}
                />
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
