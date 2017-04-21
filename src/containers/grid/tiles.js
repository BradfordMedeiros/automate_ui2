import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveContent } from './module';

import { tile as MqttTile, overlay as MqttOverlay } from './tiles/mqtt/display/MqttDisplay';
import { tile as VerticalMqttSliderTile } from './tiles/mqtt/slider/VerticalSlider';
import { tile as HorizontalMqttSliderTile } from './tiles/mqtt/slider/HorizontalSlider';
import { overlay as MqttSliderOverlay } from './tiles/mqtt/slider/common/MqttSliderOverlay';
import { tile as MqttButtonTile, overlay as MqttButtonOverlay } from './tiles/mqtt/button/button';
import { tile as IFrameTile } from './tiles/misc/IFrame';

import MongoLine from './tiles/graphs/line/mongoTile';
import MongoPie from './tiles/graphs/pie/MongoPie';
import MongoRadar from './tiles/graphs/radar/MongoRadar';
import MongoBar from './tiles/graphs/bar/MongoBar';
import { overlay as MongoOverlay } from './tiles/graphs/line/mongoOverlay';

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
    ],
  },
  {
    label: 'Graphs',
    children: [
      'Bar Graph',
      'Line Chart',
      'Pie Chart',
      'Radar Chart',
    ],
  },
  {
    label: 'System',
    children: [
      'States',
      'Actions',
      'Conditions',
    ],
  },
  {
    label: 'Misc',
    children: [
      'Test',
      'IFrame',
    ],
  },
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
      return <HorizontalMqttSliderTile {...otherProps} />;
    }
    case 'Line Chart': {
      return <MongoLine {...otherProps} />;
    }
    case 'Pie Chart': {
      return <MongoPie {...otherProps} />;
    }
    case 'Radar Chart': {
      return <MongoRadar {...otherProps} />;
    }
    case 'Bar Graph': {
      return <MongoBar {...otherProps} />;
    }
    case 'Test': {
      return <div>hello world</div>;
    }
    case 'IFrame' : {
      return <IFrameTile {...otherProps} />;
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
          border: '1px solid rgb(120, 110, 110)',
          boxShadow: '0px 0px 10px 0.1px black',

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
      case 'Display': {
        return <MqttOverlay {...otherProps} />;
      }
      case 'Dimmer (Vertical)': {
        return <MqttSliderOverlay {...otherProps} />;
      }
      case 'Dimmer (Horizontal)': {
        return <MqttSliderOverlay {...otherProps} />;
      }
      case 'Line Chart': {
        return <MongoOverlay {...otherProps} />;
      }
      case 'Pie Chart': {
        return <MongoOverlay {...otherProps} />;
      }
      case 'Radar Chart': {
        return <MongoOverlay {...otherProps} />;
      }
      case 'Bar Graph': {
        return <MongoOverlay {...otherProps} />;
      }
      case 'Test': {
        return <div>test overlay</div>;
      }
      case 'IFrame': {
        return <MqttOverlay {...otherProps} />;
      }
      case 'Button': {
        return <MqttButtonOverlay {...otherProps} />;
      }
      case 'Conditions' : {
        return <ConditionsOverlay />;
      }
      case 'States': {
        return <StatesOverlay />;
      }
      case 'Actions': {
        return <ActionsOvelray />;
      }
      default : {
        return <div>invalid tile</div>;
      }
    }
  }
}

const TileWrapper = ({ children, tileKey, savedContent, saveContent }) => {
  const saveContentForTile = content => saveContent(tileKey, content);
  return children({ savedContent: savedContent.get(tileKey), saveContent: saveContentForTile });
};
TileWrapper.propTypes = {
  savedContent: PropTypes.object,
  saveContent: PropTypes.func,
};

const mapStateToProps = state => ({
  savedContent: state.getIn(['gridReducer', 'savedTileContent']),
});

const mapDispatchToProps = dispatch => ({
  saveContent: (tileKey, content) => dispatch(saveContent(tileKey, content)),
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(TileWrapper);


export const tileNameToTile = {
  get: (tileName, tileKey, isEditing) => (
    <Wrapper
      tileKey={tileKey}
    >
      {({ savedContent, saveContent }) =>
        <Tile
          isEditing={isEditing}
          tileName={tileName}
          saveContent={saveContent}
          savedContent={savedContent}
        />}
    </Wrapper>),
};

export const tileNameToContent = {
  get: (tileName, tileKey, isEditing) => (
    <Wrapper tileKey={tileKey}>
      {({ savedContent, saveContent }) => (
        <TileOverlay
          isEditing={isEditing}
          saveContent={saveContent}
          savedContent={savedContent}
          tileName={tileName}
        />
            )
        }
    </Wrapper>),
};
