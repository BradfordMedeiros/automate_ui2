import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import { setContent, expandMenu, setGridIsOpen } from './grid/module';

const MenuContainer = (
  {
    setSSHContent,
    closeSSHContent,
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
        {
          label: 'Add New',
          onClick: () => { },
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
  setEventLog: () => {
    dispatch(setContent(() => <EventLog />));
    dispatch(expandMenu(true));
  },
  closeMenu: () => {
    dispatch(expandMenu(false));
  },
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
