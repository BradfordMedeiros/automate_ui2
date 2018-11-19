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

import getLoginScreen from './containers/special/getLoginScreen/getLoginScreen';
import DisconnectedOverlay from './components/special/disconnectedOverlay/DisconnectedOverlay';

import Grid from './components/layout/grid/Grid';
import tiles from './containers/layout/Grid/components/tiles/tiles';

const Data = getData();
const Programming = getProgramming({ 
  WithStates: Data.polling.WithStates,
  WithActions: Data.polling.WithActions,
  WithEvents: Data.polling.WithEvents,
  WithDeviceInfo: Data.polling.WithSystemInfo,
  WithEnv: Data.polling.WithEnv,
})

const LoginScreenWithData = getLoginScreen(Data.polling.WithAccounts);
const AccountManagement =  getAccountManagement(Data.polling.WithMyAccount);

const getContentMap = ({ getUserToken, onLogout }) => ({
  disconnected: () => <DisconnectedOverlay />,
  account: () => <AccountManagement userToken={getUserToken()} onLogout={onLogout} />,
  programming: () => <Programming/>,
  selection: () => (
    <div style={{ background: 'blue', color: 'white' }}>
      <div onClick={() => window.set('disconnected')}>disconnected</div>
      <div onClick={() => window.set('login')}>login</div>
      <div onClick={() => window.set('account')}>account</div>
      <div onClick={() => window.set('programming')}>programming</div>
    </div>
  )
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
            isLoggedIn: false,
            showContent: false,
          })
        }
      });
      this.state = {
        drawerOpen: false,
        showContent: false,
        isEditable: false,
        isLoggedIn: false,
        content: this.contentMap.account,
      };
    }
    setContent = (contentType) => {
      const component = this.contentMap[contentType]();
      this.setState({
        content: component || null,
      });
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

    };
    render() {
      window.toggle = this.toggle;
      window.set = this.setContent;

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
                systemLocked={!this.state.isLoggedIn}
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
                  this.setContent('account');
                  this.toggleContent();
                }}
                onHideMenu={() => {
                  this.setContent('programming');
                  this.toggleContent();
                }}
                onToggle={() => {
                  console.log('toggle editable');
                  this.setState({
                    isEditable: !this.state.isEditable,
                  })
                }}
            />
            <div style={{ flexGrow: 1, position: 'relative' }}>
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
                {this.state.isLoggedIn && this.state.content}
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
