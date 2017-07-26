import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Desktop, Mobile } from './util/ViewportSizing';
import { container as Appbar } from './containers/Appbar';
import { container as Grid } from './containers/grid/MultiGrid';
import { container as SelectionOverlay } from './containers/Overlay';
import { container as Menu } from './containers/Menu';
import { container as Notifications } from './containers/notifications/Notifications';

import Footer from './components/footer/footer';

import { tileNames, tileNameToTile } from './containers/grid/tiles';

import { container as DisconnectedOverlay } from './containers/disconnected_overlay/DisconnectedOverlay';

const appStyle = { width: '100vw', height: '100vh', margin: 0, padding: 0, left: 0, top: 0, overflow: 'hidden' };
const desktopStyles = {
  appbar: { height: 50, width: '100%', top: 0, zIndex: 200 },
  grid: menuIsHidden => (menuIsHidden ?
    { top: 50, bottom: 10, left: 0, right: 0 } :
    { top: 50, bottom: 10, left: 210, right: 0 }),
  menu: { width: 210, height: '94%', position: 'fixed', left: 1, top: 48, zIndex: 500 },
  overlay: menuIsHidden => (menuIsHidden ? { left: 0, right: 1 } : { left: 213, right: 1 }),
};
const mobileStyles = {
  appbar: { height: 50, width: '100%', top: 0, zIndex: 200 },
  grid: { top: 50, bottom: 10, left: 0, right: 0 },
  overlay: { left: 0, right: 0 },
};

class Layout extends Component {
  render() {
    const { hideMenu } = this.props;
    return (
      <div style={appStyle}>
        <Desktop>
          {hideMenu ? null : <Menu style={desktopStyles.menu} />}
          <Appbar tileNames={tileNames} style={desktopStyles.appbar} />
          <Grid
            tileNames={tileNames}
            tileNameToTile={tileNameToTile}
            style={desktopStyles.grid(hideMenu)}
          />
          <SelectionOverlay
            left={desktopStyles.overlay(hideMenu).left}
            right={desktopStyles.overlay(hideMenu).right}
          />
          <Footer />
          <DisconnectedOverlay />
          <Notifications />
        </Desktop>

        <Mobile>
          <Appbar tileNames={tileNames} style={mobileStyles.appbar} />
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
};

Layout.defaultProps = {
  hideMenu: false,
};

const mapStateToProps = state => ({
  hideMenu: state.getIn(['reducer', 'menuIsHidden']),
});

export default connect(mapStateToProps)(Layout);

