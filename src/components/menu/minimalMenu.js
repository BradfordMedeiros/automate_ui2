import React, { Component, PropTypes } from 'react';
import { List as IList } from 'immutable';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';

import './style.css';

const boxStyle = {
  background: 'rgb(55,55,55)',
  boxShadow: '0px 0px 5px 1px black',
  borderTop: '0.1px solid black',
  display: 'flex',
  justifyContent: 'space-around',
};

const menuItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 8,
  color: 'whitesmoke',
  border: '1px solid black',
  boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.2) inset',
  padding: 10,
  background: 'rgba(0, 0, 0, 0.19)',
  fontSize: 10,
  textTransform: 'uppercase',
  cursor: 'pointer',
};

class MinimalMenu extends Component {
  state = {
    anchorElement: undefined,
    items: undefined,
    showMenu: false,
  }
  getIconForItem = (item, onPopOverClick) => {
    return (
      <div
        onClick={element => {
          if ((!item.children || item.children.length  === 0) && item.onClick){
            item.onClick();
          }else{
            onPopOverClick(item, element.currentTarget);
          }
        }}
        style={menuItemStyle}>
          {item.label}
      </div>
    );
  }
  handleClickIconItem = (item, element) => {
    this.setState({
      showMenu: true,
      anchorEl: element,
      items: item.children,
    })
  };
  handleRequestClose = () => {
    this.setState({
      showMenu: false,
      anchorEl: undefined,
      items: undefined,
    })
  };
  render() {
    const { buttonLabels, style } = this.props;
    return (
      <div style={{...style, ...boxStyle}}>
        {buttonLabels.map(item => this.getIconForItem(item, (item, element) => {
          console.log('button item clicked');
          this.handleClickIconItem(item, element);
        }))}
        <Popover
          open={this.state.showMenu}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            {this.state.items && this.state.items.map(item => (
              <MenuItem
                primaryText={item.label}
                onClick={() => {
                  this.handleRequestClose();
                  item.onClick();
                }}
              />)
            )}
          </Menu>
        </Popover>
      </div>
    );
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
