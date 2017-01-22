
import React, { Component, PropTypes } from 'react';
import { fromJS, List, Map } from 'immutable';
import { container as Appbar } from './containers/Appbar';
import { container as Grid } from './containers/Grid';
import {  container as SelectionOverlay } from './containers/Overlay';
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

const styles = {
  app : { width: '100vw', height: '100vh', margin: 0, padding: 0, left: 0, top: 0 , overflow: 'hidden' },
  appbar: { height: 50, width: '100%', top: 0, zIndex: 200 },
  grid: { top: 50, bottom: 10, left: 210, right: 0 },
  menu: { width: 210, height: '94%', position: 'fixed', left: 1, top: 48, zIndex: 500 },
};

class Layout extends Component {
  render()  {
    return (
      <div style={styles.app}>
        <Appbar style={styles.appbar} />
        <Menu buttonLabels={fromJS(['home','creation','store','disconnect'])} style={styles.menu} />
        <Grid layout={layout} tileNames={tileNames} tileNameToTile={tileNameToTile} style={styles.grid} />
        <SelectionOverlay  />
        <Footer />
      </div>
    )
  }
}

export default Layout;

//
//

