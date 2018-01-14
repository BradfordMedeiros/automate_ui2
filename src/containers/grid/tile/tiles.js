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

import { tile as CustomTile } from './tileTypes/custom/CustomTile';
import { overlay as CustomOverlay }from './tileTypes/custom/CustomOverlay';

import { tile as IFrameTile } from './tileTypes/misc/iframe/IFrame';
import { overlay as IFrameOverlay } from './tileTypes/misc/iframe/IFrameOverlay';
import { tile as LabelTile } from './tileTypes/misc/label/Label';
import { overlay as LabelOverlay } from './tileTypes/misc/label/LabelOverlay';
import { tile as WhitespaceTile } from './tileTypes/misc/whitespace/WhiteSpace';
import { overlay as WhitespaceOverlay } from './tileTypes/misc/whitespace/WhiteSpaceOverlay';

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

import EventLog from '../../../containers/EventLog';
import Environment from '../../../containers/Environment';

import SingleFieldOverlay from './tileTypes/common/overlays/SingleFieldOverlay';

// this is lame, but message event must be global.  We register that in tiles.js
// and then we reemit that event here
window.addEventListener("message", event => {
  const data = event.data;
  const saveContentEvent = new Event(`automate_save_content:${data.uuid}`);
  saveContentEvent.uuid = data.uuid;
  saveContentEvent.data = data.value;
  window.dispatchEvent(saveContentEvent);
}, false);



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
      'Event Log',
      'Environment',
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
    label: 'Misc',
    children: [
      'IFrame',
      'Label',
      'Whitespace',
    ],
  },
];


class InnerTile extends Component {
  render() {
    const {tileName, isCustom, url, ...otherProps} = this.props;
    if (isCustom) {
      return <CustomTile url={url} {...otherProps} />;
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
      case 'Event Log': {
        return <EventLog />
      }
      case 'Environment': {
        return <Environment />
      }
      default : {
        return <div>invalid tile</div>;
      }


    }
  }
}



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
        <InnerTile {...this.props} />
      </div>
    );
  }
}

class TileOverlay extends Component {
  render() {
    const { tileName, ...otherProps } = this.props;
    if (typeof(tileName) === typeof({})){
      return (
        <CustomOverlay tileName={tileName} {...otherProps} />
      );
    }
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
  isCustom: PropTypes.bool,
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
          tileKey={tileKey}
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
          tileKey={tileKey}
        />)
      }
    </Wrapper>),
};
