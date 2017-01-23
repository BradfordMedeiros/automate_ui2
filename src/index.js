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
  layout: fromJS([{"w":3,"h":4,"x":0,"y":0,"i":"a", minW: 3, maxW: 3, minH: 4, maxH: 4, "moved":false,"static":false},{"w":7,"h":22,"x":5,"y":0,"i":"b","minW":2,"moved":false,"static":false},{"w":5,"h":13,"x":0,"y":9,"i":"c","moved":false,"static":false}]),
});
export const setContent = content => {
  return ({
    type: 'setContent',
    content,
  });
};
export const setLayout = layout => {
  return ({
    type: 'setLayout',
    layout,
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
  window.state = state;
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
    case 'setLayout': {
      return state.set('layout', action.layout);
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
