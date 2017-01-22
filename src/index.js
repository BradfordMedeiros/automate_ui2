import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';

import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { fromJS, List } from 'immutable';

import createRoutes from './Routing';
import Layout from './layout';

const initialState = fromJS({
  menuExpanded: false,
  addGridExpanded: false,
  isLocked: false,
  content: undefined,
});

export const setContent = content => {
  return ({
    type: 'setContent',
    content,
  });
};
export const expandMenu = isExpanded => {
  return ({
    type: 'expandMenu',
    isExpanded,
  });
};
export const expandAddGrid = isExpanded => {
  return ({
    type: 'expandAddGrid',
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
  switch(action.type){
    case 'expandMenu': {
      return state.set('menuExpanded', action.isExpanded).set('isLocked', false);
    }
    case 'lockGrid': {
      return state.set('isLocked', false);  // making it so you cannot lock grid for now
    }
    case 'expandAddGrid': {
      return state.set('addGridExpanded', action.isExpanded);
    }
    case 'setContent': {
      return state.set('content', action.content);
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
      <Layout />
    </Provider>
  </MuiThemeProvider>
);

const Routes = createRoutes(App);


ReactDOM.render(Routes, document.getElementById('root'));
