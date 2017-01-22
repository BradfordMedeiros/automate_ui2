
import React, { Component, PropTypes } from 'react';
import { fromJS, List, Map } from 'immutable';
import { container as Appbar } from './containers/Appbar';
import { container as Grid } from './containers/Grid';
import {  container as SelectionOverlay } from './components/SelectionOverlay/SelectionOverlay';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

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

class Layout extends Component {
  render()  {
    return (
      <div style={{ width: '100vw', height: '100vh', top: 0 , overflow: 'hidden' }}>
      <Appbar />
      <SelectionOverlay />
      <Grid layout={layout} tileNames={tileNames} tileNameToTile={tileNameToTile} style={{ top: 50, bottom: 10, left: 210, right: 0 }} />
      <Menu
        buttonLabels={fromJS(['home','creation','store','disconnect'])}
        style={{ width: 210, height: '94%', position: 'fixed', left: 5, top: 55, zIndex: 500 }}
      />
      <Footer />
    </div>
    )
  }
}

export default Layout;