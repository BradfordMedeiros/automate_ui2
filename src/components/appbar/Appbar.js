import React, { Component, PropTypes } from 'react';
import { Toggle, Drawer, List, ListItem, Subheader, Divider, MenuItem, IconButton } from 'material-ui';
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
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  renderTileAsMenuItem = (tile, index, path) => {
    const { onTileClick } = this.props;
    if (typeof (tile) === typeof ({})) {
      return (
        <ListItem
          key={path}
          primaryText={tile.label}
          primaryTogglesNestedList
          nestedItems={!tile.children ? [] : tile.children.map((value, tileIndex) => this.renderTileAsMenuItem(value, tileIndex, `${path}/${tileIndex}`))}
        />
      );
    }
    return (
      <ListItem
        key={path}
        primaryText={tile}
        onClick={() => {
          this.setState({ open: false });
          onTileClick(tile);
        }}
      />
    );
  }
  render() {
    const {
      rotateAddIcon,
      onRotatedAddIconClick,
      tileNames,
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
        <Drawer
          open={this.state.open}
          openSecondary
          containerStyle={{
            top: (height || 0) + (marginTop || 0),
            marginTop,
          }}
        >
          <Subheader>Tiles</Subheader>
          <Divider />
          { (tileNames === undefined || tileNames.length === 0) ?
            <MenuItem>No tiles</MenuItem> :
            (<List>{tileNames.map(
              (value, index) => this.renderTileAsMenuItem(value, index, index))}
            </List>
            )
          }
        </Drawer>
        {showHideMenu && <div className="hide_menu" onClick={() => onHideMenu()}><IconButton><NavigationMenu /></IconButton></div>}
        <div className="toggle">
          <Toggle onToggle={onToggle} />
        </div>
        <div className="xBorderBox">
          <div
            className="xIcon"
            style={xStyle}
            onClick={() => {
              if (rotateAddIcon) {
                onRotatedAddIconClick();
              } else {
                this.setState({
                  open: !this.state.open,
                });
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
  onRotatedAddIconClick: PropTypes.func,
  tileNames: PropTypes.array,
  onTileClick: PropTypes.func,
  onToggle: PropTypes.func,
  onHideMenu: PropTypes.func,
  title: PropTypes.string,
};

Appbar.defaultProps = {
  rotateAddIcon: false,
  onRotatedAddIconClick: () => {},
};

export default Appbar;
