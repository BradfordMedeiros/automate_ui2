import React, { Component, PropTypes } from 'react';
import './style.css';

const style = {
  expanded: {
    animation: 'turn_into_x 0.1s forwards',
  },
  not_expanded: {
    animation: 'turn_out_x 0.1s forwards',
  }
};

const lockStyle = {
  animation: 'lock 0.1s forwards'
};

const unlockStyle = {
  animation: 'unlock 0.1s forwards'
};

class Appbar extends Component {
  toggleLock = () => {
    const { isLocked, lockGrid } = this.props;
    if (isLocked){
      lockGrid(false);
    }else{
      lockGrid(true);
    }
  };
  render() {
    console.log('appbar updating');
    const { rotateAddIcon, onRotatedAddIconClick, isLocked } = this.props;
    const xStyle  = rotateAddIcon ? style.expanded : style.not_expanded;
    return (
      <div className="titlebar">

        <div className="xIcon" style={xStyle} onClick={() => {
          if (rotateAddIcon){
            onRotatedAddIconClick();
          }
        }}>&times;</div>

        <div className="holder" >
          <div className="lockIconDivet"  onClick={this.toggleLock} />
          <div className="xIconDivet" style={isLocked ? lockStyle : unlockStyle}  onClick={this.toggleLock} />
          <div className="app_title"><h1>automate</h1></div>
        </div>
      </div>
    );
  }
}

Appbar.propTypes = {
  rotateAddIcon: PropTypes.bool,
  isLocked: PropTypes.bool,
  onRotatedAddIconClick: PropTypes.func.isRequired,
};

export default Appbar;