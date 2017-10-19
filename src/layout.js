import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Desktop, Mobile } from './util/ViewportSizing';
import { container as Appbar } from './containers/Appbar';
import { container as Drawer } from './containers/Drawer';
import { container as Grid } from './containers/grid/Grid';
import { container as SelectionOverlay } from './containers/Overlay';
import { container as Menu } from './containers/Menu';

import { container as Notifications } from './containers/notifications/Notifications';

import { tileNames, tileNameToTile } from './containers/grid/tile/tiles';

import { container as DisconnectedOverlay } from './containers/disconnected_overlay/DisconnectedOverlay';

const appStyle = { width: '100vw', height: '100vh', position: 'absolute', margin: 0, padding: 0, left: 0, top: 0, overflow: 'hidden' };
const desktopStyles = {
  appbar: { height: 50, width: '100%', top: 0, zIndex: 200, position: 'absolute' },
  grid: menuIsHidden => (menuIsHidden ?
    { top: 50, bottom: 0, left: 0, right: 0, position: 'absolute' } :
    { top: 50, bottom: 0, left: 210, right: 0, position: 'absolute' }),
  menu: { width: 210, position: 'fixed', left: 1, top: 48, bottom: 0, zIndex: 500, position: 'absolute' },
  overlay: menuIsHidden => (menuIsHidden ? { left: 0, right: 1, position: 'absolute' } : { left: 211, right: 1, position: 'absolute' }),
  drawer: { top: 50, height: 'calc(100% - 50px)' },
};
const mobileStyles = {
  appbar: { height: 50, width: '100%', top: 0, zIndex: 200, position: 'absolute' },
  grid: { top: 50, bottom: '6vh', left: 0, right: 0, position: 'absolute'},
  menu: { width: '100vw', top: '94vh', bottom: 0, zIndex: 100000, position: 'absolute' },
  overlay: { left: 0, right: 0, position: 'absolute' },
  drawer: { top: 50, height: 'calc(100% - 95px)' },
};

class Layout extends Component {
  render() {
    const {
      hideMenu,
      systemLocked,
    } = this.props;

    const shouldHideMenu = hideMenu || systemLocked;
    return (
      <div style={appStyle}>
        <Desktop>
          {shouldHideMenu ? null : <Menu style={desktopStyles.menu} />}
          <Appbar systemLocked={systemLocked} showHideMenu style={desktopStyles.appbar} />
          <Drawer style={desktopStyles.drawer} tileNames={tileNames} />
          <Grid
            tileNames={tileNames}
            tileNameToTile={tileNameToTile}
            style={desktopStyles.grid(shouldHideMenu)}
          />
          <SelectionOverlay
            left={desktopStyles.overlay(shouldHideMenu).left}
            right={desktopStyles.overlay(shouldHideMenu).right}
          />
          <DisconnectedOverlay />
          <Notifications />
        </Desktop>

        <Mobile>
          {shouldHideMenu ? null : <Menu isMinimal style={mobileStyles.menu} />}
          <Appbar systemLocked={systemLocked} style={mobileStyles.appbar} />
          <Drawer style={mobileStyles.drawer} tileNames={tileNames} />
          <Grid tileNames={tileNames} tileNameToTile={tileNameToTile} style={mobileStyles.grid} />
          <SelectionOverlay left={mobileStyles.overlay.left} right={mobileStyles.overlay.right} />
          <Notifications />
        </Mobile>
      </div>
    );
  }
}

Layout.propTypes = {
  hideMenu: PropTypes.bool,
  systemLocked: PropTypes.bool,
};

const mapStateToProps = state => ({
  hideMenu: state.getIn(['reducer', 'menuIsHidden']),
});

export default connect(mapStateToProps)(Layout);

