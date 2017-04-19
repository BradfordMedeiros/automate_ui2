import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import { expandMenu, setGridIsOpen } from './module';
import { setContent, setActiveGrid, addGrid } from './grid/module';

const MenuContainer = (
  {
    grids,
    setSSHContent,
    closeSSHContent,
    setEventLog,
    closeMenu,
    menuIsExpanded,
    addGridExpanded,
    addGrid,
    setActiveGrid,
    ...otherProps
  }) => {
  const menuItems = grids.map(gridNumber => ({
    label: gridNumber,
    onClick: () => setActiveGrid(gridNumber),
  })).toJS();

  return (
    <div>
      <Menu
        {...otherProps} buttonLabels={
        [
          {
            label: 'Home',
            onClick: () => {
              if (menuIsExpanded) {
                closeMenu();
              }
              if (addGridExpanded) {
                closeSSHContent();
              }
            },
          },
          ...menuItems,
          {
            label: 'Add Grid',
            onClick: addGrid,
          },
          {
            label: 'Events',
            onClick: () => {
              if (menuIsExpanded || addGridExpanded) {
                closeMenu();
                closeSSHContent();
              } else {
                setEventLog();
              }
            },
          },
          {
            label: 'SSH',
            onClick: () => {
              if (addGridExpanded || menuIsExpanded) {
                closeMenu();
                closeSSHContent();
              } else {
                setSSHContent();
              }
            },
          }]}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  addGridExpanded: state.getIn(['reducer', 'gridIsOpen']),
  grids: state.getIn(['gridReducer', 'grids']),
});

const mapDispatchToProps = (dispatch, props) => ({
  setSSHContent: () => {
    dispatch(setGridIsOpen(true));
  },
  closeSSHContent: () => {
    dispatch(setGridIsOpen(false));
  },
  setEventLog: () => {
    dispatch(setContent(() => <EventLog />));
    dispatch(expandMenu(true));
  },
  closeMenu: () => {
    dispatch(expandMenu(false));
  },
  addGrid: () => dispatch(addGrid()),
  setActiveGrid: gridNumber => dispatch(setActiveGrid(gridNumber)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
