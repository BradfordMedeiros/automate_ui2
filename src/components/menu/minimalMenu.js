import React, { Component, PropTypes } from 'react';
import { IconMenu, IconButton } from 'material-ui';
import { List } from 'immutable';
import './style.css';


const iconStyle = {
  color: 'rgb(210,210,210)',
};

class MinimalMenu extends Component {
  handleClick = index => () => {
    const { onClickIcon } = this.props;
    const clickHandler =  onClickIcon.get(index);
    if (clickHandler) {
      clickHandler(index);
    }
  };
  render() {
    const { buttonIcons, style } = this.props;
    return (
      <div style={style} className='min_menu'>
        <div className="innerContainer">
        {buttonIcons.map((icon, index) => (
          <IconMenu
            key={index}
            open={false}
            onTouchTap={this.handleClick(index)}
            iconButtonElement={<IconButton iconStyle={iconStyle} >{icon}</IconButton>}
          />
        ))}
        </div>
      </div>
    );
  }
}

MinimalMenu.propTypes = {
  buttonIcons: PropTypes.object,
  onClickIcon: PropTypes.object,
  style: PropTypes.object,
};

MinimalMenu.defaultProps = {
  buttonIcons: List([]),
  onClickIcon: List([]),
};

export default MinimalMenu;