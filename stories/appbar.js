import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {muiTheme } from 'storybook-addon-material-ui';
import { List, Map } from 'immutable';
import Appbar from '../src/components/appbar/Appbar';

storiesOf('appbar')
  .addDecorator(muiTheme(darkBaseTheme))
  .add('styled', () => (
    <Appbar style={{ width: '75%', height: 70 }} />
  ))
  .add('thicker, wider, sexier', () => (
    <Appbar style={{ width: '85%', height: 270 }} />
  ))
  .add('unstyled', () => (
    <Appbar style={{ }}/>
  ));


