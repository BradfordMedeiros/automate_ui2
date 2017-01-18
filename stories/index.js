import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {muiTheme } from 'storybook-addon-material-ui';
import Menu from '../src/components/menu/menu';
import { List } from 'immutable';
storiesOf('Button', module)
  .addDecorator(muiTheme(darkBaseTheme))
  .add('basic menu', () => (
    <Menu buttonLabels={['connect','disconnect', 'free', 'evolve', 'builder']} />

  ))
  .add('scrollable menu', () => (
        <Menu buttonLabels={['one','two','three','four','five','six',7,8,9,10,'11','twelve','sixteeeennnnnnnnnnnnnnnnnnnn']} />
  ));
