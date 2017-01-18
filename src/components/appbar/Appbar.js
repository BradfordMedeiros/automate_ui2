import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { expandMenu, lock } from '../../index.js';
import { ActionLock } from 'material-ui/svg-icons';
import { FontIcon } from 'material-ui';
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
    const { menuExpanded, expandMenu, isLocked } = this.props;
    const xStyle  = menuExpanded ? style.expanded : style.not_expanded;
    return (
      <div className="titlebar">

        <div className="xIcon" style={xStyle} onClick={() => {
          if (menuExpanded){
            expandMenu();
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
  menuExpanded: PropTypes.bool,
  isLocked: PropTypes.bool,
  expandMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  menuExpanded: state.get('menuExpanded'),
  isLocked: state.get('isLocked'),
});

const mapDispatchToProps = dispatch => ({
  expandMenu: () =>  dispatch(expandMenu(false)),
  lockGrid: lockState => dispatch(lock(lockState)),
});

export default Appbar;
export const container = connect(mapStateToProps, mapDispatchToProps)(Appbar);
