import React, { Component, PropTypes } from 'react';
import { Toggle, Drawer, MenuItem,  Subheader, Divider, IconButton } from 'material-ui';
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

const lockStyle = {
  animation: 'lock 0.1s forwards'
};

const unlockStyle = {
  animation: 'unlock 0.1s forwards'
};

class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  toggleLock = () => {
    const { isLocked, lockGrid } = this.props;
    if (isLocked){
      lockGrid(false);
    }else{
      lockGrid(true);
    }
  };
  render() {
    const { rotateAddIcon, onRotatedAddIconClick, isLocked, tileNames, onTileClick, onToggle, style, onHideMenu } = this.props;
    const xStyle  = rotateAddIcon ? styles.expanded : styles.not_expanded;

    const { height, top, marginTop } = style;
    return (
      <div className="titlebar" style={style}>
        <Drawer
          open={this.state.open}
          openSecondary
          containerStyle={{
            top: ( height ? height : 0) + (marginTop ? marginTop : 0),
            marginTop,
          }}
        >
          <Subheader>Tiles</Subheader>
          <Divider />
          { (tileNames === undefined || tileNames.length === 0) ?
            <MenuItem>No tiles</MenuItem> :
            tileNames.map(tile => <MenuItem onClick={() => {
              this.setState({ open: false });
              onTileClick(tile);
            }}>{tile}</MenuItem>)
          }
        </Drawer>
        <div className="hide_menu" onClick={() => onHideMenu()}><IconButton><NavigationMenu /></IconButton></div>
        <div className="toggle">
          <Toggle onToggle={onToggle} />
        </div>
         <div className="xIcon" style={xStyle} onClick={() => {
          if (rotateAddIcon){
            onRotatedAddIconClick();
          }else{
            this.setState({
              open: !this.state.open,
            })
          }
        }}>&times;</div>

        <div className="holder" >
          <div className="app_title"><h1>automate</h1></div>
        </div>
      </div>
    );
  }
}

Appbar.propTypes = {
  style: PropTypes.object,
  isLocked: PropTypes.bool,
  rotateAddIcon: PropTypes.bool,
  onRotatedAddIconClick: PropTypes.func,
  tileNames: PropTypes.array,
  onTileClick: PropTypes.func,
  onToggle: PropTypes.func,
  onHideMenu: PropTypes.func,
};

Appbar.defaultProps = {
  isLocked: false,
  rotateAddIcon: false,
  onRotatedAddIconClick: () => {},
};

export default Appbar;