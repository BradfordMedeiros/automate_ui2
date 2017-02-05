import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { tile as TemperatureTile, overlay as TemperatureOverlay } from './tiles/temperature/Temperature';
import { tile as DimmerTile, overlay as DimmerOverlay } from './tiles/lightdimmer/LightDimmer';
import WithMqtt from './mqtt/WithMqtt';

export const tileNames = List(['a','b','c']);

export const tileNameToTile = Map({
  a: <WithMqtt topics={List(['temperature'])}>
      { ({ temperature }) => <TemperatureTile temperature={temperature}/> }
     </WithMqtt>,
  b: <DimmerTile />,
  c: <DimmerTile />,
  d: <DimmerTile />,
  e: <WithMqtt topics={List(['temperature'])}>
    { ({ temperature }) => <TemperatureTile temperature={temperature}/> }
  </WithMqtt>,

});

export const tileNameToContent = Map({
  a: <TemperatureOverlay />,
  b: <DimmerOverlay />,
  c: <div style={{ width: '100%', height: '100%', background: 'silver' }}>tile content c</div>,
  undefined: <div>no matching tile</div>
});

