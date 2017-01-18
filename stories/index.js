import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import Welcome from './Welcome';
import Menu from '../src/components/menu/menu';

storiesOf('Button', module)
  .add('with text', () => (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Menu />
      </MuiThemeProvider>
  ))
  .add('apppbar', () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Menu />
    </MuiThemeProvider>
  ));
