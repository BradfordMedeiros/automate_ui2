import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui';
import { List as IList } from 'immutable';
import './style.css';

const liStyle = {
  border: '1px solid rgb(40,40,40)',
};

class MinimalMenu extends Component {
  render() {
    const { style } = this.props;
    return <div style={style}>minimal menu</div>
  }
}

MinimalMenu.propTypes = {
  buttonLabels: PropTypes.array,
  style: PropTypes.object,
};

MinimalMenu.defaultProps = {
  buttonLabels: IList([]),
};
export default MinimalMenu;
