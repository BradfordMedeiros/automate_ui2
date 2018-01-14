import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import { NavigationMenu } from 'material-ui/svg-icons'
import './style.css';

class GenericOverlay extends Component {
  render() {
    const {
      title,
      children,
      onMenuToggle,
      inject,
    } = this.props;

    return (
      <div id="generic_overlay">
        <div
          style={{
            width: '100%',
            background: 'rgb(40,40,40)',
            height: 60,
            fontSize: '140%',
            paddingLeft: 30,
            color: 'rgb(160,160,160)',
            borderBottom: '1px solid rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {onMenuToggle ? <IconButton onClick={onMenuToggle} style={{ marginLeft: -20 }}><NavigationMenu /></IconButton>: null}
          <div style={{ display: 'inline', cursor: 'pointer', paddingRight: 120 }}>{title}</div>
          {inject && inject()}
        </div>
        <div style={{ position: 'absolute', height: 'calc(100% - 60px)', width: '100%', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    );
  }
}


GenericOverlay.propTypes = {
  onMenuToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  inject: PropTypes.func,
};

export default GenericOverlay;
