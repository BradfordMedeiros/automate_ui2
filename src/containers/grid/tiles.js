import React, { Component, PropTypes } from 'react';
import Wrapper from './TileWrapper';

import { tile as MqttTile, overlay as MqttOverlay } from './tiles/mqtt/display/MqttDisplay';

import { tile as VerticalMqttSliderTile } from './tiles/mqtt/slider/VerticalSlider';
import { tile as HorizontalMqttSliderTile } from './tiles/mqtt/slider/HorizontalSlider';
import { overlay as MqttSliderOverlay } from './tiles/mqtt/slider/common/MqttSliderOverlay';
import { tile as MqttButtonTile } from './tiles/mqtt/button/button';
import { overlay as MqttButtonOverlay } from './tiles/mqtt/button/buttonOverlay';
import { tile as MqttGauge } from './tiles/mqtt/guage/Gauge';
import { overlay as MqttGaugeOverlay } from './tiles/mqtt/guage/GaugeOverlay';

import { tile as IFrameTile } from './tiles/misc/iframe/IFrame';
import { overlay as IFrameOverlay } from './tiles/misc/iframe/IFrameOverlay';
import { tile as LabelTile } from './tiles/misc/label/Label';
import { overlay as LabelOverlay } from './tiles/misc/label/LabelOverlay';
import { tile as WhitespaceTile } from './tiles/misc/whitespace/WhiteSpace';
import { overlay as WhitespaceOverlay } from './tiles/misc/whitespace/WhiteSpaceOverlay';

import MongoLine from './tiles/graphs/line/mongoTile';
import MongoPie from './tiles/graphs/pie/MongoPie';
import MongoRadar from './tiles/graphs/radar/MongoRadar';
import MongoBar from './tiles/graphs/bar/MongoBar';


import States from './tiles/system/states/States';
import Actions from './tiles/system/actions/Actions';
import Conditions from './tiles/system/conditions/Conditions';
import Sequences from './tiles/system/sequences/Sequences';

import ActionBuilder from '../system/base/ActionsBuilder';
import StateBuilder from '../system/base/StatesBuilder';
import ConditionBuilder from '../system/base/ConditionsBuilder';
import RuleBuilder from '../system/engines/RuleBuilder';
import SequenceBuilder from '../system/engines/SequencesBuilder';
import ScheduleBuilder from '../system/engines/ScheduleBuilder';

import SingleFieldOverlay from './tiles/common/overlays/SingleFieldOverlay';

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
  const { tileName, ...otherProps } = props;
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
