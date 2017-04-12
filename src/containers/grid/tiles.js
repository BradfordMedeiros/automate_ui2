import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveContent } from './module';

import { tile as MqttTile, overlay as MqttOverlay } from './tiles/mqtt/display/MqttDisplay';
import { tile as VerticalMqttSliderTile } from './tiles/mqtt/slider/VerticalSlider';
import { tile as HorizontalMqttSliderTile } from './tiles/mqtt/slider/HorizontalSlider';
import { overlay as MqttSliderOverlay } from './tiles/mqtt/slider/common/MqttSliderOverlay';
import { tile as MqttButtonTile, overlay as MqttButtonOverlay } from './tiles/mqtt/button/button';

import MongoLine from './tiles/mongo/line/mongoTile';
import MongoPie from './tiles/mongo/pie/MongoPie';
import { overlay as MongoOverlay } from './tiles/mongo/line/mongoOverlay';

import Conditions from './tiles/system/conditions/Conditions';
import ConditionsOverlay from './tiles/system/conditions/ConditionOverlay';

import States from './tiles/system/states/States';
import StatesOverlay from './tiles/system/states/StatesOverlay';

import Actions from './tiles/system/actions/Actions';
import ActionsOvelray from './tiles/system/actions/ActionsOverlay';

export const tileNames = [
  {
    label: 'Tools',
    children: [
      'Display',
      'Button',
      'Dimmer (Vertical)',
      'Dimmer (Horizontal)',
    ]
  },
  {
    label: 'Graphs',
    children: [
      'Line Chart',
      'Pie Chart',
    ]
  },
  {
    label: 'System',
    children: [
      'States',
      'Actions',
      'Conditions',
    ]
  },
  'Test',
];

const InnerTile = (props) => {
  const { tileName, ...otherProps } = props;
  switch (tileName) {
    case 'Display': {
      return <MqttTile {...otherProps} />;
    }
    case 'Dimmer (Vertical)': {
      return <VerticalMqttSliderTile {...otherProps} />;
    }
    case 'Dimmer (Horizontal)': {
      return <HorizontalMqttSliderTile {...otherProps} />
    }
    case 'Line Chart': {
      return <MongoLine {...otherProps} />;
    }
    case 'Pie Chart': {
      return <MongoPie {...otherProps} />;
    }
    case 'Test': {
      return <div>hello world</div>;
    }
    case 'Button': {
      return <MqttButtonTile {...otherProps} />;
    }
    case 'Conditions': {
      return <Conditions />;
    }
    case 'States': {
      return <States />;
    }
    case 'Actions': {
      return <Actions />;
    }
    default : {
      return <div>invalid tile</div>;
    }
  }
};

class Tile extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '2px ridge rgba(188, 171, 171, 0.4)',
          boxShadow: '0px 0px 0.5px 1px rgb(0, 0, 0)',
        }}
      >
        {InnerTile(this.props)}
      </div>
    );
  }
}

class TileOverlay extends Component {
  render() {
    const { tileName, ...otherProps } = this.props;
    switch (tileName) {
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
      case 'conditions' : {
        return <ConditionsOverlay />;
      }
      case 'states': {
        return <StatesOverlay />;
      }
      case 'actions': {
        return <ActionsOvelray />;
      }
      default : {
        return <div>invalid tile</div>;
      }
    }
  }
}

const TileWrapper = ({ children, tileKey, savedContent, saveContent }) => {
  console.log('tilekey ------- in tw ----  ', tileKey);
  const saveContentForTile = content => saveContent(tileKey, content);
  return children({ savedContent: savedContent.get(tileKey), saveContent: saveContentForTile });
};
TileWrapper.propTypes = {
  savedContent: PropTypes.object,
  saveContent: PropTypes.func,
};

const mapStateToProps = state => ({
  savedContent: state.getIn(['reducer', 'savedTileContent']),
});

const mapDispatchToProps = dispatch => ({
  saveContent: (tileKey, content) => dispatch(saveContent(tileKey, content)),
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(TileWrapper);


export const tileNameToTile = {
  get: (tileName, tileKey) => (
    <Wrapper
      tileKey={tileKey}
    >
      {({ savedContent, saveContent }) =>
        <Tile
          tileName={tileName}
          saveContent={saveContent}
          savedContent={savedContent}
        />}
    </Wrapper>),
};

export const tileNameToContent = {
  get: (tileName, tileKey) => (
    <Wrapper tileKey={tileKey}>
      {({ savedContent, saveContent }) => (
        <TileOverlay
          saveContent={saveContent}
          savedContent={savedContent}
          tileName={tileName}
        />
            )
        }
    </Wrapper>),
};
