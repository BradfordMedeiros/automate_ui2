import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux-immutable';
import { fromJS, List } from 'immutable';

import createRoutes from './Routing';
import Layout from './layout';
import Helmet from 'react-helmet';
import logger from './util/logger';
import reducer from './containers/grid/module';

import SSH from './ssh/ssh';

const reducers = combineReducers({ reducer  });
const store = createStore(reducers, applyMiddleware(logger(), thunk));


const App = () => (
  <div>
    <Helmet title="Automate" />
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Provider store={store} >
        <div>
          <Layout />
        </div>
      </Provider>
    </MuiThemeProvider>
  </div>
);

const Routes = createRoutes(App);


ReactDOM.render(Routes, document.getElementById('root'));
