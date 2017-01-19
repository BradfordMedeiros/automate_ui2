
import React, { Component, PropTypes } from 'react';
import { fromJS } from 'immutable';

import { container as Appbar } from './components/appbar/Appbar.js';
import { container as Grid } from './containers/Grid';
import {  container as SelectionOverlay } from './components/SelectionOverlay/SelectionOverlay';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

import { container as AddGrid } from './components/addgrid/AddGrid';
import MinimalMenu from './components/menu/minimalMenu';
import { ActionHome } from 'material-ui/svg-icons';


class Layout extends Component {
  render()  {
    return (
      <div style={{ width: '100vw', height: '100vh', top: 0 , overflow: 'hidden' }}>
      <Appbar />
      <SelectionOverlay />
      <Grid />
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