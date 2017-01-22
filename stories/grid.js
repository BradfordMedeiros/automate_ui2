import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {muiTheme } from 'storybook-addon-material-ui';
import { List, Map } from 'immutable';
import Grid from '../src/components/grid/Grid';


const layout = List([
  {i: 'a', x: 0, y: 0, w: 3, h: 7, static: true},
  {i: 'b', x: 6, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  {i: 'c', x: 4, y: 0, w: 1, h: 2}
]);

const tileNames = List(['a','b','c']);

const tileNameToTile = Map({
  a: <div>tile a</div>,
  b: <div>tile b</div>,
  c: <div>tile ---c</div>,
});

const tileNameToFullScreen =  Map({
  a: <div>this is fullscreen a</div>,
  b: <div>this is fullscreeb b</div>,
  c: <div>woo oo woo</div>
});


storiesOf('grid')
  .addDecorator(muiTheme(darkBaseTheme))
  .add('basic', () => (
    <Grid onGridItemClick={x => console.log( x, 'clicked')} layout={layout} tileNames={tileNames} tileNameToTile={tileNameToTile} />
  ));


