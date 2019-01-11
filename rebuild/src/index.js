import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './style.css';

import getData from './data/getData';
import Appbar from './components/layout/appbar/Appbar';
import Overlay from './components/layout/overlay/Overlay';
import Drawer from './containers/layout/Drawer';


import getAccountManagement from './containers/overlayContent/getAccountManagement';
import getProgramming from './containers/overlayContent/Programming/getProgramming';

import getLoginScreen from './containers/special/getLoginScreen';
import getDisconnectedOverlay from './containers/special/getDisconnectedOverlay';

import Grid from './components/layout/grid/Grid';
import tiles from './containers/layout/Grid/components/tiles/tiles';

const Data = getData();
const Programming = getProgramming({ 
  WithStates: Data.polling.WithStates,
  WithActions: Data.polling.WithActions,
  WithEvents: Data.polling.WithEvents,
  WithDeviceInfo: Data.polling.WithSystemInfo,
  WithEnv: Data.polling.WithEnv,
  WithSequences: Data.polling.WithSequences,
})

const LoginScreenWithData = getLoginScreen(Data.polling.WithAccounts);
const AccountManagement =  getAccountManagement(Data.polling.WithMyAccount);
const DisconnectedOverlay = getDisconnectedOverlay(Data.polling.WithStatus);

const getContentMap = ({ getUserToken, onLogout }) => ({
  account: () => <AccountManagement userToken={getUserToken()} onLogout={onLogout} />,
  programming: () => <Programming/>,
})



class MockApp extends Component {
    constructor(props){
      super(props);
      this.userToken = null;
      this.contentMap = getContentMap({
        getUserToken: () => this.userToken,
        onLogout: () => {
          console.log('logout called')
          this.userToken = null;
          this.setState({
            isLoggedIn: true,
            showContent: false,
          })
        }
      });
      this.state = {
        drawerOpen: false,
        showContent: false,
        isEditable: false,
        isLoggedIn: false,
        enableControls: true,
        contentString: 'account',
      };
    }
    setContent = (contentType) => {
      this.setState({
        contentString: contentType,
      });
    };
    onConnected = () => {
      console.log("connected !!!")
      this.setState({
        enableControls: true,
      })
    };
    onDisconnected = () => {
      this.setState({
        showContent: false,
        enableControls: false,
      })
    };
    render() {
      return (
          <div style={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            background: 'radial-gradient(rgb(30,30,30),rgb(20,20,20))',
            boxShadow: '0px 0px 10px 2px black inset',
          }}
          >
            <Appbar
                title="automate"
                showHideMenu
                rotateAddIcon={this.state.drawerOpen}
                systemLocked={!this.state.isLoggedIn || !this.state.enableControls}
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
                    showContent: false,
                  });
                }}
                onUserIconClick={() => {
                  if (this.state.contentString === 'account'){
                    this.setState({
                      showContent: !this.state.showContent,
                      drawerOpen: false,
                    })
                    return;
                  }

                  this.setContent('account');
                  this.setState({
                    showContent: true,
                    drawerOpen: false,
                  })

                }}
                onHideMenu={() => {
                  if (this.state.contentString === 'programming'){
                    this.setState({
                      showContent: !this.state.showContent,
                      drawerOpen: false,
                    })
                    return;
                  }
                  this.setContent('programming');
                  this.setState({
                    showContent: true,
                    drawerOpen: false,
                  })
                }}
                onToggle={() => {
                  console.log('toggle editable');
                  this.setState({
                    isEditable: !this.state.isEditable,
                    showContent: false,
                  })
                }}
            />
            <div style={{ flexGrow: 1, position: 'relative' }}>
              <DisconnectedOverlay onConnected={this.onConnected} onDisconnected={this.onDisconnected} />

              {!this.state.isLoggedIn && (
                <LoginScreenWithData 
                  onLogin={token => {
                    this.userToken = token;
                    this.setState({
                      isLoggedIn: true,
                    })
                  }}
                />
              )}
              <Overlay isExpanded={this.state.showContent}>
                {this.state.isLoggedIn && this.contentMap[this.state.contentString]()}
              </Overlay>
              {/*<Grid
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
                  isEditable={this.state.isEditable}

              />*/}
              <div style={{ color: 'white' }}> grid placeholder</div>
              <Drawer open={this.state.drawerOpen} onRequestClose={() => { this.setState({ drawerOpen: false })}} />
            </div>

          </div>
      );
    }
}


ReactDOM.render(<MockApp />, document.getElementById('root'));
