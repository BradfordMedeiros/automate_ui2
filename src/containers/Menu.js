import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import EventLog from '../event_log/EventLog';
import { expandMenu, setGridIsOpen } from './module';
import { setContent, setActiveGrid } from './grid/module';

const MenuContainer = (
  {
    setSSHContent,
    closeSSHContent,
    setEventLog,
    closeMenu,
    menuIsExpanded,
    addGridExpanded,
    setActiveGridOne,
    setActiveGridZero,
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
          label: 'Grid 0',
          onClick: () => {
            setActiveGridZero();
          },
        },
        {
          label: 'Grid 1',
          onClick: () => {
            setActiveGridOne();
          },
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
  setActiveGridZero: () => {
    dispatch(setActiveGrid('0'));
  },
  setActiveGridOne: () => {
    dispatch(setActiveGrid('1'));
  },
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
