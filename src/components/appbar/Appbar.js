import React, { Component, PropTypes } from 'react';
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
    const { rotateAddIcon, onRotatedAddIconClick, isLocked, style } = this.props;
    const xStyle  = rotateAddIcon ? styles.expanded : styles.not_expanded;
    return (
      <div className="titlebar" style={style}>

         <div className="xIcon" style={xStyle} onClick={() => {
          if (rotateAddIcon){
            onRotatedAddIconClick();
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
};

Appbar.defaultProps = {
  isLocked: false,
  rotateAddIcon: false,
  onRotatedAddIconClick: () => {},
};

export default Appbar;