import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveContent } from './module';

import { tile as MqttTile, overlay as MqttOverlay } from './tiles/mqtt/display/MqttDisplay';
import { tile as MqttSliderTile, overlay as MqttSliderOverlay } from './tiles/mqtt/slider/MqttSlider';
import { tile as MqttButtonTile, overlay as  MqttButtonOverlay } from './tiles/mqtt/button/button';

import Mongo from './tiles/mongo/line/mongoTile';
import { overlay as MongoOverlay } from './tiles/mongo/line/mongoOverlay';

import Conditions from './tiles/Conditions';



export const tileNames = ['mqtt', 'dimmer', 'test', 'mongo', 'button', 'conditions'];

class Tile extends Component {
  render() {
    const { tileName, ...otherProps } = this.props;
    switch (tileName){
      case 'mqtt': {
        return <MqttTile {...otherProps} />
      }
      case 'dimmer': {
        return <MqttSliderTile {...otherProps} />
      }
      case 'mongo': {
        return <Mongo {...otherProps} />
      }
      case 'test': {
        return <div>hello world</div>
      }
      case 'button': {
        return <MqttButtonTile {...otherProps} />
      }
      case 'conditions': {
        return <Conditions />
      }

      default :{
        return <div>invalid tile</div>;
      }
    }
  }
}

class TileOverlay extends Component {
  render() {
    const { tileName, ...otherProps } = this.props;
    switch (tileName){
      case 'mqtt': {
        return <MqttOverlay {...otherProps} />
      }
      case 'dimmer': {
        return <MqttSliderOverlay {...otherProps} />
      }
      case 'mongo': {
        return <MongoOverlay {...otherProps} />
      }
      case 'test': {
        return <div>test overlay</div>
      }
      case 'button': {
        return <MqttButtonOverlay {...otherProps} />
      }
      case 'conditions' :{
        return <div>no overlay available</div>
      }
      default :{
        return <div>invalid tile</div>;
      }
    }
  }
}

const TileWrapper = ({children, tileKey, savedContent, saveContent }) => {
  console.log('tilekey ------- in tw ----  ', tileKey);
  const saveContentForTile = content => saveContent(tileKey, content);
  return children({ savedContent: savedContent.get(tileKey), saveContent: saveContentForTile });
}
TileWrapper.propTypes = {
  savedContent: PropTypes.object,
  saveContent: PropTypes.func,
};

const mapStateToProps = (state) => ({
  savedContent: state.getIn(['reducer', 'savedTileContent']),
});

const mapDispatchToProps = dispatch => ({
  saveContent: (tileKey, content) => dispatch(saveContent(tileKey, content))
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(TileWrapper);



export const tileNameToTile = {
  get: (tileName, tileKey) => {
    return (
      <Wrapper
        tileKey={tileKey}>
        {({savedContent, saveContent }) =>
          <Tile
            tileName={tileName}
            saveContent={saveContent}
            savedContent={savedContent}
          />}
      </Wrapper>)
  }
};

export const tileNameToContent = {
  get: (tileName, tileKey) => {
    return (
      <Wrapper tileKey={tileKey}>
        {({savedContent, saveContent}) => {
          console.log(saveContent);
          return (
            <TileOverlay
              saveContent={saveContent}
              savedContent={savedContent}
              tileName={tileName}/>
          )}
        }
      </Wrapper>)
  }
}