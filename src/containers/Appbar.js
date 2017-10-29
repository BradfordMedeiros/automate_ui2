import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AccountManagement from './AccountManagement';
import Appbar from '../components/appbar/Appbar';
import { setContent } from './grid/module/module';
import { expandMenu, lock, setMenu, setDrawerOpen } from './module';

const ConnectedAppbar = ({
  activeGrid,
  showHideMenu,
  openDrawer,
  systemLocked,
  systemName,
  onSetContent,
  menuIsExpanded,
  onHideOverlay,

  ...otherProps }) => {
  return (
    <Appbar
      {...otherProps}
      title={systemLocked ? (systemName ? systemName: 'automate') : 'automate'}
      showHideMenu={showHideMenu}
      onHideMenu={onHideOverlay}
      rotateAddIcon={menuIsExpanded}
      onRotatedAddIconClick={onHideOverlay}
      onUserIconClick={() => {
        if(menuIsExpanded){
          onHideOverlay();
        }else{
          onSetContent(<AccountManagement />);
        }
      }}
      systemLocked={systemLocked}
      systemName={systemName}
    />
  );
}

ConnectedAppbar.propTypes = {
  activeGrid: PropTypes.string.isRequired,
  onTileClick: PropTypes.func.isRequired,
  systemLocked: PropTypes.bool,
  systemName: PropTypes.string,
  onSetContent: PropTypes.func,
  menuIsExpanded: PropTypes.bool,
  onHideOverlay: PropTypes.func,
};

const mapStateToProps = state => ({
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  isLocked: state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddIconClick: () => dispatch(setDrawerOpen()),
  onHideOverlay: () => dispatch(expandMenu(false)),
  onToggle: (x, elementIsToggled) => dispatch(lock(!elementIsToggled)),
  onHideMenu: () => dispatch(setMenu()),
  onSetContent: (reactNode) => {
    if (ownProps.menuIsExpanded){
      dispatch(expandMenu(false));
    }else{
      dispatch(setContent(() => reactNode));
      dispatch(expandMenu(true));
    }
  },
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedAppbar);
