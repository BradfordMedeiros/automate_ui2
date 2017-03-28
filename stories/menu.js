import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { fromJS, List } from 'immutable';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {muiTheme } from 'storybook-addon-material-ui';
import { NavigationMoreVert, NotificationPower, ActionAccessibility } from 'material-ui/svg-icons';
import Menu from '../src/components/menu/menu';
import MinimalMenu from '../src/components/menu/minimalMenu';


const buttonLabels0 = fromJS(['connect','disconnect', 'free', 'evolve', 'builder']);
const buttonLabels1 = fromJS(['one','two','three','four','five','six',7,8,9,10,'11','twelve','sixteeeennnnnnnnnnnnnnnnnnnn']);
storiesOf('menu')
  .addDecorator(muiTheme(darkBaseTheme))
  .add('basic', () => (
    <Menu buttonLabels={buttonLabels0} />

  ))
  .add('scrollable', () => (
    <Menu buttonLabels={buttonLabels1} />
  ))
  .add('thin', () => (
    <Menu style={{ width: 300 }} buttonLabels={buttonLabels1} />
  ));


const buttonIcons = List([<NavigationMoreVert/>, <NotificationPower/>, <ActionAccessibility/>]);
const onClick = List([action('action 0'), action('action 1'), action('action 2')]);
storiesOf('minimal menu')
  .addDecorator(muiTheme(darkBaseTheme))
  .add('basic', () => (
    <MinimalMenu
      style={{ height: '100%', top: 0 }}
      buttonIcons={buttonIcons}
      onClickIcon={onClick}
    />
  ));


