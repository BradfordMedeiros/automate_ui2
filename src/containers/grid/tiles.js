import React, { Component, PropTypes } from 'react';
import Wrapper from './TileWrapper';

import { tile as MqttTile, overlay as MqttOverlay } from './tiles/mqtt/display/MqttDisplay';

import { tile as VerticalMqttSliderTile } from './tiles/mqtt/slider/VerticalSlider';
import { tile as HorizontalMqttSliderTile } from './tiles/mqtt/slider/HorizontalSlider';
import { overlay as MqttSliderOverlay } from './tiles/mqtt/slider/common/MqttSliderOverlay';

import { tile as MqttButtonTile } from './tiles/mqtt/button/button';
import { overlay as MqttButtonOverlay } from './tiles/mqtt/button/buttonOverlay';

import { tile as IFrameTile } from './tiles/misc/IFrame';
import { overlay as IFrameOverlay } from './tiles/misc/IFrameOverlay';

import MongoLine from './tiles/graphs/line/mongoTile';
import MongoPie from './tiles/graphs/pie/MongoPie';
import MongoRadar from './tiles/graphs/radar/MongoRadar';
import MongoBar from './tiles/graphs/bar/MongoBar';

import Conditions from './tiles/system/conditions/Conditions';
import ConditionsOverlay from './tiles/system/conditions/ConditionOverlay';

import States from './tiles/system/states/States';
import Actions from './tiles/system/actions/Actions';

import Sequences from './tiles/system/sequences/Sequences';
import SequenceBuilder from '../system/SequencesBuilder';

import ActionBuilder from '../system/ActionsBuilder';
import StateBuilder from '../system/StatesBuilder';

import SingleFieldOverlay from './tiles/common/overlays/SingleFieldOverlay';

export const tileNames = [
  {
    label: 'Core',
    children: [
      'System - States',
      'System - Actions',
      // 'System - Conditions',
      'Engines - Sequences',
    ],
  },
  {
    label: 'Controls',
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
    label: 'Misc',
    children: [
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
    case 'Sequences': {
      return <Sequences />;
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

InnerTile.propTypes = {
  tileName: PropTypes.string.isRequired,
};

class Tile extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid rgb(30,30,30)',
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
        return <SingleFieldOverlay fieldName="Mqtt topic" {...otherProps} />;
      }
      case 'Pie Chart': {
        return <SingleFieldOverlay fieldName="Mqtt topic" {...otherProps} />;
      }
      case 'Radar Chart': {
        return <SingleFieldOverlay fieldName="Mqtt topic" {...otherProps} />;
      }
      case 'Bar Graph': {
        return <SingleFieldOverlay fieldName="Mqtt topic" {...otherProps} />;
      }
      case 'IFrame': {
        return <IFrameOverlay {...otherProps} />;
      }
      case 'Button': {
        return <MqttButtonOverlay {...otherProps} />;
      }
      case 'Conditions' : {
        return <ConditionsOverlay {...otherProps} />;
      }
      case 'Sequences': {
        return <SequenceBuilder />;
      }
      case 'States': {
        return <StateBuilder />;
      }
      case 'Actions': {
        return <ActionBuilder />;
      }
      default : {
        return <div>invalid tile</div>;
      }
    }
  }
}

TileOverlay.propTypes = {
  tileName: PropTypes.string.isRequired,
  saveContent: PropTypes.func.isRequired,
};


export const tileNameToTile = {
  get: (tileName, tileKey, isEditing) => (
    <Wrapper
      tileKey={tileKey}
    >
      {({ savedContent, saveContent }) =>
        (<Tile
          isEditing={isEditing}
          tileName={tileName}
          saveContent={saveContent}
          savedContent={savedContent}
        />)}
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
        />)
      }
    </Wrapper>),
};
