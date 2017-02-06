import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS, List } from 'immutable';

import createRoutes from './Routing';
import Layout from './layout';
import Helmet from 'react-helmet';
import logger from './util/logger';
import reducer from './containers/grid/module';

import WithMqtt from './mqtt/WithMqtt';


const reducers = combineReducers({ reducer });
const store = createStore(reducers, applyMiddleware(logger()));

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
