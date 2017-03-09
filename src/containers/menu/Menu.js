import React from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import Menu from '../../components/menu/menu';
import { setContent, expandMenu } from '../grid/module';

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
    dispatch(setContent(<div>hello world</div>))
    dispatch(expandMenu(true));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
