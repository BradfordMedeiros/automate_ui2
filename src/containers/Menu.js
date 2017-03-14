import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import { setContent, expandMenu, setGridIsOpen } from './grid/module';

import SSH from '../ssh/ssh';

const MenuContainer = ({ setSSHContent, ...otherProps}) => (
  <Menu {...otherProps}  buttonLabels={
    [
      'home',
      'creation',
    {
      label: 'ssh',
      onClick: setSSHContent,
    },
    'disconnect']} />
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  setSSHContent: () => {
    //dispatch(setContent(<SSH />))
    //dispatch(expandMenu(true));
    dispatch(setGridIsOpen());
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
