import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { container as Appbar } from './components/appbar/Appbar.js';

import { container as Grid } from './components/Grid/Grid.js';
import {  container as SelectionOverlay } from './components/SelectionOverlay/SelectionOverlay';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { fromJS } from 'immutable';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

const initialState = fromJS({
  menuExpanded: false,
  isLocked: true,
});

export const expandMenu = isExpanded => {
  return ({
    type: 'expandMenu',
    isExpanded,
  });
};

export const lock = isLocked => {
  return ({
    type: 'lockGrid',
    isLocked,
  });
};


const reducer = (state = initialState, action) => {
  console.log('got action');
  switch(action.type){
    case 'expandMenu': {
      return state.set('menuExpanded', action.isExpanded).set('isLocked', true);
    }
    case 'lockGrid': {
      return state.set('isLocked', action.isLocked);
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(createLogger()));

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store} >
      <div style={{ width: '100vw', height: '100vh', top: 0 , overflow: 'hidden' }}>
        <Appbar />
        <SelectionOverlay />
        <Grid />
        <Menu />
        <Footer />
      </div>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
