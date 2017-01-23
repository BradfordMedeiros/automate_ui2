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
import Helmet from 'react-helmet';

const initialState = fromJS({
  menuExpanded: false,
  addGridExpanded: false,
  isLocked: false,
  content: undefined,
  layout: fromJS([{"w":6,"h":4,"x":0,"y":0,"i":"a", minW: 6, maxW: 6, minH: 4, maxH: 4, "moved":false,"static":false},
    {"w":1,"h":16,"x":5,"y":0,"i":"b", minW: 1, maxW: 1, minH: 16, maxH: 16, "moved":false,"static":false}]),
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
  <div>
    <Helmet title="Automate" />
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Provider store={store} >
        <Layout />
      </Provider>
    </MuiThemeProvider>
  </div>
);

const Routes = createRoutes(App);


ReactDOM.render(Routes, document.getElementById('root'));
