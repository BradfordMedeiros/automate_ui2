import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import { List as IList } from 'immutable';
import { ActionDashboard, ActionHome, ActionInfo, ActionEvent } from 'material-ui/svg-icons';
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
  getIconForItem = item => {
    return (
      <div
        onClick={() => {
          if (item.onClick){
            item.onClick();
          }else{

          }
        }}
        style={menuItemStyle}>
          {item.label}
      </div>
    );
  }
  render() {
    const { buttonLabels, style } = this.props;
    return (
      <div style={{...style, ...boxStyle}}>
        {buttonLabels.map(item => this.getIconForItem(item))}
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
