import React, { Component } from 'react';
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
import WithData from './data/WithData';
import Layout from './layout';
import logger from './util/logger';
import reducer from './containers/module';
import connection from './containers/disconnected_overlay/module';
import gridReducer from './containers/grid/module/module';

import { setLoggedIn, setLoggedOut } from './containers/module';
import './style.css';

injectTapEventPlugin();

const reducers = combineReducers({ reducer, connection, gridReducer });
const store = createStore(reducers, applyMiddleware(logger(), thunk));
const  WithIsSystemLocked = WithData.polling.WithIsSystemLocked;

persistStore(store,
  {
    whitelist: ['gridReducer'],
  });

const tryLogin = (store) => {
  // load token from local storage
  // if it is not in storage, we just set state to show the login
  // if
};

class MainApp extends Component {
  state = {
    loadingTokens: true,
  };
  componentDidMount() {
    this.loadTokensFromStorage();
  }
  loadTokensFromStorage = () => {

  };
  render() {
    return (
      <WithIsSystemLocked>
        {({ isLocked, systemName }) => {
          return (
            <div>
              <Helmet title={isLocked ? (systemName ? systemName: 'automate'): 'automate'} />
              <Layout
                systemLocked={isLocked === true}
                systemName={systemName}
              />
            </div>
          )
        }}
      </WithIsSystemLocked>
    );
  }
}

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store} >
      <MainApp />
    </Provider>
  </MuiThemeProvider>
);

const Routes = createRoutes(App);

ReactDOM.render(Routes, document.getElementById('root'));
