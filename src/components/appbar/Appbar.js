import React, { Component, PropTypes } from 'react';
import { Toggle, IconButton } from 'material-ui';
import { NavigationMenu } from 'material-ui/svg-icons';
import './style.css';

const styles = {
  expanded: {
    animation: 'turn_into_x 0.1s forwards',
  },
  not_expanded: {
    animation: 'turn_out_x 0.1s forwards',
  },
};

class Appbar extends Component {
  render() {
    const {
      rotateAddIcon,
      onAddIconClick,
      onRotatedAddIconClick,
      onToggle,
      onHideMenu,
      showHideMenu,
      title,
      style,
    } = this.props;

    const xStyle = rotateAddIcon ? styles.expanded : styles.not_expanded;

    const { height, marginTop } = style;
    return (
      <div className="titlebar" style={style}>
        {showHideMenu && <div className="hide_menu" onClick={() => onHideMenu()}><IconButton><NavigationMenu /></IconButton></div>}
        <div className="toggle">
          <Toggle
            thumbStyle={{ background: 'darkgrey' }}
            thumbSwitchedStyle={{ background: 'white' }}
            onToggle={onToggle}
          />
        </div>
        <div className="xBorderBox">
          <div
            className="xIcon"
            style={xStyle}
            onClick={() => {
              if (rotateAddIcon) {
                onRotatedAddIconClick();
              } else {
                onAddIconClick();
              }
            }}
          >&times;</div>
        </div>
        <div className="app_title"><h1>{title}</h1></div>
      </div>
    );
  }
}

Appbar.propTypes = {
  style: PropTypes.object,
  showHideMenu: PropTypes.bool,
  rotateAddIcon: PropTypes.bool,
  onAddIconClick: PropTypes.func,
  onRotatedAddIconClick: PropTypes.func,
  onToggle: PropTypes.func,
  onHideMenu: PropTypes.func,
  title: PropTypes.string,
};

Appbar.defaultProps = {
  rotateAddIcon: false,
  onAddIconClick: () => {},
  onRotatedAddIconClick: () => {},
};

export default Appbar;
