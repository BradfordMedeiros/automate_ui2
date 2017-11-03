import React, { PropTypes, Component } from 'react';
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

import { setLoggedIn, setToken } from './containers/module';
import './style.css';

injectTapEventPlugin();

const reducers = combineReducers({ reducer, connection, gridReducer });
const store = createStore(reducers, applyMiddleware(logger(), thunk));
const  WithIsSystemLocked = WithData.polling.WithIsSystemLocked;

persistStore(store,
  {
    whitelist: ['gridReducer'],
  });


class MainApp extends Component {
  state = {
    loadingTokens: true,
    token: null,
  };
  componentDidMount() {
    this.loadTokensFromStorage();
  }
  loadTokensFromStorage = () => {
    const token = localStorage.getItem('automate:login:token');
    this.props.store.dispatch(setToken(token));
    this.setState({
      loadingTokens: false,
    });
  };
  saveToken = token => {
    // put token into redux + local storage
    window.localStorage.setItem('automate:login:token', token);
    this.props.store.dispatch(setToken(token));
  };
  render() {
    const { isLocked, systemName } = this.props;
    if (this.state.loadingTokens){
      return null;
    }
    return (
      <Layout
        systemLocked={isLocked === true}
        systemName={systemName}
        onToken={tokenServerResponse => {
          this.saveToken(tokenServerResponse);
          this.props.store.dispatch(setLoggedIn({ username: 'debug, this should not be used'  }))
        }}
      />
    );
  }
}

MainApp.propTypes = {
  isLocked: PropTypes.bool,
  systemName: PropTypes.string,
  store: PropTypes.object,
};

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store} >
      <WithIsSystemLocked>
        {({ isLocked, systemName }) => {
          return (
            <div>
              <Helmet title={isLocked ? (systemName ? systemName: 'automate'): 'automate'} />
              <MainApp store={store} isLocked={isLocked} systemName={systemName} />
            </div>
          )
        }}
      </WithIsSystemLocked>
    </Provider>
  </MuiThemeProvider>
);

const Routes = createRoutes(App);

ReactDOM.render(Routes, document.getElementById('root'));
