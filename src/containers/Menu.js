import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import RouterOptions from '../router_options/RouterOptions';
import EventLog from '../event_log/EventLog';
import { setContent, expandMenu, setGridIsOpen } from './grid/module';

const MenuContainer = (
  {
    setSSHContent,
    closeSSHContent,
    setRouterOptions,
    setEventLog,
    closeMenu,
    menuIsExpanded,
    addGridExpanded,
    ...otherProps
  }) => (
    <Menu
      {...otherProps} buttonLabels={
      [
        {
          label: 'home',
          onClick: () => {
            if (menuIsExpanded) {
              closeMenu();
            }
            if (addGridExpanded) {
              closeSSHContent();
            }
          },
        },
        {
          label: 'router',
          onClick: () => {
            if (menuIsExpanded || addGridExpanded) {
              closeMenu();
              closeSSHContent();
            } else {
              setRouterOptions();
            }
          },
        },
        {
          label: 'events',
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
          label: 'ssh',
          onClick: () => {
            if (addGridExpanded || menuIsExpanded) {
              closeMenu();
              closeSSHContent();
            } else {
              setSSHContent();
            }
          },
        },
        'disconnect']}
    />
);

const mapStateToProps = state => ({
  menuIsExpanded: state.getIn(['reducer', 'menuExpanded']),
  addGridExpanded: state.getIn(['reducer', 'gridIsOpen']),
});

const mapDispatchToProps = (dispatch, props) => ({
  setSSHContent: () => {
    dispatch(setGridIsOpen(true));
  },
  closeSSHContent: () => {
    dispatch(setGridIsOpen(false));
  },
  setRouterOptions: () => {
    dispatch(setContent(() => <RouterOptions />));
    dispatch(expandMenu(true));
  },
  setEventLog: () => {
    dispatch(setContent(() => <EventLog />));
    dispatch(expandMenu(true));
  },
  closeMenu: () => {
    dispatch(expandMenu(false));
  },
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
