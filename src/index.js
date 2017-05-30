import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist-immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createRoutes from './Routing';
import Layout from './layout';
import logger from './util/logger';
import reducer from './containers/module';
import connection from './containers/disconnected_overlay/module';
import gridReducer from './containers/grid/module';
import './style.css';

injectTapEventPlugin();

const reducers = combineReducers({ reducer, connection, gridReducer });
const store = createStore(reducers, applyMiddleware(logger(), thunk));

persistStore(store,
  {
    whitelist: ['gridReducer'],
  });

const App = () => (
  <div>
    <Helmet title="automate" />
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
