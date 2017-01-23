import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import { DeviceBrightnessHigh, DeviceBrightnessLow } from 'material-ui/svg-icons';
import './style.css';

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};


class LightDimmerTile extends Component {
  render() {
    return (
      <div className="slidertile">
        <div className="high">&#128262;</div>
        <Slider style={{height: '100%', left: '50%'}} axis="y" defaultValue={0.5} />
        <div className="low">&#128261;</div>
      </div>
    );
  }
}

LightDimmerTile.propTypes = {
};


class LightDimmerOverlay extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export const tile =  LightDimmerTile;
export const overlay = LightDimmerOverlay;