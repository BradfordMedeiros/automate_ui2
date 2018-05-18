import React, { Component } from 'react';
import PropTypes from "prop-types";
import Toggle from '@material-ui/core/Switch';
import AccountIcon from '@material-ui/icons/AccountCircle';
import NavigationMenu from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';
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
    } = this.props;

    const xStyle = rotateAddIcon ? styles.expanded : styles.not_expanded;

    return (
      <div className="titlebar">
          <div className="app_title">{title}</div>
          {!systemLocked && <div className="app_properties">
              <IconButton onClick={onUserIconClick} className="app_property"><AccountIcon /></IconButton>
              {showHideMenu && <IconButton className="app_property" onClick={onHideMenu}><NavigationMenu /></IconButton>}
              {<div className="app_property">
                  <Toggle
                      thumbStyle={{ background: 'darkgrey' }}
                      thumbSwitchedStyle={{ background: 'white' }}
                      onToggle={onToggle}
                  />
              </div>}
              {<div className="app_property">
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
                    >&times;
                  </div>
              </div>}
          </div>}
      </div>
    );
  }
}

Appbar.propTypes = {
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


/*{ && <div >



        </div>}
        */
