import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui';
import { List as IList } from 'immutable';
import './style.css';


const liStyle = {
  border: '1px solid rgb(40,40,40)',
};

class Menu extends Component {
  renderItem = (item, index) => {
    if (typeof (item) === 'string') {
      return (
        <ListItem key={index} style={liStyle}>
          <div className="liname">{item}</div>
        </ListItem>
      );
    }
    return (
      <ListItem key={index} style={liStyle} onClick={item.onClick} >
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
