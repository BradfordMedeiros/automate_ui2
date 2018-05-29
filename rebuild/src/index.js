import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './style.css';

import getData from './data/getData';
import Appbar from './components/layout/appbar/Appbar';
import Overlay from './components/layout/overlay/Overlay';
import Drawer from './containers/layout/Drawer';


import AccountManagement from './containers/overlayContent/AccountManagement';
import DeviceInfo from './containers/overlayContent/DeviceInfo';
import EventLog from './containers/overlayContent/EventLog';
import Environment from './containers/overlayContent/Environment';
import Database from './containers/overlayContent/Database';

import LoginScreen from './containers/special/LoginScreen';
import DisconnectedOverlay from './components/special/disconnected_overlay/DisconnectedOverlay';

import Grid from './components/layout/grid/Grid';
import tiles from './containers/special/tiles/tiles';
// const Data = getData();


const contentMap = {
  disconnected: <DisconnectedOverlay />,
  login: <LoginScreen />,
  database: <Database />,
  event: <EventLog />,
  account: <AccountManagement />,
  device: <DeviceInfo />,
  env: <Environment />,
};

class InjectableContent extends Component {
    state = {
      content: contentMap.disconnected,
    };
    setContent = (contentType) => {
      const component = contentMap[contentType];
      this.setState({
        content: component || null,
      });
    };
    render() {
      window.set = this.setContent;
      return this.state.content;
    }
}

class MockApp extends Component {
    state = {
      drawerOpen: false,
      showContent: false,
    };
    toggle = () => {
      this.setState({
        drawerOpen: !this.state.drawerOpen,
      });
    }
    toggleContent = () => {
      this.setState({
        showContent: !this.state.showContent,
      })

    }
    render() {
      window.toggle = this.toggle;
      return (
          <div style={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            //background: 'radial-gradient(rgb(30,30,30),rgb(20,20,20))',
            background: 'url(http://getwallpapers.com/wallpaper/full/5/3/a/623615.jpg)',
            boxShadow: '0px 0px 10px 2px black inset',
          }}
          >
            <Appbar
                title="automate"
                showHideMenu
                rotateAddIcon={this.state.drawerOpen}
                systemLocked={false}
                onRotatedAddIconClick={() => {
                  console.log('rotated click');
                  this.setState({
                    drawerOpen: false,
                  });
                }}
                onAddIconClick={() => {
                  console.log('hide menu clicked');
                  this.setState({
                    drawerOpen: true,
                  });
                }}
                onUserIconClick={() => {
                  console.log('user icon clicked');
                }}
                onHideMenu={() => {
                  this.toggleContent();
                }}
                onToggle={() => {
                  console.log('toggle');
                }}
            />

            <div style={{ flexGrow: 1, position: 'relative' }}>
              <Overlay isExpanded={this.state.showContent}>
                <InjectableContent />
              </Overlay>
              <Grid
                  onLayoutChange={(_, allLayouts) => {
                    localStorage.setItem('layout', JSON.stringify(allLayouts));
                  }}
                  layout={(() => {
                    try {
                      const value = JSON.parse(localStorage.getItem('layout'))
                      if (value){
                        return value;
                      }
                    }catch(err){
                    }
                  })()}
                  tiles={tiles}
                  onTileDoubleClick={tile  => {
                    console.log('clicked: ', tile);
                  }}
                  isEditable={true}

              />
              <Drawer open={this.state.drawerOpen} onRequestClose={() => { this.setState({ drawerOpen: false })}} />
            </div>

          </div>
      );
    }
}


ReactDOM.render(<MockApp />, document.getElementById('root'));
