import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui';
import { List as IList } from 'immutable';
import './style.css';


class Menu extends Component {
  renderItem = (item) => {
    if (typeof (item) === 'string') {
      return (
        <ListItem>
          <div className="liname">{item}</div>
        </ListItem>
      );
    }
    if (item.children) {
      return (
        <ListItem
          primaryTogglesNestedList
          nestedItems={item.children.map(childItem => this.renderItem(childItem))}
        >
          <div className="liname">{item.label}</div>
        </ListItem>
      );
    }
    return (
      <ListItem onClick={item.onClick} >
        <div className="liname">{item.label}</div>
      </ListItem>
    );
  }
  render() {
    const { buttonLabels, style } = this.props;
    return (
      <div style={style} className="menu" >
        <List>
          {buttonLabels.map(this.renderItem)}
        </List>
      </div>
    );
  }
}

Menu.propTypes = {
  buttonLabels: PropTypes.array,
  style: PropTypes.object,
};

Menu.defaultProps = {
  buttonLabels: IList([]),
};
export default Menu;
