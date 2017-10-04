import React, { Component, PropTypes } from 'react';
import Wrapper from './components/TileWrapper';

import { tile as MqttTile, overlay as MqttOverlay } from './tileTypes/mqtt/display/MqttDisplay';

import { tile as VerticalMqttSliderTile } from './tileTypes/mqtt/slider/VerticalSlider';
import { tile as HorizontalMqttSliderTile } from './tileTypes/mqtt/slider/HorizontalSlider';
import { overlay as MqttSliderOverlay } from './tileTypes/mqtt/slider/common/MqttSliderOverlay';
import { tile as MqttButtonTile } from './tileTypes/mqtt/button/button';
import { overlay as MqttButtonOverlay } from './tileTypes/mqtt/button/buttonOverlay';
import { tile as MqttGauge } from './tileTypes/mqtt/guage/Gauge';
import { overlay as MqttGaugeOverlay } from './tileTypes/mqtt/guage/GaugeOverlay';

import { tile as IFrameTile } from './tileTypes/misc/iframe/IFrame';
import { overlay as IFrameOverlay } from './tileTypes/misc/iframe/IFrameOverlay';
import { tile as LabelTile } from './tileTypes/misc/label/Label';
import { overlay as LabelOverlay } from './tileTypes/misc/label/LabelOverlay';
import { tile as WhitespaceTile } from './tileTypes/misc/whitespace/WhiteSpace';
import { overlay as WhitespaceOverlay } from './tileTypes/misc/whitespace/WhiteSpaceOverlay';

import MongoLine from './tileTypes/graphs/line/mongoTile';
import MongoPie from './tileTypes/graphs/pie/MongoPie';
import MongoRadar from './tileTypes/graphs/radar/MongoRadar';
import MongoBar from './tileTypes/graphs/bar/MongoBar';


import States from './tileTypes/system/states/States';
import Actions from './tileTypes/system/actions/Actions';
import Conditions from './tileTypes/system/conditions/Conditions';
import Sequences from './tileTypes/system/sequences/Sequences';

import ActionBuilder from '../../system/base/ActionsBuilder';
import StateBuilder from '../../system/base/StatesBuilder';
import ConditionBuilder from '../../system/base/ConditionsBuilder';
import RuleBuilder from '../../system/engines/RuleBuilder';
import SequenceBuilder from '../../system/engines/SequencesBuilder';
import ScheduleBuilder from '../../system/engines/ScheduleBuilder';

import SingleFieldOverlay from './tileTypes/common/overlays/SingleFieldOverlay';

export const tileNames = [
  {
    label: 'Core',
    children: [
      'System - States',
      'System - Actions',
      'System - Conditions',
      'Engines - Rules',
      'Engines - Sequences',
      'Engines - Schedules',
    ],
  },
  {
    label: 'Controls',
    children: [
      'Display',
      'Gauge',
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
      'Label',
      'Whitespace',
    ],
  },
];

const InnerTile = (props) => {
  const { tileName, isCustom, url,  ...otherProps } = props;
  if (isCustom){
    return (
      <iframe
        alt="Cannot load custom content"
        src={`http://localhost:9000/${url}`}
        allowFullScreen
        style={{ border: '0 none', height: '100%', width: '100%', pointerEvents: otherProps.isEditing ? 'none' : undefined }}
      />
    )
  }
  switch (tileName) {
    case 'Display': {
      return <MqttTile {...otherProps} />;
    }
    case 'Gauge': {
      return <MqttGauge {...otherProps} />
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
    case 'Whitespace': {
      return <WhitespaceTile {...otherProps} />
    }
    case 'Label': {
      return <LabelTile {...otherProps} />
    }
    case 'Button': {
      return <MqttButtonTile {...otherProps} />;
    }
    case 'System - States': {
      return <States {...otherProps} />;
    }
    case 'System - Actions': {
      return <Actions {...otherProps} />;
    }
    case 'System - Conditions': {
      return <Conditions {...otherProps} />
    }
    case 'Engines - Rules': {
      return <div>ruless title here</div>;
    }
    case 'Engines - Sequences': {
      return <Sequences {...otherProps} />;
    }
    case 'Engines - Schedules': {
      return <div>schedules tile here</div>;
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
      case 'Gauge': {
        return <MqttGaugeOverlay {...otherProps} />;
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
      case 'Label': {
        return <LabelOverlay {...otherProps} />
      }
      case 'Whitespace': {
        return <WhitespaceOverlay {...otherProps} />
      }
      case 'Button': {
        return <MqttButtonOverlay {...otherProps} />;
      }
      case 'System - States': {
        return <StateBuilder />;
      }
      case 'System - Actions': {
        return <ActionBuilder />;
      }
      case 'System - Conditions': {
        return <ConditionBuilder />;
      }
      case 'Engines - Rules': {
        return <RuleBuilder />;
      }
      case 'Engines - Sequences': {
        return <SequenceBuilder />;
      }
      case 'Engines - Schedules': {
        return <ScheduleBuilder />
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
  get: (tileName, tileKey, isEditing, { isCustom = false, url = undefined} = {}) => (
    <Wrapper
      tileKey={tileKey}
    >
      {({ savedContent, saveContent }) =>
        (<Tile
          isCustom={isCustom}
          url={url}
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
