import React, { Component } from 'react';
import { List, ListItem } from 'material-ui';
import './style.css';


const liStyle = {
  border: '1px solid rgb(40,40,40)',
};

class Menu extends Component {
  render() {
    return (
      <div className="menu" >
        <List>
          <ListItem style={liStyle}><div className="liname"> home </div></ListItem>
          <ListItem style={liStyle}><div className="liname"> creation </div></ListItem>
          <ListItem style={liStyle}><div className="liname"> store </div></ListItem>
          <ListItem style={liStyle}><div className="liname"> disconnect </div></ListItem>
        </List>
      </div>
    );
  }
}

export default Menu;