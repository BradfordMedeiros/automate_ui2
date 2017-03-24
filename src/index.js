import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist-immutable';
import './style.css';

import { combineReducers } from 'redux-immutable';
import createRoutes from './Routing';
import Layout from './layout';
import Helmet from 'react-helmet';
import logger from './util/logger';
import reducer from './containers/grid/module';
import connection from './containers/disconnected_overlay/module';

const reducers = combineReducers({ reducer, connection });
const store = createStore(reducers, applyMiddleware(logger(), thunk));

persistStore(store,
  {
    whitelist: ['reducer'],
  });

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
