import React, { Component, PropTypes } from 'react';
import { Toggle, IconButton } from 'material-ui';
import { NavigationMenu, ActionAccountCircle } from 'material-ui/svg-icons';
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
      onUserIconClick,
      onToggle,
      onHideMenu,
      showHideMenu,
      title,
      systemLocked,
      style,
    } = this.props;

    const xStyle = rotateAddIcon ? styles.expanded : styles.not_expanded;

    const { height, marginTop } = style;
    return (
      <div className="titlebar" style={
        style}>
        {!systemLocked && <div className="accounts_menu" onClick={onUserIconClick}><IconButton><ActionAccountCircle /></IconButton></div>}
        {!systemLocked && (showHideMenu && <div className="hide_menu" onClick={onHideMenu}><IconButton><NavigationMenu /></IconButton></div>)}
        {!systemLocked && <div className="toggle">
          <Toggle
            thumbStyle={{ background: 'darkgrey' }}
            thumbSwitchedStyle={{ background: 'white' }}
            onToggle={onToggle}
          />
        </div>}
        {!systemLocked && <div className="xBorderBox">
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
        </div>}
        <div className="app_title">{title}</div>
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
  onUserIconClick:  PropTypes.func,
  onToggle: PropTypes.func,
  onHideMenu: PropTypes.func,
  title: PropTypes.string,
  systemLocked: PropTypes.bool,
};

Appbar.defaultProps = {
  rotateAddIcon: false,
  onAddIconClick: () => {},
  onRotatedAddIconClick: () => {},
};

export default Appbar;
