import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import { List } from 'immutable';
import WithData from '../../../../../../../data/WithData';
import './style.css';

const WithMqtt = WithData.pubsub.WithMqtt;

class LightDimmerTile extends Component {
  getStyle = (axis) => {
    if (axis === 'y') {
      return { height: '90%' };
    }
    return { width: '90%' };
  }
  render() {
    const { savedContent, axis } = this.props;
    const { topic, min, max } = savedContent || { };

    return (
      <div className="slidertile">
        <WithMqtt topics={List()}>
          {(stuff, publish) => {
            const conversion = value => ((Number(max) - Number(min)) * Number(value)) + Number(min);
            return (
              <Slider
                onChange={(x, value) => {
                  publish(topic, `${conversion(value)}`);
                }}
                style={this.getStyle(axis)}
                axis={axis}
                defaultValue={0.5}
              />
            );
          }
          }
        </WithMqtt>
      </div>
    );
  }
}

LightDimmerTile.propTypes = {
  savedContent: PropTypes.object,
  axis: PropTypes.string,
};

export const tile = LightDimmerTile;
