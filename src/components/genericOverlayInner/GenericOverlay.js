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
        <div id="generic_overlay_top">
          {onMenuToggle ? <IconButton onClick={onMenuToggle} style={{ marginLeft: -20 }}><NavigationMenu /></IconButton>: null}
          <div id="generic_overlay_title">{title}</div>
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
