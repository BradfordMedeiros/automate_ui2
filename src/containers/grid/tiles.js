import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveContent } from './module';

import { tile as MqttTile, overlay as MqttOverlay } from './tiles/mqtt/display/MqttDisplay';
import { tile as MqttSliderTile, overlay as MqttSliderOverlay } from './tiles/mqtt/slider/MqttSlider';
import { tile as MqttButtonTile, overlay as  MqttButtonOverlay } from './tiles/mqtt/button/button';

import MongoLine from './tiles/mongo/line/mongoTile';
import MongoPie from './tiles/mongo/pie/MongoPie';
import { overlay as MongoOverlay } from './tiles/mongo/line/mongoOverlay';

import Conditions from './tiles/system/conditions/Conditions';
import ConditionsOverlay from './tiles/system/conditions/ConditionOverlay';

import States from './tiles/system/states/States';
import StatesOverlay from './tiles/system/states/StatesOverlay';

import Actions from './tiles/system/actions/Actions';
import ActionsOvelray from './tiles/system/actions/ActionsOverlay';

export const tileNames = ['mqtt', 'dimmer', 'test', 'mongo line', 'mongo pie', 'button', 'states', 'actions', 'conditions'];

class Tile extends Component {
    render() {
        const { tileName, ...otherProps } = this.props;
        switch (tileName){
        case 'mqtt': {
            return <MqttTile {...otherProps} />;
        }
        case 'dimmer': {
            return <MqttSliderTile {...otherProps} />;
        }
        case 'mongo line': {
            return <MongoLine {...otherProps} />;
        }
        case 'mongo pie': {
            return <MongoPie {...otherProps} />;
        }
        case 'test': {
            return <div>hello world</div>;
        }
        case 'button': {
            return <MqttButtonTile {...otherProps} />;
        }
        case 'conditions': {
            return <Conditions />;
        }
        case 'states': {
            return <States />;
        }
        case 'actions': {
            return <Actions />;
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
            return <MqttOverlay {...otherProps} />;
        }
        case 'dimmer': {
            return <MqttSliderOverlay {...otherProps} />;
        }
        case 'mongo line': {
            return <MongoOverlay {...otherProps} />;
        }
        case 'mongo pie': {
            return <MongoOverlay {...otherProps} />;
        }
        case 'test': {
            return <div>test overlay</div>;
        }
        case 'button': {
            return <MqttButtonOverlay {...otherProps} />;
        }
        case 'conditions' :{
            return <ConditionsOverlay />;
        }
        case 'states': {
            return <StatesOverlay />;
        }
        case 'actions': {
            return <ActionsOvelray />;
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
};
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
      </Wrapper>);
    }
};

export const tileNameToContent = {
    get: (tileName, tileKey) => {
        return (
      <Wrapper tileKey={tileKey}>
        {({savedContent, saveContent}) => {
            return (
            <TileOverlay
              saveContent={saveContent}
              savedContent={savedContent}
              tileName={tileName}/>
            );}
        }
      </Wrapper>);
    }
};